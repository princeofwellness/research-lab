<script setup lang="ts">

import SorrywecanText from "~/components/SorrywecanText.vue";
import {swcHtml} from "../../constants/constant";
</script>

<template>
  <section class="w-full flex-1">
    <h1 class="text-26 sm:text-42 font-bold text-techblue uppercase mb-4">
      {{ $t('lightpaper.timelineSection.heading') }}
    </h1>
    <p class="mt-2 text-base font-semibold italic">
      {{ $t('lightpaper.timelineSection.desc') }}
    </p>
    <div class="">
      <div
          class="mt-10 flex flex-col items-center justify-between space-y-8 md:space-y-0 md:space-x-8 md:flex-row text-center text-[20px]">
        <div>
          <div class="border border-techblue px-6 py-4 w-80">
            <h3 class="font-semibold text-26">
              {{ $t('lightpaper.timelineSection.phase1') }}
            </h3>
          </div>
          <p class="font-semibold mt-4">2024-2026</p>
        </div>
        <div>
          <div class="border border-techblue px-6 py-4 w-80">
            <h3 class=" font-semibold text-26">
              {{ $t('lightpaper.timelineSection.phase2') }}
            </h3>
          </div>
          <p class="font-semibold mt-4">2027-2029</p>
        </div>
        <div>
          <div class="border border-techblue px-6 py-4 w-80">
            <h3 class="font-semibold text-26">
              {{ $t('lightpaper.timelineSection.phase3') }}
            </h3>
          </div>
          <p class="font-semibold mt-4">2030+</p>
        </div>
      </div>

      <div class="px-24 hidden md:block">
        <div class="mt-2 w-full border-b-2 border-techblue"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <!-- Foundation Phase Activities -->
        <div class="border-2 border-techblue p-4">
          <h4 class="font-bold mb-2 underline">{{ $t('lightpaper.timelineSection.activitiesTitle1') }}</h4>
          <ul class="list-disc ml-5 space-y-1">
            <li v-for="i in Array(4).keys()" v-html=" $t(`lightpaper.timelineSection.activities1.${i}`, {SWC_LOGO: swcHtml})"></li>
          </ul>
        </div>
        <!-- Scaling Phase Activities -->
        <div class="border-2 border-techblue p-4">
          <h4 class="font-bold mb-2 underline">{{ $t('lightpaper.timelineSection.activitiesTitle2') }}</h4>
          <ul class="list-disc ml-5 space-y-1">
            <li v-for="i in Array(4).keys()" v-html=" $t(`lightpaper.timelineSection.activities2.${i}`, {SWC_LOGO: swcHtml})"></li>
          </ul>
        </div>

        <!-- Evolutionary Horizon Activities -->
        <div class="border-2 border-techblue p-4">
          <h4 class="font-bold mb-2 underline">{{ $t('lightpaper.timelineSection.activitiesTitle3') }}</h4>
          <ul class="list-disc ml-5 space-y-1">
            <li v-for="i in Array(4).keys()" v-html=" $t(`lightpaper.timelineSection.activities3.${i}`, {SWC_LOGO: swcHtml})"></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>