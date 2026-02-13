<script setup lang="ts">

import {SwitchRoot, SwitchThumb} from "radix-vue";
import {ref} from "vue";

const twoDimensionalVersion = ref<boolean>(false);
const toggleIntroView = () => {
  twoDimensionalVersion.value = !twoDimensionalVersion.value;
}

const setIntroView = (isSimple: boolean) => {
  twoDimensionalVersion.value = isSimple
}

</script>

<template>
  <div class="absolute w-full flex justify-center align-center content-center top-[111px] 2xl:top-[136px]">
    <h2 class="text-[21px] sm:text-26 lg:text-42 uppercase font-bold z-10 text-center tracking-wide">{{ $t('landingPage.heroSection.heading') }}</h2>
  </div>

  <div
      class="absolute w-full flex justify-center align-center content-center bottom-6 z-10 fill-techblue pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path d="m12 17.586-7.293-7.293-1.414 1.414L12 20.414l8.707-8.707-1.414-1.414L12 17.586z"/>
      <path d="m20.707 5.707-1.414-1.414L12 11.586 4.707 4.293 3.293 5.707 12 14.414l8.707-8.707z"/>
    </svg>
  </div>

  <div class="flex justify-center items-center h-screen pt-24 lg:pt-36  overflow-hidden"
       :class="!twoDimensionalVersion ? 'hidden' : ''">
    <Mindmap class="w-screen scale-100 lg:scale-90 pointer-events-none"/>
  </div>

  <LabAnimation :class="`touch-no-pointer-events touch-pan-y ${twoDimensionalVersion ? 'hidden' : ''}`"
                :is-paused="twoDimensionalVersion"/>

  <div
      class="absolute w-full flex items-center justify-center space-x-2 z-5 bottom-0 lg:w-auto lg:right-0 lg:pr-8 pb-16 lg:pb-8 pl-8 lg:pl-0">
    <span class="text-base text-nowrap cursor-pointer select-none" @click="setIntroView(false)">3D</span>

    <SwitchRoot
        :checked="twoDimensionalVersion"
        @update:checked="toggleIntroView"
        id="intro-view"
        class="peer inline-flex h-5 w-9  shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-techblue data-[state=unchecked]:bg-[var(--tech-blue-color-2)]"
    >
      <SwitchThumb
          class="pointer-events-none block  h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
      >
        <slot name="thumb"/>
      </SwitchThumb>
    </SwitchRoot>
    <span class="text-base text-nowrap cursor-pointer select-none" @click="setIntroView(true)">Simple</span>
  </div>
</template>

<style scoped>

</style>