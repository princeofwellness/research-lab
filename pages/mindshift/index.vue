<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

useHead({
  title: 'MINDSHIFT - Research Lab',
})

const { locale } = useI18n()
const lang = computed<'en' | 'sk'>(() => locale.value === 'sk' ? 'sk' : 'en')

const content = {
  en: {
    hero: {
      title: {
        line1: "Everyone Has AI Tools.",
        line2: "Thinking Makes the Difference."
      },
      subline: "What changed. What's possible. What's next."
    },
    trust: {
      label: "Trusted by"
    },
    shift: {
      headline: "Technology is available to everyone. The difference is how you think, decide, and work.",
      stats: [
        { value: "22%", label: "of today's jobs will be disrupted by 2030", source: "WEF 2025" },
        { value: "59/100", label: "workers will need training by 2030", source: "WEF 2025" },
        { value: "1%", label: "of organizations consider themselves AI-mature", source: "McKinsey 2025" }
      ]
    },
    paths: {
      title: "Two Ways In.",
      individual: {
        label: "For Individuals",
        name: "THE SHIFT",
        line1: "40 people. 3 hours.",
        line2: "Three founders. Three lenses.",
        line3: "Leave with clarity.",
        cta: "I'm In"
      },
      team: {
        label: "For Teams",
        name: "Corporate Workshop",
        line1: "Your team. Your challenges.",
        line2: "Three perspectives on your reality.",
        line3: "Leave with direction.",
        cta: "Book Discovery Call"
      }
    },
    cta: {
      headline: "Your Move.",
      subline: "First session: February 26. Limited seats.",
      buttons: {
        public: "Join THE SHIFT",
        corporate: "Corporate Workshop"
      }
    }
  },
  sk: {
    hero: {
      title: {
        line1: "AI Nástroje Má Dnes Každý.",
        line2: "Rozhoduje Spôsob Myslenia."
      },
      subline: "Čo sa zmenilo. Čo je možné. Čo s tým."
    },
    trust: {
      label: "Dôverujú nám"
    },
    shift: {
      headline: "Technológia je dostupná všetkým. Rozdiel robí spôsob myslenia, rozhodovania a práce.",
      stats: [
        { value: "22%", label: "dnešných pracovných miest bude narušených do 2030", source: "WEF 2025" },
        { value: "59/100", label: "pracovníkov bude potrebovať školenie do 2030", source: "WEF 2025" },
        { value: "1%", label: "organizácií sa považuje za AI-zrelých", source: "McKinsey 2025" }
      ]
    },
    paths: {
      title: "Dva Spôsoby.",
      individual: {
        label: "Pre Jednotlivcov",
        name: "THE SHIFT",
        line1: "40 ľudí. 3 hodiny.",
        line2: "Traja zakladatelia. Tri pohľady.",
        line3: "Odíďte s jasnosťou.",
        cta: "Idem Do Toho"
      },
      team: {
        label: "Pre Tímy",
        name: "Firemný Workshop",
        line1: "Váš tím. Vaše výzvy.",
        line2: "Tri perspektívy na vašu realitu.",
        line3: "Odíďte so smerom.",
        cta: "Rezervovať Discovery Call"
      }
    },
    cta: {
      headline: "Váš Ťah.",
      subline: "Prvá session: 26. február. Limitované miesta.",
      buttons: {
        public: "Pridať sa na THE SHIFT",
        corporate: "Firemný Workshop"
      }
    }
  }
}

const t = computed(() => content[lang.value])

const partners = [
  { name: "Meta", logo: "/logos/meta.png", size: "h-6 md:h-7" },
  { name: "Tatra Banka", logo: "/logos/tatrabanka.png", size: "h-8 md:h-9" },
  { name: "Raiffeisen", logo: "/logos/raiffeisen.png", size: "h-8 md:h-9" },
  { name: "VUB", logo: "/logos/vub.png", size: "h-6 md:h-7" },
  { name: "Sennheiser", logo: "/logos/sennheiser.png", size: "h-8 md:h-9" },
  { name: "Forbes", logo: "/logos/forbes.png", size: "h-6 md:h-7" },
  { name: "Audi", logo: "/logos/audi.svg", size: "h-6 md:h-7" }
]

const pageReady = ref(false)
onMounted(() => {
  requestAnimationFrame(() => { pageReady.value = true })
})
</script>

