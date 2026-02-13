<script setup lang="ts">

import {swcHtml} from "~/constants/constant";
</script>

<template>
  <!-- Title & Intro -->
  <section class="flex justify-center pt-8 font-source-code-pro">
    <div class="pt-[68px] sm:pt-[136px]">
      <h3 class="w-full text-center text-26 sm:text-42 pb-[21px] sm:pb-[32px] uppercase ">{{ $t('landingPage.aboutSection.heading') }} <span class="tracking-[.08em] font-bold">{{ $t('landingPage.aboutSection.headingLab') }}</span></h3>

      <div class="max-w-[90vw] sm:max-w-xl lg:max-w-2xl">
        <div class="text-16 leading-[21px] text-justify">
          <p class="mb-6" v-html="$t('landingPage.aboutSection.text1', {SWC: swcHtml})"></p>
          <p class="mb-6">
            {{ $t('landingPage.aboutSection.text2') }}
          </p>
          <p class="mb-6" v-html="$t('landingPage.aboutSection.text3', {SWC: swcHtml})"></p>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>