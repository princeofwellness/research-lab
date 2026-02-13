<script setup lang="ts">

import FutureDiagram from "~/components/vector/FutureDiagram.vue";
</script>

<template>
  <section class="w-full flex flex-col lg:flex-row lg:space-x-16">
    <!-- Text content -->
    <div class="lg:w-1/2">
      <h1 class="text-26 sm:text-42 font-bold text-techblue uppercase mb-4">
        {{ $t('lightpaper.futureSection.heading') }}
      </h1>
      <p class="mb-6 leading-relaxed font-semibold text-techblue">
        {{ $t('lightpaper.futureSection.desc') }}
      </p>

      <!-- Four bullet items -->
      <div class="space-y-4 mb-6">
        <div>
          <h3 class="font-bold text-techblue uppercase mb-1">
            {{ $t('lightpaper.futureSection.itemTitle1') }}
          </h3>
          <p>
            {{ $t('lightpaper.futureSection.itemText1') }}
          </p>
        </div>
        <div>
          <h3 class="font-bold text-techblue uppercase mb-1">
            {{ $t('lightpaper.futureSection.itemTitle2') }}
          </h3>
          <p>
            {{ $t('lightpaper.futureSection.itemText2') }}
          </p>
        </div>
        <div>
          <h3 class="font-bold text-techblue uppercase mb-1">
            {{ $t('lightpaper.futureSection.itemTitle3') }}
          </h3>
          <p>
            {{ $t('lightpaper.futureSection.itemText3') }}
          </p>
        </div>
        <div>
          <h3 class="font-bold text-techblue uppercase mb-1">
            {{ $t('lightpaper.futureSection.itemTitle4') }}
          </h3>
          <p>
            {{ $t('lightpaper.futureSection.itemText4') }}
          </p>
        </div>
      </div>
    </div>

    <div class="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
      <FutureDiagram class="w-full lg:w-11/12"/>
    </div>
  </section>
</template>
