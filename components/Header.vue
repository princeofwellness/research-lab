<script setup lang="ts">

import LabLogo from "~/components/LabLogo.vue";
import {cn} from "~/lib/utils";
const router = useRouter();
const localePath = useLocalePath()

const mobileNavVisible = ref(false);
const handleMobileNavToggle = () => {
  mobileNavVisible.value = !mobileNavVisible.value;
  if(mobileNavVisible.value)
    document.body.setAttribute('style', 'overflow: hidden;')
  else
    document.body.setAttribute('style', '')
}
const currentPath = router.currentRoute.value.path;

watch(() => router.currentRoute, () => {
  if(document?.body){
    document.body.setAttribute('style', '');
    mobileNavVisible.value = false;
  }
}, { deep: true, immediate: true });
const handleNavigation = (e) => {
  if(e.target.getAttribute('href') == router.currentRoute.value.href){
    document.body.setAttribute('style', '');
    mobileNavVisible.value = false;
  }
}

</script>

<template>
  <header class="fixed w-screen z-50 text-techblue bg-[var(--bg-color)] px-4 lg:px-6 xl:px-[32px]">
    <nav class="relative flex items-end justify-center pt-[21px] pb-2">
      <div class="absolute left-0 h-full flex items-center space-x-4 xl:space-x-8 opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
        <NuxtLink :class="cn('text-[11px] xl:text-[14px] tracking-widest hover:underline uppercase', currentPath == localePath('/') ? 'font-bold' : 'font-medium')" :to="localePath('/')">{{ $t('menu.home') }}</NuxtLink>
        <NuxtLink :class="cn('text-[11px] xl:text-[14px] tracking-widest hover:underline uppercase', currentPath == localePath('/communitea') ? 'font-bold' : 'font-medium')" :to="localePath('/communitea')">{{ $t('menu.communitea') }}</NuxtLink>
        <a class="text-[11px] xl:text-[13px] font-medium tracking-widest hover:underline uppercase" href="https://sorrywecan.com/projects">
          {{ $t('menu.multimedia') }}
        </a>
      </div>

      <LabLogo/>

      <div class="absolute right-0 h-full flex items-center space-x-4 xl:space-x-8 opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
        <NuxtLink :class="cn('text-[11px] xl:text-[14px] tracking-widest hover:underline uppercase', currentPath == localePath('/publications') ? 'font-bold' : 'font-medium')" :to="localePath('/publications')">{{ $t('menu.publications') }}</NuxtLink>
        <NuxtLink :class="cn('text-[11px] xl:text-[14px] tracking-widest hover:underline uppercase', currentPath == localePath('/contact') ? 'font-bold' : 'font-medium')" :to="localePath('/contact')">{{ $t('menu.contact') }}</NuxtLink>
        <NuxtLink :class="cn('text-[11px] xl:text-[14px] tracking-widest hover:underline uppercase font-bold', currentPath == localePath('/mindshift') ? 'bg-techblue text-white px-3 xl:px-4 py-1' : 'text-techblue')" :to="localePath('/mindshift')">{{ $t('menu.mindshift') }}</NuxtLink>
        <LanguageChooser />
      </div>


    </nav>
    <div class="block lg:hidden fill-techblue absolute right-0 top-0 p-7" @click="handleMobileNavToggle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16px" height="16px">
        <path d="M38,14H6v-4c0-2.2,1.8-4,4-4h32v4C42,12.2,40.2,14,38,14z M42,24v-4H10c-2.2,0-4,1.8-4,4v4h32C40.2,28,42,26.2,42,24z M42,38v-4H10c-2.2,0-4,1.8-4,4v4h32C40.2,42,42,40.2,42,38z"/>
      </svg>
    </div>
  </header>


  <div class="fixed w-full h-screen text-techblue space-y-2  bg-[var(--bg-color)] z-20 text-2xl font-semibold flex flex-col justify-center items-center content-center" v-if="mobileNavVisible">
    <NuxtLink class="uppercase" :to="localePath('/')" @click="handleNavigation($event)">
      {{ $t('menu.home') }}
    </NuxtLink>
    <a class="uppercase" href="https://sorrywecan.com/projects">
      {{ $t('menu.multimedia') }}
    </a>
    <NuxtLink  class="uppercase" :to="localePath('/communitea')" @click="handleNavigation($event)">
      {{ $t('menu.communitea') }}
    </NuxtLink>
    <NuxtLink  class="uppercase" :to="localePath('/publications')" @click="handleNavigation($event)">
      {{ $t('menu.publications') }}
    </NuxtLink>
    <NuxtLink  class="uppercase" :to="localePath('/contact')" @click="handleNavigation($event)">
      {{ $t('menu.contact') }}
    </NuxtLink>
    <NuxtLink class="uppercase font-bold text-techblue" :to="localePath('/mindshift')" @click="handleNavigation($event)">
      {{ $t('menu.mindshift') }}
    </NuxtLink>

    <LanguageChooser/>

  </div>
</template>
