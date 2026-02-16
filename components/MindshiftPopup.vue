<template>
  <Teleport to="body">
    <Transition name="popup">
      <div
        v-if="visible"
        class="fixed inset-0 z-[100] flex items-center justify-center"
        @click="handleClickAway"
        id="mindshift-clickaway"
      >
        <div class="popup-card relative bg-[var(--bg-color)] border-techblue border-2 mx-5 max-w-[480px] w-full px-6 py-12 md:px-12 md:py-16">
          <div class="absolute top-0 right-0 pr-4 pt-4 cursor-pointer" @click="dismiss">
            <Cross1Icon class="h-6 w-6 text-techblue" />
          </div>

          <div class="flex flex-col items-center text-center text-techblue">
            <span class="font-source-code-pro text-[10px] font-bold uppercase tracking-[0.3em]">
              {{ $t('mindshiftPopup.label') }}
            </span>

            <h2 class="mt-4 text-[28px] md:text-[36px] font-bold uppercase leading-tight font-proxima">
              {{ $t('mindshiftPopup.headline') }}
            </h2>

            <p class="mt-3 text-[14px] md:text-[16px] leading-relaxed font-proxima">
              {{ $t('mindshiftPopup.subline') }}
            </p>

            <NuxtLink :to="localePath('/mindshift')" @click.native="dismiss">
              <button
                class="mt-8 border-techblue border-[1.75px] text-[16px] font-medium px-10 py-3 bg-techblue text-white hover:bg-transparent hover:text-techblue transition-colors duration-300 uppercase tracking-wider"
              >
                {{ $t('mindshiftPopup.cta') }}
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Cross1Icon } from '@radix-icons/vue'

const localePath = useLocalePath()
const visible = ref(false)

onMounted(() => {
  if (typeof window === 'undefined') return

  // Show after 2.5s delay — every visit, no localStorage check
  setTimeout(() => {
    visible.value = true
  }, 2500)
})

const dismiss = () => {
  visible.value = false
}

const handleClickAway = (e: MouseEvent) => {
  if ((e.target as HTMLElement).id === 'mindshift-clickaway') {
    dismiss()
  }
}
</script>

<style scoped>
/* Backdrop fade */
.popup-enter-active,
.popup-leave-active {
  transition: background-color 0.35s ease;
}
.popup-enter-from,
.popup-leave-to {
  background-color: rgba(0, 0, 0, 0) !important;
}
.popup-enter-to,
.popup-leave-from {
  background-color: rgba(0, 0, 0, 0.4);
}

/* Card scale + fade */
.popup-enter-active .popup-card,
.popup-leave-active .popup-card {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.popup-enter-from .popup-card,
.popup-leave-to .popup-card {
  opacity: 0;
  transform: scale(0.95) translateY(12px);
}
.popup-enter-to .popup-card,
.popup-leave-from .popup-card {
  opacity: 1;
  transform: scale(1) translateY(0);
}
</style>
