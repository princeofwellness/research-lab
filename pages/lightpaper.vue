<script lang="ts" setup>

import SorrywecanText from "~/components/SorrywecanText.vue";
import ResearchLabText from "~/components/ResearchLabText.vue";
import CreativeEcosystemDiagram from "~/components/vector/CreativeEcosystemDiagram.vue";
import OurApproachDiagram from "~/components/vector/OurApproachDiagram.vue";
import MindshiftDiagram from "~/components/vector/MindshiftDiagram.vue";
import FutureDiagram from "~/components/vector/FutureDiagram.vue";
import ProtocolsDiagram from "~/components/vector/ProtocolsDiagram.vue";
import CurrentInitiatives from "~/components/lightpaper/CurrentInitiatives.vue";
import CreativeEcosystem from "~/components/lightpaper/CreativeEcosystem.vue";
import OurApproach from "~/components/lightpaper/OurApproach.vue";
import Future from "~/components/lightpaper/Future.vue";
import EthicalFramework from "~/components/lightpaper/EthicalFramework.vue";
import Timeline from "~/components/lightpaper/Timeline.vue";
import JoinExploration from "~/components/lightpaper/JoinExploration.vue";
import Vision from "~/components/lightpaper/Vision.vue";
import Origins from "~/components/lightpaper/Origins.vue";
import {ogMetaDescription, ogMetaImage} from "~/constants/constant";


useHead({
  title: 'LIGHTPAPER | RESEARCH LAB',
  meta: [
    {name: 'description', content: ogMetaDescription},
    {name: 'og:image', content: ogMetaImage},
    {name: "twitter:image", content: ogMetaImage},
  ]
})

defineRouteRules({
  sitemap: {
    changefreq: 'monthly',
    priority: 0.8
  },
})

const spacerClass = `w-full my-[68px] lg:my-[136px] border-b border-techblue`
</script>

<template>
  <Header/>

  <div class="flex flex-col min-h-screen text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96">
    <div class="w-full text-center leading-none pt-[136px]">
      <h1 class="text-26 lg:text-68  tracking-wide text-techblue">
        <SorrywecanText/>
        x
        <ResearchLabText/>
      </h1>
      <p class="mt-8 lg:mt-2 text-26 sm:text-42 font-bold">
        {{ $t('lightpaper.heroHeading') }}
      </p>
    </div>

    <Origins/>
    <div :class="spacerClass"></div>
    <Vision/>
    <div :class="spacerClass"></div>
    <CreativeEcosystem/>
    <div :class="spacerClass"></div>
    <OurApproach/>
    <div :class="spacerClass"></div>
    <CurrentInitiatives/>
    <div :class="spacerClass"></div>
    <Future/>
    <div :class="spacerClass"></div>
    <Timeline/>
    <div :class="spacerClass"></div>
    <EthicalFramework/>
    <div :class="spacerClass"></div>
    <JoinExploration/>

    <div class="flex justify-center py-[136px]">
      <a href="/static/pdf/Lightpaper.pdf" target="_blank">
        <button
            class="border-[1.75px] font-semibold text-base uppercase border-techblue text-techblue py-2 px-4 hover:bg-techblue hover:text-white transition-colors duration-300 focus:border-1">
          {{ $t('lightpaper.endingSection.downloadButton') }}
        </button>
      </a>
    </div>


    <Footer/>
  </div>
</template>
