<script setup lang="ts">

import OurApproachDiagram from "~/components/vector/OurApproachDiagram.vue";
import {swcHtml} from "~/constants/constant";
</script>

<template>
  <section class="w-full flex flex-col lg:flex-row lg:space-x-16">
    <div class="lg:w-1/2">
      <h1 class="text-26 sm:text-42 font-bold text-techblue uppercase mb-4">
        {{ $t('lightpaper.approachSection.heading') }}
      </h1>
      <p class="mb-6 leading-relaxed font-semibold text-techblue" v-html="$t('lightpaper.approachSection.boldText', {BR: '<br/>'})"></p>

      <!-- Four bullet items -->
      <div class="space-y-4 mb-6">
        <div>
          <h3 class="font-bold text-techblue uppercase mb-1">{{ $t('lightpaper.approachSection.artisticLabel') }}</h3>
          <p>{{ $t('lightpaper.approachSection.artisticText') }}</p>
        </div>
        <div>
          <h3 class="font-bold text-techblue uppercase mb-1">{{ $t('lightpaper.approachSection.techLabel') }}</h3>
          <p>{{ $t('lightpaper.approachSection.techText') }}</p>
        </div>
        <div>
          <h3 class="font-bold text-techblue uppercase mb-1">{{ $t('lightpaper.approachSection.philosophicalLabel') }}</h3>
          <p>{{ $t('lightpaper.approachSection.philosophicalText') }}</p>
        </div>
        <div>
          <h3 class="font-bold text-techblue uppercase mb-1">{{ $t('lightpaper.approachSection.engineeringLabel') }}</h3>
          <p>{{ $t('lightpaper.approachSection.engineeringText') }}</p>
        </div>
      </div>

      <!-- Paragraph -->
      <p class="italic font-light text-[20px]">
        {{ $t('lightpaper.approachSection.italicText') }}
      </p>

    </div>

    <div class="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
      <OurApproachDiagram class="w-full lg:w-10/12"/>
    </div>
  </section>
</template>
