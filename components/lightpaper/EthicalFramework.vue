<script setup lang="ts">

const bulletItems = [
    ["MUTUAL ENHANCEMENT", "All technologies must augment human capability rather than replace it"],
    ["COGNITIVE DIVERSITY", "Systems must preserve and enhance diverse modes of thinking"],
    ["TRANSPARENT EVOLUTION", "Changes in AI systems must be comprehensible and trackable"],
    ["DISTRIBUTED BENEFIT", "Advances must be accessible beyond privileged institutions"],
    ["ECOLOGICAL INTEGRATION", "Technologies must be developed with awareness of broader systemic impacts"],
];
</script>

<template>
  <section class="w-full flex flex-col lg:flex-row space-y-8 lg:space-x-16">
    <!-- Text content -->
    <div class="lg:w-1/2">
      <h1 class="text-26 sm:text-42 font-bold text-techblue uppercase mb-4">
        {{ $t('lightpaper.ethicalFrameworkSection.heading') }}
      </h1>
      <p class="mb-6 leading-relaxed font-semibold text-techblue">
        {{ $t('lightpaper.ethicalFrameworkSection.desc') }}
      </p>

      <!-- Four bullet items -->
      <div class="space-y-4 mb-6">
        <div>
          <span class="font-bold text-techblue uppercase mb-1">{{ $t('lightpaper.ethicalFrameworkSection.title1') }}</span>
          <p>{{ $t('lightpaper.ethicalFrameworkSection.text1') }}</p>
        </div>
        <div>
          <span class="font-bold text-techblue uppercase mb-1">{{ $t('lightpaper.ethicalFrameworkSection.title2') }}</span>
          <p>{{ $t('lightpaper.ethicalFrameworkSection.text2') }}</p>
        </div>
        <div>
          <span class="font-bold text-techblue uppercase mb-1">{{ $t('lightpaper.ethicalFrameworkSection.title3') }}</span>
          <p>{{ $t('lightpaper.ethicalFrameworkSection.text3') }}</p>
        </div>
        <div>
          <span class="font-bold text-techblue uppercase mb-1">{{ $t('lightpaper.ethicalFrameworkSection.title4') }}</span>
          <p>{{ $t('lightpaper.ethicalFrameworkSection.text4') }}</p>
        </div>
        <div>
          <span class="font-bold text-techblue uppercase mb-1">{{ $t('lightpaper.ethicalFrameworkSection.title5') }}</span>
          <p>{{ $t('lightpaper.ethicalFrameworkSection.text5') }}</p>
        </div>
      </div>
    </div>

    <div class="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
      <img src="/static/lightpaper/diagram4.png" class="max-w-[400px] w-full object-contain"/>
    </div>
  </section>
</template>
