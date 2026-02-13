<script setup lang="ts">
import {IdCardIcon} from '@radix-icons/vue'


import axios from "axios";
// import {AlertCircle, Rocket} from "lucide-vue-next";
import {
  contactConnections,
  contactDisciplines, contactDiscovery,
  contactEngagement,
  contactPersons,
  contactPurposes
} from "~/lib/common/contactForm";
import {ogMetaDescription, ogMetaImage, recaptchaSiteKey} from "~/constants/constant";

useHead({
  title: 'CONTACT | RESEARCH LAB',
  meta: [
    {name: 'description', content: ogMetaDescription},
    {name: 'og:image', content: ogMetaImage},
    {name: "twitter:image", content: ogMetaImage},
  ]
})

const nameVal = ref<string>('');
const emailVal = ref<string>('');
const organizationVal = ref<string>('');
const messageVal = ref<string>('');
const purposeVal = ref<string>('');
const discoveryVal = ref<string>('');
const subscribeVal = ref(true);
const researchParticipantVal = ref(false);

const errorMessage = ref<string>('');
const success = ref(false);
const loading = ref(false);

defineRouteRules({
  sitemap: {
    changefreq: 'monthly',
    priority: 0.8
  },
})

onMounted(() => {
  if(window === undefined)
    return;
  const recaptchaScript = document.createElement('script')
  recaptchaScript.setAttribute('src', `https://www.google.com/recaptcha/enterprise.js?render=${recaptchaSiteKey}`)
  document.head.appendChild(recaptchaScript)
})


const submitForm = (e) => {
  e.preventDefault();
  loading.value = true;

  grecaptcha.enterprise.ready(async () => {
    const token = await grecaptcha.enterprise.execute(recaptchaSiteKey, {action: 'CONTACT'});
    var contactReqBody: Record<string, string> = {
      name: nameVal.value,
      email: emailVal.value,
      organization: organizationVal.value,
      message: messageVal.value,
      subscribe: subscribeVal.value,
      captchaToken: token
    };
    if(discoveryVal.value.length > 0){
      contactReqBody.discovery = discoveryVal.value;
    }

    axios.post('/api/contact', contactReqBody).then(response => {
      loading.value = false;
      if (response.data.success) {
        errorMessage.value = ''
        success.value = true;
      } else {
        errorMessage.value = response.data.error;
      }
    }).catch(error => {
      errorMessage.value = 'Unexpected error.'
    });
  });
}


const contactInfo = {
  phone: '+421',
  address: 'Pecnianska 13, Bratislava',
  email: 'researchlab@sorrywecan.com'
}


</script>


<template>
  <Header/>

  <div class="flex flex-col min-h-screen font-source-code-pro">
    <section class="grow flex pt-[68px] sm:pt-[136px]">
      <div class="container mx-auto">
        <div class="lg:flex-1 lg:items-center lg:-mx-6">

          <div class="relative w-full px-8 py-10 mx-auto overflow-hidden bg-[var(--background-secondary)] rounded-lg shadow-2xl shadow-gray-300/50 dark:shadow-black/50 mt-6 lg:mt-0">
            <h1 class="text-lg font-medium  text-techblue">{{ $t('contactPage.cto') }}</h1>

            <div class="absolute h-full w-full left-0 top-0 flex items-center justify-center content-center pointer-events-none px-8">
              <Alert
                  class="font-source-code-pro sm:rounded-none border-techblue text-techblue [&>svg]:text-techblue opacity-0 animate-fade-in"
                  v-if="success">
<!--                <Rocket class="h-4 w-4 text-techblue"/>-->
                <AlertTitle>{{ $t('contactPage.successTitle') }}</AlertTitle>
                <AlertDescription>
                  {{ $t('contactPage.successMessage') }}
                </AlertDescription>
              </Alert>
            </div>

            <form :class="`mt-6 transition-opacity duration-500 ease-in-out ${success ? 'opacity-0' : ''}`"
                  @submit="submitForm">
              <div class="flex-1 lg:flex w-full lg:space-x-12">

                <!-- Right Column !-->
                <div class="flex-1 justify-center">
