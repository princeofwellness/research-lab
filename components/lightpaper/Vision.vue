<script setup lang="ts">

import ResearchLabText from "~/components/ResearchLabText.vue";
import {researchLabHtml} from "~/constants/constant";
</script>

<template>
  <section class="w-full">
    <h2 class="text-26 sm:text-42 font-bold uppercase text-techblue mb-6">
      {{ $t('lightpaper.visionSection.heading') }}
    </h2>
    <div class="flex flex-col lg:flex-row lg:space-x-16">
      <div class="lg:w-1/2 mb-10 lg:mb-0">
        <p class="mt-4">
          {{ $t('lightpaper.visionSection.paragraph1') }}
        </p>
        <p class="mt-4" v-html="$t('lightpaper.visionSection.paragraph2', {RL_LOGO: researchLabHtml})"></p>
        <p class="mt-4">
          {{ $t('lightpaper.visionSection.paragraph3') }}
        </p>
      </div>

      <div class="lg:w-1/2">
        <div class="mt-8 flex justify-center">
          <img
              src="/static/lightpaper/diagram2.png"
              alt="Diagram: HUMAN + AI + PAST * FUTURE"
              class="w-2/3 max-w-sm"
          />
        </div>
      </div>
    </div>
  </section>
</template>
