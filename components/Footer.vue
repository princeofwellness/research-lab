<script setup lang="ts">
const socials: {link: string, label: string}[] = [
  {link: "https://www.instagram.com/sorrywecan/", label: "Instagram"},
  {link: "https://www.linkedin.com/company/sorrywecan", label: "LinkedIn"},
  {link: "https://vimeo.com/sorrywecan", label: "Vimeo"},
  {link: "https://www.youtube.com/@sorrywecan", label: "Youtube"}
]
</script>

<template>
<!--  <div class="w-full flex justify-center">-->
<!--    <img class="w-[50vw]" src="/static/vaia-logo.png" alt="UV a VAIA"/>-->
<!--  </div>-->
  <!--  -->

  <footer class="relative w-full px-[32px] py-6 text-techblue text-12 hidden lg:block">

    <!-- Left footer links -->
    <div class="absolute flex space-x-12">
      <a v-for="social in socials" :href="social.link" class="hover:underline uppercase" target="_blank">{{ social.label }}</a>
    </div>
    <!-- Right footer link -->
    <div class="absolute right-0 space-x-12 pr-12">
      <a href="https://www.sorrywecan.com/privacy-policy" class="hover:underline">LEGAL</a>
    </div>

    <!-- Center label -->
    <div class="text-center">
      SORRYWECAN © 2025
    </div>
  </footer>

  <footer class="lg:hidden w-full flex flex-col justify-center content-center items-center space-y-2 relative px-4 py-6 text-12 text-techblue ">
    <a v-for="social in socials" :href="social.link" class="hover:underline uppercase" target="_blank">{{ social.label }}</a>
    <a href="https://www.sorrywecan.com/privacy-policy" class="hover:underline">LEGAL</a>
    <span class="pt-4">SORRYWECAN © 2025</span>
  </footer>
</template>

<style scoped>

</style>