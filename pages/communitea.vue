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
  title: 'COMMUNITEA | RESEARCH LAB',
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
    <div class="w-full text-center leading-none pt-[100px] lg:pt-[136px]">
      <h1 class="text-[28px] lg:text-68  tracking-wide font-black text-techblue">
        TEA
        <span class="font-normal">X</span>
        AI
        <span class="font-normal">X</span>
        PRESENCE
      </h1>
    </div>

    <div class="flex flex-col gap-[42px] lg:gap-[68px] pt-[42px] lg:pt-[68px] pb-[68px] lg:pb-[136px] text-16 lg:text-26">
      <p class="">While our main focus is <b>artificial intelligence</b>, the Research Lab has never been only about technology. We explore the subtle conditions that allow <b>awareness</b> — human or artificial — to manifest itself.</p>
      <p class=""><b>COMMUNITEA</b> is an experiment in <b>collective synchronization</b>. It doesn't start with data, but with tea — a ritual known to slow neural oscillations and enhance alpha-wave coherence in the brain. Combined with architecture and a mindful approach to entering the session, it works as a <b>cognitive catalyst</b>. </p>
      <p class="lg:w-10/12 ml-auto">We host <b>public COMMUNITEA Sessions</b> — open gatherings where tea, mindfulness, and AI meet in a one space. Also we offer <b>private sessions</b> — curated experiences for organizations, including a guest lecturer, a tea program, and fully designed spatial ambience.  </p>
      <p class="lg:w-10/12 ml-auto">COMMUNITEA often serves as an entry point to <b>MINDSHIFT</b> — a relaxed way for organizations to understand where they stand with AI before deciding on their next steps.</p>
      <p class="">Our first public series, <b>Pop-Up Tea House</b>, ran September 22–26, 2025. Among the participants were thinkers such as <i>Roman Pii Wagner</i>, <i>Luís Miguel Girão</i>, <i>András Cséfalvay</i>, and <i>Michal Matloň</i>.</p>
    </div>
  </div>

  <NewsletterSection class="pb-[136px]"/>

  <Footer/>
</template>
