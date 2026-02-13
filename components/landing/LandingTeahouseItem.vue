<script setup lang="ts">
const localePath = useLocalePath()

</script>
<template>
  <div class="relative border-[1.75px] border-techblue w-full flex flex-col items-center p-6 pt-[21px] sm:pt-[42px] lg:min-h-[32em]">


    <div class="flex justify-center pb-[36px]">
      <div class="relative table text-68 font-bold">
        <h3 class="uppercase text-[21px] sm:text-26 font-bold pb-[12px]">{{  $t('landingPage.projectsSection.teahouseHeading') }}</h3>

        <div class="relative flex items-center">
          <div class="text-16 flex-none ...">{{ $t('teahousePage.startDate')}} </div>
          <div class="grow px-[21px] h-[1px]">
            <div class="w-full h-full bg-techblue "></div>
          </div>
          <div class="text-16 flex-none ...">{{ $t('teahousePage.endDate')}} </div>
        </div>

      </div>
    </div>

    <p class="pb-[68px] sm:pb-[136px] text-center text-12 sm:text-16 font-source-code-pro">{{ $t('landingPage.projectsSection.teahouseDescription') }}</p>

    <NuxtLink :to="localePath('/tea-house')" class="absolute bottom-0 mb-[21px] lg:mb-[32px]">
      <button type="button" class="border-[1.75px] uppercase text-12 sm:text-16 text-center font-medium border-techblue w-[165px] sm:w-[220px] h-[32px] sm:h-[42px] hover:bg-techblue hover:text-white transition-colors duration-300 focus:border-1">
        {{ $t('landingPage.projectsSection.teahouseButton') }}
      </button>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
</script>