<script lang="ts" setup xmlns="http://www.w3.org/1999/html">

import {ogMetaDescription, ogMetaImage, researchLabHtml, swcHtml} from "~/constants/constant";
import type {HTMLAttributes} from "vue";
import {cn} from "~/lib/utils";

useHead({
  title: 'Pop-up Tea House',
  meta: [
    {name: 'description', content: ogMetaDescription},
    {name: 'og:image', content: ogMetaImage},
    {name: "twitter:image", content: ogMetaImage},
  ]
})
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Header/>

  <div class="flex flex-col min-h-screen text-techblue">
    <section class="grow flex flex-col py-[136px] lg:pb-[68px]">
      <div class="container lg:max-w-screen-lg mx-auto">

        <div class="flex justify-center pt-[68px]">
          <div class="relative table text-68 font-bold">
            <span class="absolute -top-[120px] -left-[9px] text-[90px]">*</span>
            <span class="absolute -top-[68px]">Pop</span>
            <span class="absolute -top-[68px] right-0">Up</span>
            <span>Tea House</span>

            <div class="relative flex items-center">
              <div class="text-16 flex-none ...">{{ $t("teahousePage.startDate")}}</div>
              <div class="grow px-[21px] h-[1px]">
                <div class="w-full h-full bg-techblue "></div>
              </div>
              <div class="text-16 flex-none ...">{{ $t("teahousePage.endDate")}}</div>
            </div>

          </div>
        </div>


        <div class="font-source-code-pro pt-[68px] flex flex-col gap-[32px]">
          <p v-html="$t('teahousePage.description', {STARTBOLD: '<b>', ENDBOLD: '</b>', SWC_LOGO: swcHtml, RL_LOGO: researchLabHtml})"></p>
          <ul class="list-disc list-inside pl-1 space-y-[21px]">
            <li class="italic" v-html="$t('teahousePage.listItem1', {STARTBOLD: `<b class='not-italic'>`, ENDBOLD: '</b>'})"></li>
            <li class="italic" v-html="$t('teahousePage.listItem2', {STARTBOLD: `<b class='not-italic'>`, ENDBOLD: '</b>'})"></li>
          </ul>

          <div>
            <p>
              {{ $t("teahousePage.conclusion")}}
            </p>
          </div>
        </div>

      </div>

      <section id="speakers" class="pb-[136px]">
        <TeaHouseSpeaker
            day="MON"
            day-date="22.09"
            time="18:00"
            img-url="/static/img/speakers/roman.jpg"
            name="Roman Pii Wagner"
            :title="$t('teahousePage.speakers.roman.title', {BR: '<br/>'})"
            :role="$t('teahousePage.speakers.roman.role', {BR: '<br/>'})"
            :description="$t('teahousePage.speakers.roman.description', {BR: '<br/>'})"
        />

        <TeaHouseSpeaker
            day="TUE"
            day-date="23.09"
            time="18:00"
            img-url="/static/img/speakers/luis.jpg"
            name="Luís Miguel Girão"
            :title="$t('teahousePage.speakers.luis.title', {BR: '<br/>'})"
            :role="$t('teahousePage.speakers.luis.role', {BR: '<br/>'})"
            :description="$t('teahousePage.speakers.luis.description', {BR: '<br/>'})"
        />

        <TeaHouseSpeaker
            day="WED"
            day-date="24.09"
            time="18:00"
            img-url="/static/img/speakers/andras.jpg"
            name="András Cséfalvay"
            :title="$t('teahousePage.speakers.andras.title', {BR: '<br/>'})"
            :role="$t('teahousePage.speakers.andras.role', {BR: '<br/>'})"
            :description="$t('teahousePage.speakers.andras.description', {BR: '<br/>'})"
        />

        <TeaHouseSpeaker
            day="THU"
            day-date="25.09"
            time="18:00"
            img-url="/static/img/speakers/michal.jpg"
            name="Michal Matloň"
            :title="$t('teahousePage.speakers.michal.title', {BR: '<br/>'})"
            :role="$t('teahousePage.speakers.michal.role', {BR: '<br/>'})"
            :description="$t('teahousePage.speakers.michal.description', {BR: '<br/>'})"
        />
      </section>


      <div class="container lg:max-w-screen-lg mx-auto">
        <div class="w-full grid grid-cols-1 lg:grid-cols-3 text-[21px] gap-[9px] text-center">
          <div class="lg:flex"><SorrywecanText/></div>
          <div class="lg:flex lg:justify-center"><ResearchLabText/></div>
          <div class="lg:flex lg:justify-end font-bold">Pečnianska 7, Petržalka</div>
        </div>
      </div>
    </section>

    <Footer/>
  </div>
</template>
