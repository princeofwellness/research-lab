<template>
  <div
      v-if="visible"
      class="
      fixed
      z-50
      left-0
      bottom-0
    "
  >
    <div class="flex w-screen h-screen justify-center items-center bg-[rgba(0,0,0,0.4)] opacity-0 animate-fade-in text-techblue" @click="handleClickAway" id="clickaway">
      <div class="relative bg-[var(--bg-color)] border-techblue border-2">
        <img class="w-full h-full" src="/static/img/background.webp" alt="" v-if="!isMobile"/>

        <div class="lg:absolute top-0 right-0 w-full h-full py-12 lg:py-0">
          <div class="flex flex-col items-center justify-center content-center h-full">
            <div class="absolute top-0 right-0 pr-[21px] pt-[21px] z-50 cursor-pointer" @click="onClickClose">
              <Cross1Icon class=" h-8 w-8 "/>
            </div>

            <div class="flex justify-center pt-[68px]">
              <div class="relative table text-68 lg:text-[92px] font-bold">
                <span class="absolute -top-[90px] text-16 lg:text-26 w-full font-normal text-center"><span class="font-semibold">{{  $t('teahousePopup.joinUs') }}</span> at</span>
                <span class="absolute -top-[150px] -left-[12px] text-[132px]">*</span>
                <span class="absolute -top-[68px]">Pop</span>
                <span class="absolute -top-[68px] right-0">Up</span>
                <span>Tea House</span>

                <div class="relative flex items-center">
                  <div class="text-16 flex-none">{{ $t("teahousePage.startDate")}}</div>
                  <div class="grow px-[21px] h-[1px]">
                    <div class="w-full h-full bg-techblue "></div>
                  </div>
                  <div class="text-16 flex-none">{{ $t("teahousePage.endDate")}}</div>
                </div>
              </div>
            </div>

            <div class="text-16 lg:text-[21px] lg:w-1/2 py-[32px] px-[21px] lg:px-0">
              <p class="text-center font-medium"  v-html="$t('teahousePopup.info', {BR: '<br/>'})"></p>
            </div>

            <NuxtLink to="/tea-house" @click.native="onClickClose">
              <button
                  class="border-techblue border-[1.75px] text-[18px] font-medium w-[250px] h-[50px] bg-techblue hover:bg-transparent text-white transition-colors duration-300 focus:border-1 uppercase">
                {{ $t('teahousePopup.learnMore') }}
              </button>
            </NuxtLink>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {usePolitePopup} from "~/composables/usePolitePopup";
import {Cross1Icon} from '@radix-icons/vue'
import {RocketIcon} from '@radix-icons/vue'
import {ExclamationTriangleIcon} from '@radix-icons/vue'
import {validateEmail} from "~/lib/validation";
import axios from "axios";
import {useMediaQuery} from "@vueuse/core";
const router = useRouter();

const {t} = useI18n();

const emailText = ref('');
const error = ref('');
const loading = ref(false);
const subscribed = ref(false);
const { setClosed, visible, trigger } = usePolitePopup('teahouse-popup');
const isMobile = useMediaQuery('(max-width: 768px)')



const handleClickAway = (e: MouseEvent) => {
  if(e.target.id === "clickaway"){
    setClosed();
  }
}

const onClickClose = () => {
  setClosed();
};

trigger();
</script>
