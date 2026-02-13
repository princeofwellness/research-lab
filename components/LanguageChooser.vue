<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>

<template>
  <div class="flex items-center gap-2 text-[11px] xl:text-[14px] tracking-widest uppercase">
    <a
      :class="[locale === 'en' ? 'font-bold' : 'font-medium opacity-50 hover:opacity-100']"
      href="javascript:void(0)"
      @click="setLocale('en')"
    >EN</a>
    <span class="text-black/20">|</span>
    <a
      :class="[locale === 'sk' ? 'font-bold' : 'font-medium opacity-50 hover:opacity-100']"
      href="javascript:void(0)"
      @click="setLocale('sk')"
    >SK</a>
  </div>
</template>

