<script setup lang="ts">

import SorrywecanText from "~/components/SorrywecanText.vue";
import {researchLabHtml, swcHtml} from "~/constants/constant";
</script>

<template>
  <section class="pt-[68px]">
    <h2 class="text-26 sm:text-42 font-bold uppercase text-techblue mb-6">
      {{ $t('lightpaper.originsSection.heading') }}
    </h2>
    <div class="flex flex-col lg:flex-row lg:space-x-16">
      <!-- Origins Column -->
      <div class="lg:w-1/2 mb-10 lg:mb-0">
        <h3 class="text-26 font-semibold italic text-techblue" v-html="$t('lightpaper.originsSection.genesis', {RL_LOGO: researchLabHtml})"></h3>
        <p class="mt-4" v-html="$t('lightpaper.originsSection.genesisText', {SWC_LOGO: swcHtml})"></p>

        <h3 class="text-26 font-semibold italic text-techblue mt-8">
          {{ $t('lightpaper.originsSection.questionHeadline') }}
        </h3>
        <p class="mt-4 mb-4">
          {{ $t('lightpaper.originsSection.questionText') }}
        </p>
        <ul class="list-inside space-y-3 text-techblue font-bold">
          <li>{{ $t('lightpaper.originsSection.question1') }}</li>
          <li>{{ $t('lightpaper.originsSection.question2') }}</li>
          <li>{{ $t('lightpaper.originsSection.question3') }}</li>
        </ul>
      </div>

      <!-- Core Philosophy Column -->
      <div class="lg:w-1/2">
        <h3 class="text-26 font-semibold italic text-techblue">
          {{ $t('lightpaper.originsSection.philosophyHeading') }}
        </h3>
        <p class="mt-4">
          {{ $t('lightpaper.originsSection.philosophyParagraph1') }}
        </p>
        <p class="mt-4">
          {{ $t('lightpaper.originsSection.philosophyParagraph2') }}
        </p>

        <div class="mt-12 flex justify-center">
          <img
              src="/static/lightpaper/diagram1.png"
              alt="Diagram: HUMAN + AI + NEW CREATIVITY"
              class="w-2/3 max-w-sm"
          />
        </div>
      </div>
    </div>
  </section>
</template>
