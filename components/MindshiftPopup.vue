<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(0,0,0,0.4)] opacity-0 animate-fade-in"
      @click="handleClickAway"
      id="mindshift-clickaway"
    >
      <div class="relative bg-[var(--bg-color)] border-techblue border-2 mx-5 max-w-[480px] w-full px-6 py-12 md:px-12 md:py-16">
        <!-- Close button -->
        <div class="absolute top-0 right-0 pr-4 pt-4 cursor-pointer" @click="dismiss">
          <Cross1Icon class="h-6 w-6 text-techblue" />
        </div>

        <div class="flex flex-col items-center text-center text-techblue">
          <!-- Label -->
          <span class="font-source-code-pro text-[10px] font-bold uppercase tracking-[0.3em]">
            {{ $t('mindshiftPopup.label') }}
          </span>

          <!-- Headline -->
          <h2 class="mt-4 text-[28px] md:text-[36px] font-bold uppercase leading-tight font-proxima">
            {{ $t('mindshiftPopup.headline') }}
          </h2>

          <!-- Subline -->
          <p class="mt-3 text-[14px] md:text-[16px] leading-relaxed font-proxima">
            {{ $t('mindshiftPopup.subline') }}
          </p>

          <!-- CTA -->
          <NuxtLink :to="localePath('/mindshift')" @click.native="dismiss">
            <button
              class="mt-8 border-techblue border-[1.75px] text-[16px] font-medium px-10 py-3 bg-techblue text-white hover:bg-transparent hover:text-techblue transition-colors duration-300 uppercase tracking-wider"
            >
              {{ $t('mindshiftPopup.cta') }}
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { Cross1Icon } from '@radix-icons/vue'

const localePath = useLocalePath()
const visible = ref(false)

const STORAGE_KEY = 'mindshift-popup-dismissed'

onMounted(() => {
  if (typeof window === 'undefined') return

  const dismissed = localStorage.getItem(STORAGE_KEY)
  if (dismissed) return

  // Show after 2.5s delay
  setTimeout(() => {
    visible.value = true
  }, 2500)
})

const dismiss = () => {
  visible.value = false
  localStorage.setItem(STORAGE_KEY, 'true')
}

const handleClickAway = (e: MouseEvent) => {
  if ((e.target as HTMLElement).id === 'mindshift-clickaway') {
    dismiss()
  }
}
</script>
