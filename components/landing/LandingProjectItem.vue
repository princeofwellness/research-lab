<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {cn} from "~/lib/utils";

const localePath = useLocalePath()

const props = defineProps<{
  class?: HTMLAttributes['class']
  title: string
  description: string
  buttonLabel: string
  buttonLink?: string
  buttonRoute?: string
}>()
</script>

<template>
  <div :class="cn('relative border-[1.75px] border-techblue w-full flex flex-col items-center p-6 pt-[21px] sm:pt-[42px] lg:min-h-[32em]', props.class)">
    <h3 class="uppercase text-[21px] sm:text-26 font-bold pb-[32px] lg:pb-[72px]">{{props.title}}</h3>
    
    <p class="pb-[68px] sm:pb-[136px] text-center text-12 sm:text-16 font-source-code-pro">{{props.description}}</p>

    <a v-if="props.buttonLink" :href="props.buttonLink" class="absolute bottom-0 mb-[21px] lg:mb-[32px]">
      <button type="button" class="border-[1.75px] uppercase text-12 sm:text-16 text-center font-medium border-techblue w-[165px] sm:w-[220px] h-[32px] sm:h-[42px] hover:bg-techblue hover:text-white transition-colors duration-300 focus:border-1">
        {{props.buttonLabel}}
      </button>
    </a>
    <NuxtLink v-if="props.buttonRoute" :to="localePath(props.buttonRoute)" class="absolute bottom-0 mb-[21px] lg:mb-[32px]">
      <button type="button" class="border-[1.75px] uppercase text-12 sm:text-16 text-center font-medium border-techblue w-[165px] sm:w-[220px] h-[32px] sm:h-[42px] hover:bg-techblue hover:text-white transition-colors duration-300 focus:border-1">
        {{props.buttonLabel}}
      </button>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>