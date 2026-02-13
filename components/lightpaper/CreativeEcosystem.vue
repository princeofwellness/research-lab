<script setup lang="ts">

import CreativeEcosystemDiagram from "~/components/vector/CreativeEcosystemDiagram.vue";
import ResearchLabText from "~/components/ResearchLabText.vue";
import SorrywecanText from "~/components/SorrywecanText.vue";
import {researchLabHtml, swcHtml} from "~/constants/constant";
</script>

<template>
  <section class="w-full flex flex-col lg:flex-row lg:space-x-16 sm:flex-col-reverse">
    <div class="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
      <CreativeEcosystemDiagram class="w-11/12 sm:w-8/12 sm:py-4"/>
    </div>

    <div class="lg:w-1/2">
      <h1 class="text-26 sm:text-42 font-bold text-techblue uppercase mb-2">
        {{ $t('lightpaper.ecosystemSection.heading') }}
      </h1>
      <h2 class="sm:text-26 text-techblue mb-6">
        <SorrywecanText/>
        x
        <ResearchLabText/>
      </h2>

      <!-- SORRYWECAN block -->
      <h3 class="font-bold uppercase lg:text-26 mb-1">SORRYWECAN:</h3>
      <p class="mb-6 leading-relaxed" v-html="$t('lightpaper.ecosystemSection.swcText', {BR: '<br/>', SWC_LOGO: swcHtml})"></p>

      <!-- RESEARCHLAB block -->
      <h3 class="font-bold uppercase lg:text-26 mb-1">RESEARCHLAB:</h3>
      <p class="mb-6 leading-relaxed" v-html="$t('lightpaper.ecosystemSection.rlText', {SWC_LOGO: swcHtml})">
      </p>

      <p class="mb-6 leading-relaxed" v-html="$t('lightpaper.ecosystemSection.text0', {SWC_LOGO: swcHtml})"></p>

      <h4 class="text-26 font-semibold italic mb-2" >
        {{ $t('lightpaper.ecosystemSection.subHeading1') }}
      </h4>
      <p class="leading-relaxed"  v-html="$t('lightpaper.ecosystemSection.text1', {BR: '<br/>', RL_LOGO: researchLabHtml})"></p>
    </div>
  </section>
</template>
