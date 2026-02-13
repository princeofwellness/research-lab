<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useIntervalFn } from '@vueuse/core'

const props = withDefaults(defineProps<{
  slug?: string
  totalFallback?: number
  variant?: 'default' | 'compact' | 'hero'
  lang?: 'en' | 'sk'
}>(), {
  slug: 'the-shift-feb-26',
  totalFallback: 40,
  variant: 'default',
  lang: 'en'
})

interface SeatData {
  seatsLeft: number
  totalSeats: number
  soldSeats: number
  status: string
}

const data = ref<SeatData | null>(null)
const loading = ref(true)

const fetchSeats = async () => {
  try {
    const res = await fetch(`/api/seats?slug=${props.slug}`)
    if (res.ok) {
      const json = await res.json()
      data.value = json
    }
  } catch (e) {
    // silent fail
  } finally {
    loading.value = false
  }
}

// Fetch on mount and every 30s
onMounted(() => {
  fetchSeats()
})

const { pause, resume } = useIntervalFn(fetchSeats, 30000)

onUnmounted(() => {
  pause()
})

const seatsLeft = computed(() => data.value?.seatsLeft ?? props.totalFallback)
const total = computed(() => data.value?.totalSeats ?? props.totalFallback)
const fillPercent = computed(() => ((total.value - seatsLeft.value) / total.value) * 100)
const isLow = computed(() => seatsLeft.value <= 10)
const isCritical = computed(() => seatsLeft.value <= 5)
const isSoldOut = computed(() => seatsLeft.value <= 0)

const labels = {
  en: {
    seatsLeft: "seats left",
    soldOut: "Sold Out",
    lastSeats: "Last seats",
  },
  sk: {
    seatsLeft: "voľných miest",
    soldOut: "Vypredané",
    lastSeats: "Posledné miesta",
  },
}

const t = computed(() => labels[props.lang])

const statusColor = computed(() => {
  if (isSoldOut.value) return "bg-red-600"
  if (isCritical.value) return "bg-red-500 animate-pulse"
  if (isLow.value) return "bg-orange-500 animate-pulse"
  return "bg-emerald-500"
})

const textColor = computed(() => {
  if (isSoldOut.value) return "text-red-600"
  if (isCritical.value) return "text-red-600"
  if (isLow.value) return "text-orange-600"
  return "text-black/60"
})

const barColor = computed(() => {
  if (isSoldOut.value) return "bg-red-500"
  if (isCritical.value) return "bg-red-400"
  if (isLow.value) return "bg-orange-400"
  return "bg-[#0047BB]"
})

</script>

<template>
  <!-- Compact Variant -->
  <span v-if="variant === 'compact'" class="text-[10px] font-bold uppercase tracking-widest font-source-code-pro">
    <span v-if="loading" class="text-black/30">{{ totalFallback }} {{ t.seatsLeft }}</span>
    <span v-else-if="isSoldOut" class="text-red-600">{{ t.soldOut }}</span>
    <span v-else :class="[isCritical ? 'text-red-600' : isLow ? 'text-orange-600' : 'text-black/40']">
      {{ seatsLeft }} {{ t.seatsLeft }}
    </span>
  </span>

  <!-- Hero Variant -->
  <div v-else-if="variant === 'hero'" class="flex items-center gap-3">
    <div class="w-2 h-2 rounded-full" :class="statusColor"></div>
    <Transition name="fade" mode="out-in">
      <span 
        :key="seatsLeft"
        class="text-[11px] font-bold uppercase tracking-[0.15em] font-source-code-pro"
        :class="textColor"
      >
        {{ isSoldOut ? t.soldOut : `${seatsLeft} / ${total} ${t.seatsLeft}` }}
      </span>
    </Transition>
  </div>

  <!-- Default Variant -->
  <div v-else class="space-y-3">
    <div class="flex items-center justify-center gap-3">
      <div class="w-1.5 h-1.5 rounded-full" :class="statusColor"></div>
      <Transition name="scale" mode="out-in">
        <span 
          :key="seatsLeft"
          class="text-[11px] font-bold uppercase tracking-[0.2em] font-source-code-pro"
        >
          {{ isSoldOut ? t.soldOut : `${seatsLeft} / ${total} ${t.seatsLeft}` }}
        </span>
      </Transition>
    </div>
    <div class="h-[2px] bg-white/10 overflow-hidden rounded-full w-full">
      <div
        class="h-full rounded-full transition-all duration-1000 ease-out"
        :class="barColor"
        :style="{ width: `${fillPercent}%` }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.scale-enter-active,
.scale-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
