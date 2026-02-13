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
      <div class="relative bg-[var(--bg-color)] border-techblue border-2 px-[21px] py-[80px] lg:py-[136px] lg:p-[136px] mx-[21px] lg:mx-0">
        <div class="absolute top-0 right-0 pr-[21px] pt-[21px] z-50 cursor-pointer" @click="onClickClose">
          <Cross1Icon class=" h-8 w-8 "/>
        </div>
        <div class="flex flex-col items-center">
            <span class="text-[23px] lg:text-68 uppercase font-bold"
            >Join the community.</span>
          <p class="pt-[21px] lg:pt-0 text-center lg:text-[18px]">Be the first to receive our latest toolkits, event invitations, and workshop updates.</p>
        </div>


        <form  class="flex gap-2 pt-[32px] lg:pt-[68px]" v-if="!subscribed" @submit="handleSubmit">
          <input
              v-model="emailText"
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              class="w-full border-[1.5px] placeholder-[rgba(0,71,187,0.4)] border-techblue py-1 px-3 bg-transparent focus:outline-none focus:ring-1 focus:ring-techblue"
          />
          <button
              type="submit"
              :disabled="loading"
              class="border-techblue border-[1.75px] text-16 font-semibold w-[160px] h-[42px] hover:bg-techblue hover:text-white transition-colors duration-300 focus:border-1">
            Subscribe
          </button>
        </form>

        <div class="mt-[32px]">
          <Alert variant="destructive" class="rounded-none opacity-0 animate-fade-in mb-6"
                 v-if="error">
            <ExclamationTriangleIcon class="w-4 h-4"/>
            <AlertTitle>{{ $t('landingPage.protocolsSection.errorTitle') }}</AlertTitle>
            <AlertDescription>
              {{ error }}
            </AlertDescription>
          </Alert>
          <Alert
              class="rounded-none border-techblue text-16 text-techblue [&>svg]:text-techblue opacity-0 animate-fade-in"
              v-if="subscribed">
            <RocketIcon class="h-4 w-4 text-techblue"/>
            <AlertTitle>{{ $t('landingPage.protocolsSection.successTitle') }}</AlertTitle>
            <AlertDescription>
              {{ $t('landingPage.protocolsSection.successText') }}
            </AlertDescription>
          </Alert>
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

const {t} = useI18n();

const emailText = ref('');
const error = ref('');
const loading = ref(false);
const subscribed = ref(false);
const { setClosed, visible, trigger } = usePolitePopup('newsletter-popup', {ignoreFrequencyCaps: false});

const handleSubmit = (e) => {
  e.preventDefault();
  loading.value = true;
  axios.post('/api/subscribe', {email: emailText.value})
      .then(response => {
        loading.value = false;
        if (!response.data.success) {
          error.value = t('landingPage.protocolsSection.errorGeneric')
          return;
        }
        subscribed.value = true;
        setTimeout(onClickClose, 3333);
      })
      .catch(e => {
        loading.value = false;
        console.log(e)
        error.value = t('landingPage.protocolsSection.errorGeneric')
      });
}


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
