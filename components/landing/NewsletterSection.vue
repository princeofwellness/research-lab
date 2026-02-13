<script setup lang="ts">

// import {AlertCircle, Rocket} from "lucide-vue-next";
import {type HTMLAttributes, ref} from "vue";
import {validateEmail} from "~/lib/validation";
import axios from "axios";
import {cn} from "~/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes['class'],
}>()

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
  <div :class="cn(`container text-[0.9em] md:text-base text-techblue mx-auto`, props.class)">
    <div class="pb-[32px]">
      <span class="text-42 lg:text-68 sm:w-full font-extrabold uppercase ">Newsletter</span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="col-span-7 pr-12 pb-8 lg:pb-0">
        <p class="mb-1 font-light text-16 font-source-code-pro ">
          Get the latest Toolkits, events, and insights from <ResearchLabText/> — straight to your inbox.
        </p>
      </div>
      <div class="col-span-5 flex">
        <div class="flex flex-col w-full pr-2">
          <input
              v-model="emailText"
              id="email"
              name="email"
              placeholder="Email"
              required
              class="w-full border-[1.5px] placeholder-techblue border-techblue py-2 px-3 bg-transparent focus:outline-none focus:ring-1 focus:ring-techblue"
          />
        </div>
        <button
            @click="handleSubscribe"
            :disabled="loadingSubscribe"
            class="border-techblue border-[1.75px] text-16 font-semibold w-[160px] h-[42px] hover:bg-techblue hover:text-white transition-colors duration-300 focus:border-1">
          Subscribe
        </button>
      </div>
      <div class="col-span-7"></div>
      <div class="col-span-5 pt-6 lg:pt-0">
        <Alert variant="destructive" class="rounded-none opacity-0 animate-fade-in mb-6" v-if="error">
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
      </div>
    </div>



  </div>
</template>

<style scoped>

</style>