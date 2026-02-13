<script setup lang="ts">

const howToEngage = [
    ["Collaborators", " Reach out with your proposal if you’re a researcher, artist, or technologist interested in collaborative projects"],
    ["Participants", "Join our workshops and events to experience our methodologies firsthand"],
    ["Supporters", "Contribute to our vision through patronage and resource sharing"],
    ["Pioneers", "Apply to our residency program (launching 2025) for immersive exploration"],
]
</script>

<template>
  <div class="w-full leading-none">
    <div class="text-center e">
      <h1 class="text-26 lg:text-68 leading-[46px] uppercase font-semibold text-techblue">
        {{ $t('lightpaper.endingSection.heading1') }}
      </h1>
      <p class="lg:mt-4 text-26 uppercase lg:text-42">
        {{ $t('lightpaper.endingSection.heading2') }}
      </p>
    </div>

    <p class="text-[20px] font-bold mt-[68px]">
      {{ $t('lightpaper.endingSection.text1') }}
    </p>


    <div class="flex flex-col lg:flex-row">
      <div class="pt-[32px]">
        <h2 class="text-26 font-semibold uppercase italic">{{ $t('lightpaper.endingSection.subheading') }}</h2>
        <p class="mt-[21px]">{{ $t('lightpaper.endingSection.text2') }}</p>
        <div class="mt-[42px] space-y-4">
          <p> * <span class="font-bold">{{ $t('lightpaper.endingSection.itemName1') }}</span> {{ $t('lightpaper.endingSection.itemText1') }}</p>
          <p> * <span class="font-bold">{{ $t('lightpaper.endingSection.itemName2') }}</span> {{ $t('lightpaper.endingSection.itemText2') }}</p>
          <p> * <span class="font-bold">{{ $t('lightpaper.endingSection.itemName3') }}</span> {{ $t('lightpaper.endingSection.itemText3') }}</p>
          <p> * <span class="font-bold">{{ $t('lightpaper.endingSection.itemName4') }}</span> {{ $t('lightpaper.endingSection.itemText4') }}</p>
        </div>
      </div>
      <div class="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
        <img src="/static/lightpaper/diagram6.png" class="max-w-[300px] w-full object-contain pt-12"/>
      </div>

    </div>
    <p class="mt-[42px] text-16 sm:text-26 font-semibold">{{ $t('lightpaper.endingSection.endHeading') }}</p>

  </div>
</template>

