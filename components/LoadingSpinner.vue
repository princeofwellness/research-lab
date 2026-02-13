<script setup lang="ts">

import {cn} from "~/lib/utils";
import type {LabelProps} from "radix-vue";
import type {HTMLAttributes} from "vue";
import type {AvatarVariants} from "~/components/ui/avatar";

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  size?: number
}>(), {
  size: 24,
})
</script>

<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      :class="cn('animate-spin', props.class)"

  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
</template>
