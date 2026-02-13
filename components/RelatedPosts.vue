<script setup lang="ts">

import type {HTMLAttributes} from "vue";
import {cn} from "~/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes['class'],
  limit: number;
  postId: number
}>()

const {data} = await useAsyncData(`relatedPosts.${props.postId}`, () => $fetch(`/api/blog/posts/related`, {params: props}));

</script>

<template>
  <div class="">

    <div
        :class="cn('mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3', props.class)">
      <article
          v-for="post in data"
          class="relative isolate flex flex-col justify-end overflow-hidden  bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <div class="block overflow-hidden">
          <img v-if="post.thumbnail" :src="post.thumbnail" alt=""
               class="absolute inset-0 -z-10 h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-110">
        </div>
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          <p
              class="mr-8">{{ new Date(post.date).toLocaleDateString() }}
          </p>
        </div>
        <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
          <NuxtLink :to="`/blog/${post.slug}`"><span class="absolute inset-0"></span>{{ post.title }}</NuxtLink>
        </h3>
      </article>
    </div>
  </div>

</template>

<style scoped>

</style>