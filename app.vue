<script setup lang="ts">
import {useMediaQuery} from "@vueuse/core";

const isMobile = useMediaQuery('(max-width: 768px)')

</script>

<template>
  <NuxtLoadingIndicator color="#0047BB" />

  <NuxtLayout>
    <NuxtPage/>
    <MindshiftPopup />
<!--    <NewsletterPopup v-if="!isMobile"/>-->
<!--    <TeaHousePopup />-->
  </NuxtLayout>
</template>
