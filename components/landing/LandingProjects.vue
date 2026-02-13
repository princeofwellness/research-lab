<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {useMediaQuery} from "@vueuse/core";
import LandingTeahouseItem from "~/components/landing/LandingTeahouseItem.vue";
import {futureProtocols} from "~/constants/future-protocols";

const {t} = useI18n();



interface Project {
  title: string
  description: string,
  buttonLabel: string,
  buttonLink?: string
  buttonRoute?: string
}


const isMobile = useMediaQuery('(max-width: 768px)')

const carouselConfig = {
  itemsToShow: 3,
  wrapAround: true,
  gap: 21,
  autoplay: 6666,
}


</script>

<template>
  <div
      class="max-w-[90vw] sm:max-w-xl lg:max-w-2xl flex flex-col justify-center align-center content-center pt-[68px] lg:pt-[136px]">
    <h1 class="text-26 sm:text-42 text-center mb-4 pb-[21px] uppercase sm:pb-[32px]">{{ $t('landingPage.projectsSection.heading') }}</h1>
  </div>

  <div class="justify-center align-center content-center w-[90vw] lg:w-[90vw] 2xl:w-[70vw] space-x-0 lg:space-x-8 space-y-8 lg:space-y-0 select-none">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
      <LandingProjectItem
          class="carousel__item"
          :title="$t('landingPage.projectsSection.protocolsHeading')"
          :description="$t('landingPage.projectsSection.protocolsDescription')"
          :button-label="$t('landingPage.projectsSection.protocolsButton')"
          :button-link="futureProtocols[0].downloadLink"
      />
      <LandingProjectItem
          class="carousel__item"
          :title="$t('landingPage.projectsSection.mindshiftHeading')"
          :description="$t('landingPage.projectsSection.mindshiftDescription')"
          :button-label="$t('landingPage.projectsSection.mindshiftButton')"
          button-route="/mindshift"
      />
      <LandingProjectItem
          class="carousel__item"
          :title="$t('landingPage.projectsSection.communiteaHeading')"
          :description="$t('landingPage.projectsSection.communiteaDescription')"
          :button-label="$t('landingPage.projectsSection.communiteaButton')"
          button-link="/communitea"
      />
    </div>
<!--    <Carousel v-bind="carouselConfig" v-if="!isMobile" class="px-[36px]">-->
<!--      <Slide>-->
<!--        <LandingProjectItem-->
<!--            class="carousel__item"-->
<!--            :title="$t('landingPage.projectsSection.protocolsHeading')"-->
<!--            :description="$t('landingPage.projectsSection.protocolsDescription')"-->
<!--            :button-label="$t('landingPage.projectsSection.protocolsButton')"-->
<!--            :button-link="protocolUrl"-->
<!--        />-->
<!--      </Slide>-->

<!--      <Slide>-->
<!--        <LandingProjectItem-->
<!--            class="carousel__item"-->
<!--            :title="$t('landingPage.projectsSection.communiteaHeading')"-->
<!--            :description="$t('landingPage.projectsSection.communiteaDescription')"-->
<!--            :button-label="$t('landingPage.projectsSection.communiteaButton')"-->
<!--            :button-link="protocolUrl"-->
<!--        />-->
<!--      </Slide>-->

<!--      <Slide>-->
<!--        <LandingProjectItem-->
<!--            class="carousel__item"-->
<!--            :title="$t('landingPage.projectsSection.mindshiftHeading')"-->
<!--            :description="$t('landingPage.projectsSection.mindshiftDescription')"-->
<!--            :button-label="$t('landingPage.projectsSection.mindshiftButton')"-->
<!--            button-route="/mindshift"-->
<!--        />-->
<!--      </Slide>-->


<!--      <template #addons>-->
<!--        <Navigation/>-->
<!--        <Pagination />-->
<!--      </template>-->
<!--    </Carousel>-->
<!-- 
    <template v-if="isMobile">
      <LandingProjectItem
          class="carousel__item"
          :title="$t('landingPage.projectsSection.mindshiftHeading')"
          :description="$t('landingPage.projectsSection.mindshiftDescription')"
          :button-label="$t('landingPage.projectsSection.mindshiftButton')"
          button-route="/mindshift"
      />
      <LandingProjectItem
          class="carousel__item"
          :title="$t('landingPage.projectsSection.protocolsHeading')"
          :description="$t('landingPage.projectsSection.protocolsDescription')"
          :button-label="$t('landingPage.projectsSection.protocolsButton')"
          :button-link="protocolUrl"
      /> -->

<!--      <LandingProjectItem-->
<!--          class="carousel__item"-->
<!--          :title="$t('landingPage.projectsSection.colabHeading')"-->
<!--          :description="$t('landingPage.projectsSection.colabDescription')"-->
<!--          :button-label="$t('landingPage.projectsSection.colabButton')"-->
<!--          button-route="/mindshift"-->
<!--      />-->
      <!-- <LandingTeahouseItem/>
    </template> -->

  </div>
</template>

<style>
:root {
  --vc-png-bottom: -20px;
  --vc-pgn-active-color: var(--tech-blue-color);
  --vc-pgn-background-color: var(--tech-blue-color-3);

}
.carousel__icon {
  fill: var(--tech-blue-color);

}
</style>