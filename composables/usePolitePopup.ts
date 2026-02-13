import {
    useWindowScroll,
    useTimeoutFn,
    useLocalStorage,
    useWindowSize,
} from '@vueuse/core';

const config = {
    timeoutInMs: 6000,
    maxSeenCount: 5,
    contentScrollThresholdInPercentage: 35,
};

const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
};

interface PolitePopupStorageDTO {
    status: 'unsubscribed' | 'subscribed';
    seenCount: number;
    lastSeenAt: number;
}

// 1. Define interface for the new options
interface UsePolitePopupOptions {
    ignoreFrequencyCaps?: boolean;
}

// 2. Add options parameter (defaulting to empty object)
export const usePolitePopup = (
    storageKey = 'polite-popup',
    options: UsePolitePopupOptions = {}
) => {
    const visible = useState('visible', () => false);
    const readTimeElapsed = useState('read-time-elapsed', () => false);

    const { y: scrollYInPx } = useWindowScroll();
    const { height: windowHeight } = useWindowSize();

    // Returns percentage scrolled (ie: 80 or NaN if trackLength == 0)
    const amountScrolledInPercentage = computed(() => {
        if (!process.client) {
            return 0;
        }
        const documentScrollHeight = document.documentElement.scrollHeight;
        const trackLength = documentScrollHeight - windowHeight.value;
        const scrollPercent = scrollYInPx.value / trackLength;
        const scrollPercentRounded = Math.floor(scrollPercent * 100);
        return scrollPercentRounded;
    });

    const { start } = useTimeoutFn(
        () => {
            readTimeElapsed.value = true;
        },
        config.timeoutInMs,
        { immediate: false }
    );

    const storedData: Ref<PolitePopupStorageDTO> = useLocalStorage(
        storageKey,
        {
            status: 'unsubscribed',
            seenCount: 0,
            lastSeenAt: 0,
        }
    );

    const scrolledContent = computed(
        () =>
            amountScrolledInPercentage.value >=
            config.contentScrollThresholdInPercentage
    );

    const debugInfo = computed(() => ({
        readTimeElapsed: readTimeElapsed.value,
        amountScrolledInPercentage: amountScrolledInPercentage.value,
        scrolledContent: scrolledContent.value,
        visible: visible.value,
        storedData: storedData.value,
        ignoreFrequencyCaps: options.ignoreFrequencyCaps // Added to debug
    }));

    const resetLocalStorage = () => {
        storedData.value = {
            status: 'unsubscribed',
            seenCount: 0,
            lastSeenAt: 0,
        };
    };

    const trigger = () => {
        readTimeElapsed.value = false;
        start();
    };

    const setClosed = () => {
        visible.value = false;
    };

    const setSubscribed = () => {
        storedData.value.status = 'subscribed';
    };

    watch(
        [readTimeElapsed, scrolledContent],
        ([newReadTimeElapsed, newScrolledContent]) => {
            console.log(readTimeElapsed.value, newScrolledContent);

            // We usually still want to respect the 'subscribed' status even if ignoring caps
            if (storedData.value.status === 'subscribed') {
                return;
            }

            // 3. Wrap frequency checks in a condition
            if (!options.ignoreFrequencyCaps) {
                if (storedData.value.seenCount >= config.maxSeenCount) {
                    return;
                }

                if (
                    storedData.value.lastSeenAt &&
                    isToday(new Date(storedData.value.lastSeenAt))
                ) {
                    return;
                }
            }

            if (newReadTimeElapsed && newScrolledContent) {
                visible.value = true;
                storedData.value.seenCount += 1;
                storedData.value.lastSeenAt = new Date().getTime();
            }
        }
    );

    return {
        visible,
        trigger,
        setClosed,
        setSubscribed,
        resetLocalStorage,
        debugInfo,
        config,
    };
};