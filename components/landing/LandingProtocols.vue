<script setup lang="ts">

// import {AlertCircle, Rocket} from "lucide-vue-next";
import {ref} from "vue";
import {validateEmail} from "~/lib/validation";
import axios from "axios";

const emailText = ref('');
const error = ref<string | null>(null);
const subscribed = ref(false);
const loadingSubscribe = ref(false);

const {t} = useI18n();

const handleSubscribe = () => {
  if (!validateEmail(emailText.value)) {
    error.value = t('landingPage.protocolsSection.errorEmail')
    return;
  }
  error.value = null;

  loadingSubscribe.value = true;
  axios.post('/api/subscribe', {email: emailText.value})
      .then(response => {
        if (response.data.success) {
          subscribed.value = true;
        }
        loadingSubscribe.value = false;
      })
      .catch(e => {
        loadingSubscribe.value = false;
        console.log(e)
        error.value = t('landingPage.protocolsSection.errorGeneric')
      });
}

</script>

<template>
  <div class="w-full flex flex-col items-center pt-[68px] sm:pt-[136px] pb-[68px]">
<!--        <span class=" text-center text-16 sm:text-26 w-8/12 sm:w-full font-medium uppercase">{{ $t('landingPage.protocolsSection.cto')}}</span>-->
  </div>


  <!-- Contact prompt & email form -->
  <div class="border border-techblue max-w-2xl p-[1.5em] lg:p-[2em] lg:px-[8em] mx-4 text-[0.9em] md:text-base">
    <h2 class="text-16 sm:text-26 font-bold pb-[21px] sm:pb-[32px] uppercase text-center" id="future-protocols">{{ $t('landingPage.protocolsSection.heading') }}</h2>
    <p class="mb-1 font-light pb-8 text-center text-12 sm:text-16 font-source-code-pro">
      {{ $t('landingPage.protocolsSection.description') }}
    </p>
    <Alert variant="destructive" class="rounded-none opacity-0 animate-fade-in mb-6"
           v-if="error">
<!--      <AlertCircle class="w-4 h-4"/>-->
      <AlertTitle>{{ $t('landingPage.protocolsSection.errorTitle') }}</AlertTitle>
      <AlertDescription>
        {{ error }}
      </AlertDescription>
    </Alert>
    <Alert
        class="rounded-none border-techblue text-16 text-techblue [&>svg]:text-techblue opacity-0 animate-fade-in"
        v-if="subscribed">
<!--      <Rocket class="h-4 w-4 text-techblue"/>-->
      <AlertTitle>{{ $t('landingPage.protocolsSection.successTitle') }}</AlertTitle>
      <AlertDescription>
        {{ $t('landingPage.protocolsSection.successText') }}
      </AlertDescription>
    </Alert>

    <div class="flex flex-col gap-2 " v-if="!subscribed">
      <input
          v-model="emailText"
          id="email"
          name="email"
          placeholder="Email"
          class="w-full border-[1.5px] placeholder-techblue placeholder-opacity-5 border-techblue py-1 px-3 bg-transparent focus:outline-none focus:ring-1 focus:ring-techblue"
      />
    </div>
    <div class="flex justify-center pt-[32px]" v-if="!subscribed">
      <button
          @click="handleSubscribe"
          :disabled="loadingSubscribe"
          class="border-techblue border-[1.75px] text-16 font-semibold w-[160px] h-[42px] hover:bg-techblue hover:text-white transition-colors duration-300 focus:border-1">
        {{ $t('landingPage.protocolsSection.button') }}
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>