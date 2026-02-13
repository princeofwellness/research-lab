<script setup lang="ts">

import {ref} from "vue";

import LandingAbout from "~/components/landing/LandingAbout.vue";
import LandingHero from "~/components/landing/LandingHero.vue";
import LandingProjects from "~/components/landing/LandingProjects.vue";
import LandingVenn from "~/components/landing/LandingVenn.vue";
import LandingProtocols from "~/components/landing/LandingProtocols.vue";
import {ogMetaDescription, ogMetaImage} from "~/constants/constant";


useHead({
  title: 'RESEARCH LAB | SORRYWECAN',
  meta: [
    {name: 'description', content: ogMetaDescription},
    {name: 'og:image', content: ogMetaImage},
    {name: "twitter:image", content: ogMetaImage},
  ]
})
defineRouteRules({
  sitemap: {
    changefreq: 'weekly',
    priority: 1.0
  },
})

</script>

<template>
  <Header/>

  <main class="mx-auto text-techblue">
    <LandingHero/>
    <LandingAbout/>
    <div class="flex-grow flex flex-col items-center justify-center text-techblue pb-[136px]">
      <LandingProjects/>
      <p class="text-[12px] italic pt-[32px] lg:pt-[68px] px-[21px]">{{ $t('teahousePage.disclaimer')}}</p>

      <LandingVenn/>
      <NewsletterSection class="pt-[68px] lg:pt-[136px] pb-[36px] lg:pb-[68px]"/>
<!--      <LandingProtocols/>-->
    </div>
  </main>


<!--  <Dialog v-model:open="downloadModalOpened">-->
<!--    <DialogContent class="rounded-none text-techblue bg-[var(&#45;&#45;bg-color)]">-->
<!--      <DownloadPaperDialog/>-->
<!--    </DialogContent>-->
<!--  </Dialog>-->

  <Footer/>
</template>

<style scope>

@media (hover: none) and (pointer: coarse) {
  .touch-no-pointer-events {
    pointer-events: none;
  }
}
</style>