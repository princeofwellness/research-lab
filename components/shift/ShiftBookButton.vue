<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'nav'
}>(), {
  variant: 'primary'
})

const isOpen = ref(false)
const isLoaded = ref(false)

const CAL_SHIFT_CONFIG = {
  username: "researchlabsorrywecan",
  eventSlug: "theshift",
  get bookingUrl() {
    return `https://cal.com/${this.username}/${this.eventSlug}`
  }
}

const loadCalScript = () => {
  if (isLoaded.value) return
  
  const script = document.createElement("script")
  script.src = "https://app.cal.com/embed/embed.js"
  script.async = true
  script.onload = () => {
    isLoaded.value = true
  }
  document.body.appendChild(script)
}

watch(isOpen, (val) => {
  if (val && !isLoaded.value) {
    loadCalScript()
  }
})

const baseStyles = "font-bold uppercase tracking-widest transition-all cursor-pointer inline-block text-center"

const variantStyles = {
  primary: "bg-[#0047BB] text-white px-10 py-5 text-[11px] tracking-[0.2em] hover:bg-black font-source-code-pro",
  secondary: "border-2 border-white text-white px-10 py-5 text-xs hover:bg-white hover:text-black",
  nav: "bg-black text-white px-6 py-2 text-[10px] hover:bg-[#0047BB]"
}

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}
</script>

<template>
  <button
    @click="openModal"
    :class="[baseStyles, variantStyles[variant]]"
  >
    <slot />
  </button>

  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        @click="closeModal"
      >
        <div
          class="relative w-full max-w-2xl h-[80vh] bg-white rounded-lg overflow-hidden"
          @click.stop
        >
          <button
            @click="closeModal"
            class="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/10 hover:bg-black/20 rounded-full transition-colors"
          >
            <span class="text-xl leading-none">&times;</span>
          </button>
          <iframe
            :src="`${CAL_SHIFT_CONFIG.bookingUrl}?embed=true&theme=light`"
            class="w-full h-full border-0"
            title="Book THE MINDSHIFT"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