<template>
  <Header />
  <div class="min-h-screen bg-[var(--bg-color)] text-[#0a0a0a] selection:bg-techblue/20 font-proxima">

    <!-- Hero Section -->
    <section class="min-h-[100vh] flex flex-col justify-between px-[32px] md:px-12 pt-[136px] pb-12 relative overflow-hidden">
      <div class="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
      <div class="max-w-5xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-start pt-[8vh] md:pt-[12vh]">
        <h1
          class="font-bold text-[10vw] md:text-[6.5vw] leading-[0.9] tracking-tighter transition-all duration-1000 ease-out"
          :class="[pageReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
        >
          {{ t.hero.title.line1 }}<br />
          <span class="text-techblue">{{ t.hero.title.line2 }}</span>
        </h1>

        <p
          class="mt-10 text-xl md:text-2xl leading-relaxed text-black/60 transition-all duration-1000 delay-200 ease-out"
          :class="[pageReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']"
        >
          {{ t.hero.subline }}
        </p>
      </div>

      <!-- Trusted by -->
      <div class="max-w-5xl mx-auto w-full relative z-10">
        <div
          class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 transition-opacity duration-1000 delay-300"
          :class="[pageReady ? 'opacity-100' : 'opacity-0']"
        >
          <span class="text-[10px] font-source-code-pro font-bold uppercase tracking-widest text-black/30 shrink-0">
            {{ t.trust.label }}
          </span>
          <div class="flex items-center gap-10 md:gap-12 flex-wrap">
            <img
              v-for="partner in partners"
              :key="partner.name"
              :src="partner.logo"
              :alt="partner.name"
              :class="[partner.size, 'w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain max-w-[120px]']"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 md:py-20 px-[32px] md:px-12 border-t border-black/10">
      <div class="max-w-5xl mx-auto">
        <p class="text-center text-xl md:text-2xl font-bold text-black/70 mb-12">
          {{ t.shift.headline }}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">
          <div
            v-for="(stat, i) in t.shift.stats"
            :key="i"
            class="text-center"
          >
            <span class="text-4xl md:text-5xl font-bold text-techblue">{{ stat.value }}</span>
            <p class="text-sm text-black/60 mt-2 mb-1">{{ stat.label }}</p>
            <p class="text-[10px] font-source-code-pro font-bold uppercase tracking-widest text-black/30">{{ stat.source }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Two Ways In -->
    <section class="py-24 md:py-32 px-[32px] md:px-12">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-bold text-4xl md:text-5xl text-center mb-16">
          {{ t.paths.title }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <!-- Individual / Public -->
          <NuxtLink
            to="/mindshift/public"
            class="block h-full p-8 md:p-12 border border-black/[0.06] bg-black/[0.03] hover:border-techblue/30 transition-all group"
          >
            <span class="text-[10px] font-source-code-pro font-bold uppercase tracking-[0.3em] text-techblue">
              {{ t.paths.individual.label }}
            </span>
            <h3 class="font-bold text-4xl md:text-5xl mt-4 mb-8 group-hover:text-techblue transition-colors">
              {{ t.paths.individual.name }}
            </h3>
            <div class="space-y-1 text-black/60 mb-8">
              <p>{{ t.paths.individual.line1 }}</p>
              <p>{{ t.paths.individual.line2 }}</p>
              <p class="font-medium text-black">{{ t.paths.individual.line3 }}</p>
            </div>
            <span class="inline-flex items-center gap-2 text-[11px] font-source-code-pro font-bold uppercase tracking-[0.2em] text-techblue group-hover:gap-4 transition-all">
              {{ t.paths.individual.cta }}
              <span class="text-lg">→</span>
            </span>
          </NuxtLink>

          <!-- Team / Corporate -->
          <NuxtLink
            to="/corporate"
            class="block h-full p-8 md:p-12 border border-black/[0.06] bg-black/[0.03] hover:border-techblue/30 transition-all group"
          >
            <span class="text-[10px] font-source-code-pro font-bold uppercase tracking-[0.3em] text-techblue">
              {{ t.paths.team.label }}
            </span>
            <h3 class="font-bold text-4xl md:text-5xl mt-4 mb-8 group-hover:text-techblue transition-colors">
              {{ t.paths.team.name }}
            </h3>
            <div class="space-y-1 text-black/60 mb-8">
              <p>{{ t.paths.team.line1 }}</p>
              <p>{{ t.paths.team.line2 }}</p>
              <p class="font-medium text-black">{{ t.paths.team.line3 }}</p>
            </div>
            <span class="inline-flex items-center gap-2 text-[11px] font-source-code-pro font-bold uppercase tracking-[0.2em] text-techblue group-hover:gap-4 transition-all">
              {{ t.paths.team.cta }}
              <span class="text-lg">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Footer -->
    <section class="py-24 md:py-32 bg-black text-white text-center">
      <div class="max-w-2xl mx-auto px-[32px]">
        <h2 class="font-bold text-5xl md:text-6xl mb-4">
          {{ t.cta.headline }}
        </h2>
        <p class="text-lg text-white/50 mb-10">
          {{ t.cta.subline }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/mindshift/public"
            class="bg-techblue text-white px-10 py-5 font-source-code-pro font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
          >
            {{ t.cta.buttons.public }}
          </NuxtLink>
          <NuxtLink
            to="/corporate"
            class="border-2 border-white text-white px-10 py-5 font-source-code-pro font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
          >
            {{ t.cta.buttons.corporate }}
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
  <Footer />
</template>

<style scoped>
.blueprint-grid {
  background-size: 40px 40px;
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
}
</style>
