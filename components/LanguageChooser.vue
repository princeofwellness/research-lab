<script setup lang="ts">
const { locale, setLocale } = useI18n()
const router = useRouter()

const switchLang = async (lang: string) => {
  const scrollY = window.scrollY

  const removeHook = router.afterEach(() => {
    removeHook()
    setTimeout(() => window.scrollTo(0, scrollY), 0)
    requestAnimationFrame(() => window.scrollTo(0, scrollY))
  })

  await setLocale(lang)
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

