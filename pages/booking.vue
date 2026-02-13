<script lang="ts" setup>

import TextField from "~/components/TextField.vue";
import {Label} from "~/components/ui/label";
import {ogMetaDescription, ogMetaImage, recaptchaSiteKey} from "~/constants/constant";
import axios from "axios";
import {useMediaQuery} from "@vueuse/core";

useHead({
  title: 'BOOK THE RESEARCH LAB',
  meta: [
    {name: 'description', content: ogMetaDescription},
    {name: 'og:image', content: ogMetaImage},
    {name: "twitter:image", content: ogMetaImage},
  ]
})


const name = ref<string>('');
const email = ref<string>('');
const phone = ref<string>('');
const eventName = ref<string>('');
const eventDescription = ref<string>('');
const eventType = ref<string>('private');
const eventDate = ref<string>('');
const eventDurationHours = ref<string>('');
const eventDetails = ref<string>('');
const eventPeopleCount = ref<string>('');
const eventEquipment = ref<string>('');

const loading = ref(false);
const formSent = ref(false);
const errorMessage = ref<string>('');
const dateRangeShown = ref(false);
const isInterested = ref(false);


const eventDatePlaceholder = computed(() => {
  if (eventDate.value == '')
    return;
  ''

  const startDate = `${eventDate.value.start.day}.${eventDate.value.start.month}.${eventDate.value.start.year}`
  if (eventDate.value.start.day == eventDate.value.end.day && eventDate.value.start.month == eventDate.value.end.month && eventDate.value.start.year == eventDate.value.end.year) {
    return startDate;
  }
  return `${startDate} - ${eventDate.value.end.day}.${eventDate.value.end.month}.${eventDate.value.end.year} `
})


const handleSubmit = () => {
  loading.value = true;

  const rentalReqBody: Record<string, string> = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    eventName: eventName.value,
    eventDescription: eventDescription.value,
    eventType: eventType.value,
    eventDate: eventDatePlaceholder.value,
    eventDurationHours: eventDurationHours.value,
    eventDetails: eventDetails.value,
    eventPeopleCount: eventPeopleCount.value,
    eventEquipment: eventEquipment.value,
  };

  axios.post('/api/rental', rentalReqBody).then(response => {
    loading.value = false;
    if (response.data.success) {
      errorMessage.value = ''
      formSent.value = true;
    } else {
      errorMessage.value = response.data.error;
    }
  }).catch(error => {
    loading.value = false;
    errorMessage.value = "Error, try submitting again.";
  });
}


const handleDateInputClick = () => {
  dateRangeShown.value = true;
}


onMounted(() => {
  if (document == undefined)
    return;
  document.addEventListener('click', (e) => {
    let lastParent = e.target;
    const searchDepth = 10;
    let isDatePicker = false;
    for (let i = 0; i < searchDepth; i++) {
      if (lastParent && lastParent.id === 'datePicker') {
        isDatePicker = true;
        break;
      }
      if (!lastParent)
        break;
      lastParent = lastParent.parentElement;
    }

    if (!isDatePicker && e.target.id != "dateInput") {
      dateRangeShown.value = false;
    }
  })
})


const handleDatePlaceholderChange = (e) => {
  e.preventDefault()
}

const handleInterest = () => {
  isInterested.value = true;
}

const isMobile = useMediaQuery('(max-width: 768px)')

</script>

