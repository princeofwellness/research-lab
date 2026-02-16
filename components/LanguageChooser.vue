<script setup lang="ts">
const { locale, setLocale } = useI18n()

const switchLang = async (lang: string) => {
  const scrollY = window.scrollY
  await setLocale(lang)
  await nextTick()
  window.scrollTo(0, scrollY)
  requestAnimationFrame(() => window.scrollTo(0, scrollY))
}
</script>

<template>
  <div class="flex items-center gap-2 text-[11px] xl:text-[14px] tracking-widest uppercase">
    <a
      :class="[locale === 'en' ? 'font-bold' : 'font-medium opacity-50 hover:opacity-100']"
      href="javascript:void(0)"
      @click="switchLang('en')"
    >EN</a>
    <span class="text-black/20">|</span>
    <a
      :class="[locale === 'sk' ? 'font-bold' : 'font-medium opacity-50 hover:opacity-100']"
      href="javascript:void(0)"
      @click="switchLang('sk')"
    >SK</a>
  </div>
</template>