<!--                  <div class="flex-1">-->
<!--                    <label class="block mb-2 text-sm text-techblue">{{ $t('contactPage.labels.purpose') }} * </label>-->
<!--                    <RadioGroup v-model="purposeVal">-->
<!--                      <div v-for="purpose in contactPurposes" class="flex items-center space-x-2 text-techblue">-->
<!--                        <RadioGroupItem :id="purpose.id" :value="purpose.id" class=""/>-->
<!--                        <Label :for="purpose.id">{{ purpose.label }}</Label>-->
<!--                      </div>-->
<!--                    </RadioGroup>-->
<!--                  </div>-->

                  <div class="flex-1">
                    <label class="block mb-2 text-sm text-techblue">{{ $t('contactPage.labels.name') }} *</label>
                    <input type="text" v-model="nameVal"
                           class="block w-full px-3 py-1 mt-2 text-gray-700 focus:outline-2 focus:outline-offset-0 focus:outline-techblue bg-transparent border-techblue border  dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                  </div>

                  <div class="flex-1 mt-6">
                    <label class="block mb-2 text-sm text-techblue">{{ $t('contactPage.labels.email') }} *</label>
                    <input type="email" v-model="emailVal"
                           class="block w-full px-3 py-1 mt-2 focus:outline-2 focus:outline-offset-0 focus:outline-techblue text-gray-700 placeholder-gray-400 bg-transparent  border border-techblue dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                  </div>

                  <div class="flex-1 mt-6">
                    <label class="block mb-2 text-sm text-techblue">{{ $t('contactPage.labels.organization') }}</label>
                    <input type="text" v-model="organizationVal" placeholder=""
                           class="block w-full px-3 py-1 mt-2 focus:outline-2 focus:outline-offset-0 focus:outline-techblue text-gray-700 placeholder-gray-400 bg-transparent  border border-techblue dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                  </div>

                </div>

                <!-- Left Column -->
                <div class="flex-1 pt-6 lg:pt-0">
                  <div class="w-full">
                    <label class="block mb-2 text-sm text-techblue">{{ $t('contactPage.labels.message') }} *</label>
                    <textarea v-model="messageVal"
                              class="block w-full h-32 px-3 py-1 mt-2 text-gray-700 focus:outline-2 focus:outline-offset-0 focus:outline-techblue placeholder-gray-400 bg-transparent border border-techblue  md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                              placeholder="Message"></textarea>
                  </div>

<!--                  <div class="flex-1 mt-6">-->
<!--                    <label class="block mb-2 text-sm text-techblue">{{ $t('contactPage.labels.discovery') }}</label>-->
<!--                    <Select v-model="discoveryVal">-->
<!--                      <SelectTrigger class="rounded-none border-techblue">-->
<!--                        <SelectValue placeholder="Select" class="text-techblue"/>-->
<!--                      </SelectTrigger>-->
<!--                      <SelectContent class="rounded-none bg-[var(&#45;&#45;bg-color)]">-->
<!--                        <SelectGroup class="text-techblue rounded-none bg-[var(&#45;&#45;background-secondary)]">-->
<!--                          <SelectItem v-for="discovery in contactDiscovery" :value="discovery.id" class="hover:bg-[var(&#45;&#45;background)]">-->
<!--                            {{ discovery.label }}-->
<!--                          </SelectItem>-->
<!--                        </SelectGroup>-->
<!--                      </SelectContent>-->
<!--                    </Select>-->
<!--                  </div>-->

                  <div class="items-top flex space-x-2 mt-6">
                    <Checkbox id="subscribe" v-model:checked="subscribeVal"
                              class="data-[state=checked]:bg-[var(--background)] data-[state=checked]:text-techblue text-techblue rounded-none"/>
                    <label for="subscribe" class="text-sm font-medium leading-none text-techblue">
                      {{ $t('contactPage.labels.newsletterConsent') }}
                    </label>
                  </div>

<!--                  <div class="items-top flex space-x-2 mt-3">-->
<!--                    <Checkbox id="research-participant" v-model:checked="researchParticipantVal"-->
<!--                              class="data-[state=checked]:bg-[var(&#45;&#45;background)] data-[state=checked]:text-techblue text-techblue rounded-none"/>-->
<!--                    <label-->
<!--                        for="research-participant"-->
<!--                        class="text-sm font-medium leading-none text-techblue"-->
<!--                    >-->
<!--                      {{ $t('contactPage.labels.researchParticipation') }}-->
<!--                    </label>-->
<!--                  </div>-->

                  <div class="w-full flex justify-end" >
                    <LoadingSpinner v-if="loading"/>
                    <button type="submit" v-if="!loading"
                            class="w-full text-16 lg:text-26 mt-5 px-4 py-2 border-[1.75px] uppercase font-medium border-techblue bg-transparent text-techblue hover:bg-techblue hover:text-white transition-colors duration-300 focus:border-1">
                      {{ $t('contactPage.submitButton') }}
                    </button>
                  </div>

                </div>
              </div>
            </form>
          </div>

          <Alert variant="destructive"
                 class="font-source-code-pro sm:rounded-none opacity-0 animate-fade-in mt-6"
                 v-if="errorMessage">
            <AlertCircle class="w-4 h-4"/>
            <AlertTitle>{{ $t('contactPage.errorTitle') }}</AlertTitle>
            <AlertDescription>
              {{ errorMessage }}
            </AlertDescription>
          </Alert>

          <div class="w-full flex flex-col lg:flex-row py-[68px] space-y-4 lg:space-y-0">
            <div class="flex justify-center items-center flex-grow -mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="mx-2 text-gray-700 truncate dark:text-gray-400">{{ contactInfo.address }}</span>
            </div>

            <div class="flex justify-center  items-center flex-grow -mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a :href="`mailto:${contactInfo.email}`" class="mx-2 text-gray-700 truncate dark:text-gray-400">{{ contactInfo.email }}</a>
            </div>

            <div class="flex justify-center  items-center flex-grow -mx-2">
              <IdCardIcon class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"/>

              <div class="flex flex-col justify-center">
                <span class="mx-2 text-gray-700 truncate dark:text-gray-400"><span class="font-semibold">Legal Form:</span> Civic Association</span>
                <span class="mx-2 text-gray-700 truncate dark:text-gray-400"><span class="font-semibold">Tax number:</span> 57065314</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<style>
.grecaptcha-badge {
  display: none;
}
</style>