<template>
  <Header/>

  <div class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96 font-source-code-pro">
    <div class="w-full text-center leading-none pt-[111px] lg:pt-[160px]">
      <h1 class="text-42 lg:text-[132px] tracking-wide text-techblue font-bold ">
        BOOK THE RESEARCH LAB
      </h1>
    </div>

    <div class="grid lg:grid-cols-2 pt-[68px] lg:pt-[136px]">
      <div class="text-[16px] lg:text-[21px] lg:pr-24  ">
        <p>
          <ResearchLabText/> je kreatívny a technicky vybavený priestor navrhnutý pre ľudí a projekty, ktoré chcú tvoriť, prezentovať a inšpirovať.
        </p>
        <div class="pt-[32px]">
          <strong>Ponúka priestor&nbsp;pre:</strong>
          <ul class="list-disc list-inside pl-[21px]">
            <li><b>konferencie a prednášky</b>, ktoré menia perspektívu</li>
            <li><b>workshopy a školenia</b>, kde sa rodia nové zručnosti</li>
            <li><b>foto a video produkciu</b> s&nbsp;autentickým industriálnym charakterom</li>
            <li><b>prezentácie a produktový launch</b>, ktoré zanechajú dojem</li>
            <li><b>pracovné stretnutia</b> v&nbsp;atmosfére podporujúcej sústredenie aj&nbsp;kreativitu</li>
          </ul>
        </div>

        <p class="pt-[32px]">Súčasťou <ResearchLabText/>u je aj&nbsp;pohodlná zóna na&nbsp;občerstvenie so&nbsp;základným riadom a&nbsp;servírovacími potrebami. Technické vybavenie prispôsobíme podľa vašich potrieb – od&nbsp;projekčnej techniky až&nbsp;po&nbsp;špičkový zvuk.</p>
      </div>
      <div class="lg:border-l-[2px] border-techblue flex flex-col justify-center space-y-12 pt-[68px] lg:pt-0">
        <div class="flex flex-col items-center space-y-4">
          <p class="text-[21px] lg:text-26">Rozmery</p>
          <p class="text-26 lg:text-42 font-bold">100m2 | 7,7m x 13m</p>
        </div>

        <div class="flex flex-col items-center pt-[21px] lg:pt-[68px] space-y-4">
          <p class="text-[21px] lg:text-26">Kapacita</p>
          <p class="text-26 lg:text-42 font-bold leading-tight text-center">40 ľudí sedenie<br/> 50+ státie</p>
        </div>
      </div>
    </div>

  </div>

