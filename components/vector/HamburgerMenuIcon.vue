<script setup lang="ts">
import type {HTMLAttributes} from "vue";

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>

  <svg :class="props.class" width="89" height="64" viewBox="0 0 89 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="2" x2="89" y2="2" stroke="#0A4BB8" stroke-width="4"/>
    <line y1="62" x2="89" y2="62" stroke="#0A4BB8" stroke-width="4"/>
    <line y1="33" x2="89" y2="33" stroke="#0A4BB8" stroke-width="4"/>
  </svg>

</template>
