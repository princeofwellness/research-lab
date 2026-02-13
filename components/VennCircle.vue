<script setup lang="ts">

import {cn} from "~/lib/utils";
import type {LabelProps} from "radix-vue";
import type {HTMLAttributes} from "vue";

const props = defineProps<{
  class?: HTMLAttributes['class'],
  wrapperClass?: HTMLAttributes['class'],
  position: 'top' | 'left' | 'right',
  title: string,
  text: string,
  revealRatio: number
}>()

// const fullRevealPercentage = 35;
//
// const translateX = computed(() => {
//   if(props.position == 'top')
//     return 0;
//
//   const revealPercentage = fullRevealPercentage*props.revealRatio;
//   if(props.position == 'left')
//     return -revealPercentage;
//
//   return revealPercentage;
// })
//
//
// const translateY = computed(() => {
//   const revealPercentage = fullRevealPercentage*props.revealRatio;
//   if(props.position == 'top')
//     return -revealPercentage;
//
//   return revealPercentage;
// })

const fullRevealPercentage = 35;

const translateX = computed(() => {
  if(props.position == 'top')
    return 0;

  const revealPercentage = fullRevealPercentage*props.revealRatio;
  if(props.position == 'left')
    return -revealPercentage;

  return revealPercentage;
})


const translateY = computed(() => {
  const revealPercentage = fullRevealPercentage*props.revealRatio;
  if(props.position == 'top')
    return -revealPercentage;

  return revealPercentage;
})
</script>

<template>
  <div :class="cn(`venn-circle`, props.class)" :style="`transform: translate3d(${translateX}%, ${translateY}%, 0)`">
    <div :class="cn('', props.wrapperClass)">
      <h3 class="text-12 sm:text-16 font-bold uppercase">{{ props.title }}</h3>
      <p class="text-12 mt-1 font-source-code-pro font-light">{{ props.text }}</p>
    </div>
  </div>

</template>

<style scoped>
@media (max-width: 768px) {
  .venn-circle {
    --radius: 14em!important;
  }
}

.venn-circle {
  --radius: 26em;
  width: var(--radius);
  height: var(--radius);
  border-radius: 50%;
  mix-blend-mode: multiply;
  position: absolute;
  border: 1px solid var(--tech-blue-color);
  //background-color: rgba(0, 71, 187, 0.1);
  //transition: transform 0.05s ease-in-out;
}

.venn-circle-left.revealed {
  animation: circle-left 1.5s ease-in-out 0s forwards;
}

.venn-circle-top.revealed {
  animation: circle-top 1.5s ease-in-out 0s forwards;
}

.venn-circle-right.revealed {
  animation: circle-right 1.5s ease-in-out 0s forwards;
}

@keyframes circle-left {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-99%, 99%);
  }
}

@keyframes circle-top {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(0, -99%);
  }
}


@keyframes circle-right {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(99%, 99%);
  }
}


</style>