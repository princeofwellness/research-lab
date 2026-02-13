<script setup lang="ts">

import MindshiftDiagram from "~/components/vector/MindshiftDiagram.vue";
import ProtocolsDiagram from "~/components/vector/ProtocolsDiagram.vue";

const futureProtocolsItems = [
  ["Adaptive Pattern Recognition", "Frameworks that identify connections across technology, consciousness, and creativity that remain invisible to siloed thinking"],
  ["Perceptual Expansion Tools", "Practical methods that extend thinking beyond conventional boundaries and unlock previously inaccessible insights"],
  ["Applied Hybrid Methodologies", "Actionable approaches for implementing emergent human-AI collaborative systems in real-world contexts"],
  ["Cognitive Recalibration", "Thought experiments designed to restructure mental models for more effective engagement with complex systems"],
]


</script>

<template>
  <div class="w-full flex flex-col lg:flex-row lg:space-x-16">
    <div class="lg:w-1/2 mb-10 lg:mb-0 flex-1 justify-center"></div>

    <div class="lg:w-1/2 text-techblue">
      <h2 class="text-26 sm:text-42 font-bold leading-none uppercase">
        {{$t('lightpaper.initiativesSection.heading') }}
      </h2>
    </div>
  </div>

  <section class="w-full flex lg:flex-row lg:space-x-16 flex-col-reverse  py-[21px]">
    <div class="lg:w-1/2 mb-10 lg:mb-0 flex-1 content-center">
      <div class="flex justify-center pt-[32px] lg:pt-0">
        <MindshiftDiagram class="w-full lg:w-8/12"/>
      </div>

      <p class="italic pt-[32px]">
        {{$t('lightpaper.initiativesSection.mindshift.evolutionText') }}
      </p>
    </div>

    <div class="lg:w-1/2 text-techblue">
      <h3 class="text-26 font-semibold italic">Mindshift</h3>
      <p class="text-base  mb-4" v-html="$t('lightpaper.initiativesSection.mindshift.text', {BR: '<br/>'})"></p>

      <p class="text-base mb-[36px]" v-html="$t('lightpaper.initiativesSection.mindshift.text2', {BR: '<br/>', BOLD_MINDSHIFT: '<strong>MINDSHIFT</strong>'})"></p>


      <div class="border border-techblue p-6">
        <h4 class="text-26 font-semibold mb-6 italic">
          {{$t('lightpaper.initiativesSection.mindshift.levelsHeading') }}
        </h4>

        <!-- 1. MENTAL MODEL RECALIBRATION -->
        <div>
          <h5 class="text-lg font-bold mb-2">
            {{$t('lightpaper.initiativesSection.mindshift.levelTitle1') }}
          </h5>
          <p class="text-base">
            {{$t('lightpaper.initiativesSection.mindshift.levelText1') }}
          </p>
        </div>

        <div class="w-full border-b border-techblue my-[21px]"></div>

        <!-- 2. COLLABORATIVE COGNITION -->
        <div>
          <h5 class="text-lg font-bold mb-2">
            {{$t('lightpaper.initiativesSection.mindshift.levelTitle2') }}
          </h5>
          <p class="text-base">
            {{$t('lightpaper.initiativesSection.mindshift.levelText2') }}
          </p>
        </div>

        <div class="w-full border-b border-techblue my-[21px]"></div>

        <!-- 3. ADAPTIVE INTUITION -->
        <div>
          <h5 class="text-lg font-bold mb-2">
            {{$t('lightpaper.initiativesSection.mindshift.levelTitle3') }}
          </h5>
          <p class="text-base">
            {{$t('lightpaper.initiativesSection.mindshift.levelText3') }}
          </p>
        </div>
      </div>
    </div>
  </section>


  <div class="w-full mt-[42px] lg:mt-[68px]"></div>

  <section class="w-full flex-1 space-y-8">
    <div>
      <h3 class="text-26 font-semibold italic py-[21px]">
        {{$t('lightpaper.initiativesSection.protocols.heading') }}
      </h3>
      <p class="mb-6 leading-relaxed text-techblue">
        {{$t('lightpaper.initiativesSection.protocols.description') }}
      </p>
    </div>
    <div class="w-full flex flex-col lg:flex-row lg:space-x-16">
      <div class="lg:w-1/2">
        <div class="border-2 border-blue-800 p-6 max-w-2xl mx-auto">
          <span class="text-techblue font-bold uppercase text-16">
            {{$t('lightpaper.initiativesSection.protocols.setsApart') }}
          </span>
          <div class="mt-4">
            <div class="bg-[#e4dcd4] p-4 mb-4">
              <span class="font-bold text-techblue">{{$t('lightpaper.initiativesSection.protocols.itemTitle1') }}</span>
              <p class="text-techblue">{{$t('lightpaper.initiativesSection.protocols.itemText1') }}</p>
            </div>
            <div class="bg-[#e4dcd4] p-4 mb-4">
              <span class="font-bold text-techblue">{{$t('lightpaper.initiativesSection.protocols.itemTitle2') }}</span>
              <p class="text-techblue">{{$t('lightpaper.initiativesSection.protocols.itemText2') }}</p>
            </div>
            <div class="bg-[#e4dcd4] p-4 mb-4">
              <span class="font-bold text-techblue">{{$t('lightpaper.initiativesSection.protocols.itemTitle3') }}</span>
              <p class="text-techblue">{{$t('lightpaper.initiativesSection.protocols.itemText3') }}</p>
            </div>
            <div class="bg-[#e4dcd4] p-4 mb-4">
              <span class="font-bold text-techblue">{{$t('lightpaper.initiativesSection.protocols.itemTitle4') }}</span>
              <p class="text-techblue">{{$t('lightpaper.initiativesSection.protocols.itemText4') }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 mb-10 lg:mb-0 flex justify-center mt-12 ml-8">
        <ProtocolsDiagram/>
      </div>
    </div>

    <div>
      <p class="leading-relaxed text-[20px] text-techblue italic">
        {{ $t('lightpaper.initiativesSection.protocols.endText') }}
      </p>
    </div>
  </section>


  <div class="w-full mt-[42px] lg:mt-[68px]"></div>


  <section class="w-full flex-1 space-y-8">
    <div class="pb-[21px]">
      <h3 class="text-26 font-semibold italic py-[21px]">
        {{ $t('lightpaper.initiativesSection.space.heading') }}
      </h3>
      <p class="mb-3 leading-relaxed text-techblue">
        {{ $t('lightpaper.initiativesSection.space.text1') }}
      </p>
      <p class="leading-relaxed text-techblue">
        {{ $t('lightpaper.initiativesSection.space.text2') }}
      </p>
    </div>
    <div class="w-full flex flex-col-reverse lg:flex-row  lg:space-x-16 ">
      <div class="lg:w-1/2 pt-12 flex justify-center content-center items-center">
        <img
            src="/static/lightpaper/research-lab-space.png"
            class="w-full object-contain"
        />
      </div>

      <div class="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">

        <div class="border border-techblue p-6 max-w-xl mx-auto">
          <h2 class="text-techblue font-bold uppercase lg:text-26 mb-4">
            {{ $t('lightpaper.initiativesSection.space.elementsHeading') }}
          </h2>

          <div class="mb-6">
            <h3 class="text-techblue font-semibold underline">
              {{ $t('lightpaper.initiativesSection.space.elementTitle1') }}
            </h3>
            <p class="text-techblue">
              {{ $t('lightpaper.initiativesSection.space.elementText1') }}
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-techblue font-semibold underline">
              {{ $t('lightpaper.initiativesSection.space.elementTitle2') }}
            </h3>
            <p class="text-techblue">
              {{ $t('lightpaper.initiativesSection.space.elementText2') }}
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-techblue font-semibold underline">
              {{ $t('lightpaper.initiativesSection.space.elementTitle3') }}
            </h3>
            <p class="text-techblue">
              {{ $t('lightpaper.initiativesSection.space.elementText3') }}
            </p>
          </div>

          <div>
            <h3 class="text-techblue font-semibold underline">
              {{ $t('lightpaper.initiativesSection.space.elementTitle4') }}
            </h3>
            <p class="text-techblue">
              {{ $t('lightpaper.initiativesSection.space.elementText4') }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

