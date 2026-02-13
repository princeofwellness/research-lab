<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {cn} from "~/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes['class'],
  post: any
}>()

import {useRouter} from 'vue-router'

const router = useRouter()
const cardRef = ref(null)
//
// function expandAndNavigate(to) {
//   const card = cardRef.value
//   if (!card) return
//
//   // Get position & size of the card
//   const rect = card.getBoundingClientRect()
//
//   // Clone it
//   const clone = card.cloneNode(true)
//   clone.style.position = 'fixed'
//   clone.style.top = rect.top + 'px'
//   clone.style.left = rect.left + 'px'
//   clone.style.width = rect.width + 'px'
//   clone.style.height = rect.height + 'px'
//   clone.style.margin = '0'
//   clone.style.zIndex = '9999'
//   clone.style.transition = 'all 0.6s ease-in-out'
//
//   document.body.appendChild(clone)
//
//   // Force browser to apply initial position before animating
//   requestAnimationFrame(() => {
//     clone.style.top = '0'
//     clone.style.left = '0'
//     clone.style.width = '100vw'
//     clone.style.height = '100vh'
//   })
//
//   // Navigate after animation
//   setTimeout(() => {
//     router.push(to)
//   }, 550) // slightly before animation ends
// }
</script>

<template>
  <NuxtLink :to="`/blog/${post.slug}`">
    <article
        ref="cardRef"
        :class="cn(
    'group relative isolate flex flex-col justify-end overflow-hidden px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80 border border-techblue transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-techblue/50',
    props.class
  )"
    >
      <!-- Animated border overlay -->
      <span
          class="absolute inset-0 border-2 border-techblue scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 pointer-events-none"></span>

      <!-- Tech Blue glow overlay -->
      <div
          class="absolute inset-0 -z-10 bg-gradient-to-t from-techblue/30 via-techblue/10 to-transparent transition-all duration-500 ease-out group-hover:from-techblue/50 group-hover:via-techblue/20"
      ></div>

      <!-- Subtle image zoom layer -->
      <div
          class="absolute inset-0 -z-20 bg-[url('/path/to/image.jpg')] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:saturate-150"
      ></div>

      <div
          class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"
      ></div>

      <h3
          class="mt-3 text-42 font-semibold leading-6 uppercase text-techblue transition-all duration-500 ease-out group-hover:drop-shadow-[0_0_4px_rgba(0,0,0,0.3)]"
      >

        <span class="absolute inset-0"></span>
        {{ post.title }}
      </h3>
    </article>
  </NuxtLink>


</template>

<style scoped>

</style>