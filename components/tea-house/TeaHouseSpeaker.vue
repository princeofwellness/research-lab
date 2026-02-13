<script setup lang="ts">
import type {HTMLAttributes} from "vue";

const props = defineProps<{
  class?: HTMLAttributes['class'],
  day: string,
  dayDate: string
  time: string
  imgUrl: string
  title: string
  name: string
  role: string
  description: string
}>()

</script>

<template>

  <div class="container lg:max-w-screen-lg mx-auto pb-[36px] pt-[68px] lg:pt-[136px]">
    <div class="flex items-center font-source-code-pro text-26 lg:text-42 font-bold gap-4 lg:gap-8 leading-none">
      <span>{{props.day}}</span>
      <span>·</span>
      <span>{{props.dayDate}}</span>
      <span>·</span>
      <span>{{props.time}}</span>
    </div>
  </div>

  <div class="w-full h-[2px] bg-techblue"></div>

  <div class="container lg:max-w-screen-lg mx-auto pt-[36px]">
    <div class="grid grid-cols-1 lg:grid-cols-3">
      <div class="relative">
        <img :src="props.imgUrl" :alt="props.name" class="aspect-square object-cover grayscale-[1.0]"/>
        <div class="absolute w-full h-full top-0 bg-[#0462ff] opacity-40"></div>
      </div>
      <div class="flex flex-col justify-center col-span-2 lg:px-[68px] pt-[32px]">
        <span class="text-[21px] lg:text-26 font-source-code-pro italic leading-7" v-html="props.title"></span>
      </div>
    </div>

    <div class="flex flex-col pt-[32px]">
      <span class="text-26 lg:text-42 font-bold">{{props.name}}</span>
      <span class="text-[18px] lg:text-[21px] font-bold font-source-code-pro" v-html="props.role"></span>
      <p class="pt-[21px] font-source-code-pro text-16 lg:text-[21px]" v-html="props.description"></p>
    </div>
  </div>
</template>

<style scoped>

</style>