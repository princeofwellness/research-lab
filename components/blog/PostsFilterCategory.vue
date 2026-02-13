<script setup lang="ts">

import type {HTMLAttributes} from "vue";
import type {WordpressCategory} from "~/lib/types/wordpress";
import {cn} from "~/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes['class'],
  category: WordpressCategory
  active: boolean
}>()
const emit = defineEmits(['click']);


</script>

<template>
  <button
      v-html="category.name"
      @click="$emit('click')"
      :class="cn(`border-[1.75px] uppercase text-12 sm:text-16 text-center font-medium border-techblue  h-[36px]  transition-colors duration-300 focus:border-1 ${props.class}`, props.active ? 'bg-techblue text-white' : 'hover:bg-techblue hover:text-white')"
          type="button"
          class=""></button>
</template>

<style scoped>

</style>