<!--  <BlueroomThree/>-->


  <div class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96 font-source-code-pro">
    <div class="pt-[68px] lg:pt-[136px] w-full flex justify-center">
      <img alt="BLUEROOM" src="/static/img/FINAL_BLUEROOM.webp"/>
    </div>

    <div class="pt-[68px] lg:pt-[136px] w-full flex flex-col lg:flex-row justify-center gap-[21px]">
      <div class="">
        <img alt="BLUEROOM1" src="/static/img/photo_2025-08-21_11-07-14.jpg"/>

      </div>
      <div class="">

        <img alt="BLUEROOM2" src="/static/img/photo_2025-08-21_11-07-20.jpg"/>
      </div>
    </div>
  </div>




  <div class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96 font-source-code-pro">

    <div class="w-full text-center leading-tight pt-[68px] lg:pt-[136px] pb-[136px]">
      <p class="text-[21px] lg:text-42 tracking-wide text-techblue font-bold uppercase">
        V prípade záujmu<br/>nám prosím povedzte viac:
      </p>

      <button v-if="!isInterested"
              @click="handleInterest"
              class="w-full lg:w-auto border-[1.75px] text-[21px] uppercase font-medium border-techblue lg:px-24 py-3 hover:bg-techblue hover:text-white transition-colors duration-300 focus:border-1 mt-[32px] lg:mt-[68px]">
        Mám záujem
      </button>

      <form v-if="isInterested" @submit.prevent="handleSubmit" class="opacity-0 animate-fade-in">
        <div v-if="!formSent">
          <div class="grid lg:grid-cols-2 gap-x-12 pt-[32px] lg:pt-[68px]">
            <TextField label="Meno" v-model="name" :required="true"/>
            <TextField label="Email" v-model="email" :required="true"/>
            <TextField label="Telefón" v-model="phone" :required="true"/>
            <TextField label="Názov podujatia" v-model="eventName" :required="true"/>
            <div class="flex-1 pt-[32px]">
              <div class="flex">
                <label class="mb-2 text-16 lg:text-[21px] font-medium text-techblue ">Typ podujatia</label>
              </div>
              <RadioGroup v-model="eventType" class="">
                <div class="flex items-center space-x-2 text-techblue">
                  <RadioGroupItem id="private" value="private"/>
                  <Label for="private" class="text-[16px]">Súkromné</Label>
                </div>
                <div class="flex items-center space-x-2 text-techblue">
                  <RadioGroupItem id="public" value="public"/>
                  <Label for="public" class="text-[16px]">Verejné</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <div class="flex flex-col mt-6">
                <div class="flex">
                  <span class="mb-2 text-16 lg:text-[21px] font-medium text-techblue ">Termín podujatia</span>
                </div>
                <input @click="handleDateInputClick" @change="handleDatePlaceholderChange" id="dateInput" required
                       placeholder="Vyberte termín" v-model="eventDatePlaceholder"
                       class="block w-full px-3 py-3 mt-2 focus:outline-2 focus:outline-offset-0 focus:outline-techblue text-techblue placeholder-gray-400 bg-transparent  border border-techblue dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
              </div>
              <div class="flex absolute" v-if="dateRangeShown" id="datePicker">
                <Card class="bg-[var(--background-secondary)]">
                  <RangeCalendar v-model="eventDate"/>

                </Card>
              </div>

            </div>

          </div>

          <!--          <div class="w-full pt-[32px]">-->
          <!--            <div class="flex">-->
          <!--              <label class="mb-2 text-16 lg:text-[21px] font-medium text-techblue ">Popis podujatia</label>-->
          <!--            </div>-->
          <!--            <textarea v-model="eventDescription"-->
          <!--                      required-->
          <!--                      spellcheck="false"-->
          <!--                      class="block w-full h-32 px-3 py-3 mt-2 text-techblue focus:outline-2 focus:outline-offset-0 focus:outline-techblue placeholder-gray-400 bg-transparent border border-techblue  md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"-->
          <!--                      placeholder=""></textarea>-->
          <!--          </div>-->


          <div class="grid lg:grid-cols-2 gap-x-12">
            <TextField label="Predpokladaný počet ľudí" v-model="eventPeopleCount" :required="true"/>
            <TextField label="Počet hodín prenájmu" v-model="eventDurationHours" :required="true"/>
          </div>


          <div class="grid lg:grid-cols-2 gap-x-12 pt-[32px]">
            <div class="">
              <div class="flex">
                <label class="mb-2 text-16 lg:text-[21px] font-medium text-techblue ">Viac o vašom podujatí
                  (zameranie podujatia)</label>
              </div>
              <textarea v-model="eventDetails"
                        spellcheck="false"
                        class="block w-full h-32 px-3 py-3 mt-2 text-techblue focus:outline-2 focus:outline-offset-0 focus:outline-techblue placeholder-gray-400 bg-transparent border border-techblue  md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder=""></textarea>
            </div>


            <div class="lg:pt-0 pt-[32px]">
              <div class="flex">
                <label class="mb-2 text-16 lg:text-[21px] font-medium text-techblue ">Technické zabezpečenie</label>
              </div>
              <textarea v-model="eventEquipment"
                        spellcheck="false"
                        class="block w-full h-32 px-3 py-3 mt-2 text-techblue focus:outline-2 focus:outline-offset-0 focus:outline-techblue placeholder-gray-400 bg-transparent border border-techblue  md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder=""></textarea>
            </div>
          </div>
        </div>

        <Alert variant="destructive"
               class="font-source-code-pro sm:rounded-none opacity-0 animate-fade-in mt-6"
               v-if="errorMessage">
          <AlertCircle class="w-4 h-4"/>
          <AlertDescription>
            {{ errorMessage }}
          </AlertDescription>
        </Alert>
        <Alert
            class="font-source-code-pro sm:rounded-none border-techblue text-techblue [&>svg]:text-techblue opacity-0 animate-fade-in mt-[136px]"
            v-if="formSent">
          <AlertDescription>
            Ďakujeme za Váš záujem, Vašu rezerváciu <ResearchLabText/>u sme úspešne prijali. Čoskoro Vás budeme kontaktovať.
            Tešíme sa na spoluprácu!
          </AlertDescription>
        </Alert>
        <div class="flex justify-end pt-[32px]">
          <button type="submit"
                  v-if="!formSent"
                  class="w-full lg:w-auto border-[1.75px] text-[21px] uppercase font-medium border-techblue lg:px-24 py-3 hover:bg-techblue hover:text-white transition-colors duration-300 focus:border-1">
            odoslať
          </button>
        </div>
      </form>
    </div>
  </div>
  <Footer/>

</template>
