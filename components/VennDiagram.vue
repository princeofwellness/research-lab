<script setup lang="ts">

import VennCircle from "~/components/VennCircle.vue";
import {type HTMLAttributes, ref} from "vue";
import {cn} from "~/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const vennOffset = ref(0)
const vennRevealRatio = ref(0.0)
const vennDiagram = ref<HTMLElement>()

// const revealPixels = window.innerHeight*0.4;
//
// window.addEventListener('scroll', (e) => {
//   if (window.scrollY >= vennOffset.value) {
//     const revealRatio = (window.scrollY - vennOffset.value) / revealPixels;
//     if(revealRatio <= 1.0)
//       vennRevealRatio.value = revealRatio;
//     else
//       vennRevealRatio.value = 1.0;
//   }
// });
//
// watch(vennDiagram, async (vennDiagram) => {
//   if (vennDiagram) {
//     const bbox = vennDiagram.getBoundingClientRect();
//     vennOffset.value = window.scrollY + bbox.top - (window.innerHeight*0.6);
//   }
// })
onMounted(() => {
  if(window === undefined)
    return;

  const revealPixels = window.innerHeight*0.4;

  window.addEventListener('scroll', (e) => {
    if (window.scrollY >= vennOffset.value) {
      const revealRatio = (window.scrollY - vennOffset.value) / revealPixels;
      if(revealRatio <= 1.0)
        vennRevealRatio.value = revealRatio;
      else
        vennRevealRatio.value = 1.0;
    }
  });
})


watch(vennDiagram, async (vennDiagram) => {
  if (vennDiagram) {
    const bbox = vennDiagram.getBoundingClientRect();
    vennOffset.value = window.scrollY + bbox.top - (window.innerHeight*0.6);
  }
})
</script>

<template>
  <section ref="vennDiagram" :class="cn('', props.class)">

    <VennCircle
        position="top"
        :title="$t('landingPage.frameworkSection.circle1Heading')"
        :text="$t('landingPage.frameworkSection.circle1Desc')"
        class="flex justify-center"
        wrapper-class="pt-20 lg:pt-36 ml-10 lg:ml-8 lg:ml-10 w-48 lg:w-52"
        :reveal-ratio="vennRevealRatio"
    />
    <VennCircle
        position="left"
        :title="$t('landingPage.frameworkSection.circle2Heading')"
        :text="$t('landingPage.frameworkSection.circle2Desc')"
        wrapper-class="absolute top-0 pt-20 lg:pt-40 lg:pb-44 ml-4 lg:ml-8 lg:ml-24 w-40 lg:w-52"
        :reveal-ratio="vennRevealRatio"
    />
    <VennCircle
        position="right"
        :title="$t('landingPage.frameworkSection.circle3Heading')"
        :text="$t('landingPage.frameworkSection.circle3Desc')"
        wrapper-class="absolute top-0 right-0 pt-20 lg:pt-40 lg:pb-44 mr-4 lg:mr-8 w-32 lg:w-52"
        :reveal-ratio="vennRevealRatio"
    />
  </section>
</template>

<style scoped>

</style>