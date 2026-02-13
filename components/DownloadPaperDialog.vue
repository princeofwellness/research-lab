<script setup lang="ts">

// import {AlertCircle, Rocket} from "lucide-vue-next";
import axios from "axios";
import {validateEmail} from "~/lib/validation";

const emailText = ref('');
const error = ref<string | null>(null);
const paperSent = ref(false);


const handleSubmit = () => {
  if(!validateEmail(emailText.value)){
    error.value =  'Please enter valid email address.'
    return;
  }
  error.value = null;


  axios.post('/api/request-paper',{ email: emailText.value })
      .then(response => {
        if(response.data.success){
          paperSent.value = true;
        }
        console.log('res', response.data)
      })
      .catch(error => {});
}
</script>

<template>
    <h3 class="text-2xl font-bold mb-4 uppercase text-center pb-6">Fill out to get lightpaper</h3>

    <Alert variant="destructive" class="font-source-code-pro sm:rounded-none opacity-0 animate-fade-in" v-if="error">
<!--      <AlertCircle class="w-4 h-4"/>-->
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {{error}}
      </AlertDescription>
    </Alert>
    <Alert class="font-source-code-pro sm:rounded-none border-techblue text-techblue [&>svg]:text-techblue opacity-0 animate-fade-in" v-if="paperSent">
<!--      <Rocket class="h-4 w-4 text-techblue"/>-->
      <AlertTitle>Success! Your Lightpaper Is On Its Way</AlertTitle>
      <AlertDescription>
        Thank you for your interest! We've sent the download link for our lightpaper to your email address. <br/><br/>Please allow a few moments for delivery and check your spam folder if you don't see it right away.
      </AlertDescription>
    </Alert>

    <div class="flex flex-col gap-2 pb-6" v-if="!paperSent">
      <label for="inputField" class="font-source-code-pro text-lg font-light">Email*</label>
      <input
          v-model="emailText"
          type="email"
          id="email"
          name="email"
          class="w-full border-[1.5px] border-techblue py-2 px-3 bg-transparent focus:outline-none focus:ring-1 focus:ring-techblue"
      />
    </div>
    <div class="flex justify-center" >
      <button type="button"
              @click="handleSubmit"
              v-if="!paperSent"
              class="w-auto h-10 border-[1.75px] uppercase font-medium border-techblue px-4 py-2 hover:bg-techblue hover:text-white transition-colors duration-300 focus:border-1">
        Done
      </button>
    </div>
</template>

<style scoped>

</style>