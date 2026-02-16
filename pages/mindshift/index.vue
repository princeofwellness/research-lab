<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ShiftBookButton from '~/components/shift/ShiftBookButton.vue'

useHead({
  title: 'THE MINDSHIFT - Research Lab',
})

const { locale } = useI18n()
const lang = computed<'en' | 'sk'>(() => locale.value === 'sk' ? 'sk' : 'en')

const content = {
  en: {
    hero: {
      label: "THE MINDSHIFT",
      title: {
        line1: "In 3 Hours, You'll See",
        line2: "What Took Us Years to Learn."
      },
      subline: "One evening. A new way to think, decide, and create with AI.",
      price: "99",
      duration: "3.5 hours",
      date: "February 26, 2026",
      location: "Bratislava, Slovakia",
      cta: "I'm In"
    },
    trust: {
      label: "Trusted by"
    },
    stats: {
      headline: "The world is shifting faster than you think.",
      items: [
        { value: "39%", label: "of your current skills will change by 2030", source: "WEF 2025" },
        { value: "75%", label: "of knowledge workers already use AI", source: "Microsoft 2024" },
        { value: "88%", label: "of companies use AI in at least one function", source: "McKinsey 2025" },
        { value: "9×", label: "surge in GenAI-skill job vacancies since 2022", source: "World Bank 2025" },
        { value: "56%", label: "of companies see no return on AI investment yet", source: "PwC 2026" }
      ]
    },
    session: {
      title: "What separates the 1%.",
      subtitle: "",
      parts: [
        {
          num: "01",
          title: "Taste",
          time: "50 min",
          desc: "What separates good from unforgettable. Everyone has the same tools. The difference is taste, curation, and the eye for detail.",
          lead: "Roland"
        },
        {
          num: "02",
          title: "Leverage",
          time: "50 min",
          desc: "What one person can build today. New businesses, new ways to operate. What to build, what to skip, and how to think about products in this new reality.",
          lead: "Ján"
        },
        {
          num: "03",
          title: "Clarity",
          time: "40 min",
          desc: "What stays human and what to delegate to AI. When to automate and when to consciously stop. Decision frameworks you'll actually use.",
          lead: "Roman"
        },
        {
          num: "04",
          title: "Q&A",
          time: "40 min",
          desc: "Your questions. Your reality. Open and honest answers from people who work with AI daily.",
          lead: "All"
        }
      ]
    },
    problem: {
      title: "Sound Familiar?",
      cards: [
        { headline: "Generation is easy now.", subline: "Recognizing quality is harder." },
        { headline: "Tools keep multiplying.", subline: "Habits can't keep up." },
        { headline: "Everything moves faster.", subline: "But what's actually worth creating?" },
        { headline: "AI gave everyone the same power.", subline: "So what's your edge now?" }
      ]
    },
    outcome: {
      title: "You Leave With",
      items: [
        { title: "A Working System", desc: "Not tips. Not theory. A way of working with AI you'll actually use Monday morning." },
        { title: "Less Noise, More Signal", desc: "Lower mental load. No more AI FOMO. You stop chasing tools and start choosing the right ones." },
        { title: "Your Edge", desc: "Everyone has the same tools. You'll know what they don't. How to see, decide, and create differently." },
        { title: "A New Lens", desc: "You won't leave with new tools. You'll leave with a different way of looking at what you already have." }
      ]
    },
    founders: {
      title: "Three Perspectives",
      subtitle: "Art. Product. Transformation.",
      trust: "From the creators of campaigns for Meta, Audi, Forbes, and Samsung.",
      cards: [
        {
          name: "Roland Vraník",
          role: "The Creative",
          company: "Creative Director / Founder, SORRYWECAN",
          tagline: "Made decisions that came at a high price. Now sees what creative teams often miss.",
          bio: "Creative director behind award-winning campaigns for Tatra banka, Meta, Audi, and Samsung. Decades connecting aesthetics with technology. Now builds with AI daily. Does in hours what used to take weeks.",
          url: "https://sorrywecan.com/",
          image: "/founders/roland.jpg"
        },
        {
          name: "Ján Koscelanský",
          role: "The Architect",
          company: "CPO / Co-founder, SUDOLABS",
          tagline: "Years of building products showed him exactly where teams lose months on what can now be done many times faster.",
          bio: "Co-founded SUDOLABS. Years shipping digital products across fintech, health, and enterprise. Sees the gap between what companies build and what they could build.",
          url: "https://sudolabs.com/",
          image: "/founders/jan.jpg"
        },
        {
          name: "Roman Pii Wagner",
          role: "The Navigator",
          company: "Transformational Design",
          tagline: "Turns confusion into priorities and priorities into concrete decisions.",
          bio: "Transformational designer. Helps organizations figure out what to focus on, what to let go of, and how to make decisions that hold under pressure.",
          url: "https://www.linkedin.com/in/romanpiiwagner/?originalSubdomain=sk",
          image: "/founders/roman.jpg"
        }
      ]
    },
    faq: {
      title: "Questions.",
      items: [
        { q: "Do I need technical skills?", a: "No. If you can use a browser, you can do this." },
        { q: "What should I bring?", a: "A laptop. That's it." },
        { q: "Why €99?", a: "We're creating a format that's truly accessible." },
        { q: "What makes this different?", a: "We don't just teach AI. We show how we actually work with it every day — and how you can too." },
        { q: "Can my employer cover this?", a: "Yes, we can prepare an invoice for your employer." },
        { q: "What language is the workshop in?", a: "The workshop is in Slovak. Materials are often in English as well." },
        { q: "What if I want more after?", a: "Want to bring your whole team or go deeper into the topic? Get in touch." }
      ],
      details: {
        title: "Details",
        items: [
          { label: "Where", value: "SORRYWECAN Studio", subvalue: "Pečnianska 7, Bratislava" },
          { label: "When", value: "February 26, 2026", subvalue: "Wednesday" },
          { label: "Time", value: "17:00 – 20:30", subvalue: "3.5 hours" },
          { label: "Price", value: "from €99", subvalue: "per person" }
        ]
      }
    },
    cta: {
      headline: "Your Move.",
      subline: "First session February 26.",
      button: "I'm In",
      note: "Want this for your team?",
      corporate: "Corporate Workshop"
    }
  },
  sk: {
    hero: {
      label: "THE MINDSHIFT",
      title: {
        line1: "Za 3 Hodiny Uvidíte To,",
        line2: "Čo Nám Trvalo Roky Pochopiť."
      },
      subline: "Jeden večer. Nový spôsob, ako myslieť, rozhodovať a tvoriť s AI.",
      price: "99",
      duration: "3.5 hodiny",
      date: "26. februára 2026",
      location: "Bratislava, Slovensko",
      cta: "Idem Do Toho"
    },
    trust: {
      label: "Dôverujú nám"
    },
    stats: {
      headline: "Svet sa mení rýchlejšie, než si myslíte.",
      items: [
        { value: "39%", label: "vašich súčasných zručností sa zmení do 2030", source: "WEF 2025" },
        { value: "75%", label: "knowledge workers už používa AI", source: "Microsoft 2024" },
        { value: "88%", label: "firiem používa AI aspoň v jednej oblasti", source: "McKinsey 2025" },
        { value: "9×", label: "nárast pracovných ponúk vyžadujúcich GenAI zručnosti od 2022", source: "World Bank 2025" },
        { value: "56%", label: "firiem nevidí návratnosť investícií do AI", source: "PwC 2026" }
      ]
    },
    session: {
      title: "Čo odlišuje to 1%.",
      subtitle: "",
      parts: [
        {
          num: "01",
          title: "Vkus",
          time: "50 min",
          desc: "Čo odlišuje dobré od nezabudnuteľného. Rovnaké nástroje má každý. Rozdiel robí vkus, kurátorstvo a oko pre detail.",
          lead: "Roland"
        },
        {
          num: "02",
          title: "Využitie",
          time: "50 min",
          desc: "Čo dokáže jeden človek vytvoriť dnes. Nové biznisy, nové spôsoby fungovania. Na čo sa sústrediť, čo tvoriť a ako premýšľať o produktoch v tomto svete.",
          lead: "Ján"
        },
        {
          num: "03",
          title: "Jasnosť",
          time: "40 min",
          desc: "Čo zostáva ľudské a čo delegovať na AI. Kedy automatizovať a kedy sa vedome zastaviť. Rozhodovacie rámce, ktoré viete reálne používať.",
          lead: "Roman"
        },
        {
          num: "04",
          title: "Q&A",
          time: "40 min",
          desc: "Vaše otázky. Vaša realita. Otvorené a úprimné odpovede od ľudí, ktorí s AI pracujú denne.",
          lead: "Všetci"
        }
      ]
    },
    problem: {
      title: "Poznáte To?",
      cards: [
        { headline: "Generovať je dnes jednoduché.", subline: "Rozlíšiť kvalitu je ťažšie." },
        { headline: "Nástroje pribúdajú.", subline: "Návyky nestíhajú." },
        { headline: "Všetko ide rýchlejšie.", subline: "Ale čo sa naozaj oplatí tvoriť?" },
        { headline: "AI dalo všetkým rovnaké možnosti.", subline: "Tak čo je teraz tvoja výhoda?" }
      ]
    },
    outcome: {
      title: "S Čím Odchádzate",
      items: [
        { title: "Funkčný Systém", desc: "Nie tipy. Nie teória. Spôsob práce s AI, ktorý reálne použijete v pondelok ráno." },
        { title: "Menej Šumu, Viac Signálu", desc: "Nižšia mentálna záťaž. Koniec AI FOMO. Prestanete naháňať nástroje a začnete vyberať tie správne." },
        { title: "Vaša Výhoda", desc: "Rovnaké nástroje má každý. Vy budete vedieť, čo ostatní nie. Ako vidieť, rozhodovať a tvoriť inak." },
        { title: "Nová Optika", desc: "Neodídete s novými nástrojmi. Odídete s iným pohľadom na to, čo už máte." }
      ]
    },
    founders: {
      title: "Tri Perspektívy",
      subtitle: "Umenie. Produkt. Transformácia.",
      trust: "Od tvorcov kampaní pre Meta, Audi, Forbes a Samsung.",
      cards: [
        {
          name: "Roland Vraník",
          role: "Umelec",
          company: "Creative Director / Zakladateľ, SORRYWECAN",
          tagline: "Prešiel si rozhodnutiami, ktoré mali vysokú cenu. Dnes vidí to, čo kreatívnym tímom často uniká.",
          bio: "Kreatívny riaditeľ za oceňovanými kampaňami pre Tatra banku, Meta, Audi a Samsung. Dekády na priesečníku estetiky a technológie. Dnes buduje s AI denne. Robí za hodiny, čo kedysi trvalo týždne.",
          url: "https://sorrywecan.com/",
          image: "/founders/roland.jpg"
        },
        {
          name: "Ján Koscelanský",
          role: "Architekt",
          company: "CPO / Spoluzakladateľ, SUDOLABS",
          tagline: "Po rokoch v developmente presne vie, kde tímy trávia mesiace nad niečím, čo sa dnes dá zvládnuť mnohonásobne rýchlejšie.",
          bio: "Spoluzakladateľ SUDOLABS. Roky dodávania digitálnych produktov naprieč fintechom, zdravotníctvom a enterprise. Vidí priepasť medzi tým, čo firmy stavajú a čo by stavať mohli.",
          url: "https://sudolabs.com/",
          image: "/founders/jan.jpg"
        },
        {
          name: "Roman Pii Wagner",
          role: "Navigátor",
          company: "Transformačný dizajnér",
          tagline: "Mení zmätok na priority a priority na konkrétne rozhodnutia.",
          bio: "Transformačný dizajnér. Pomáha organizáciám zistiť, na čo sa sústrediť, čo pustiť a ako robiť rozhodnutia, ktoré vydržia pod tlakom.",
          url: "https://www.linkedin.com/in/romanpiiwagner/?originalSubdomain=sk",
          image: "/founders/roman.jpg"
        }
      ]
    },
    faq: {
      title: "Otázky.",
      items: [
        { q: "Potrebujem technické zručnosti?", a: "Nie. Ak vieš používať prehliadač, zvládneš to." },
        { q: "Čo si mám priniesť?", a: "Stačí laptop." },
        { q: "Prečo €99?", a: "Vytvárame formát, ktorý je naozaj dostupný." },
        { q: "Čo je na tom iné?", a: "Neučíme len AI. Ukazujeme, ako s ňou reálne pracujeme každý deň a ako môžete vy." },
        { q: "Je možné dať kurz preplatiť?", a: "Áno, vieme pripraviť faktúru aj pre tvojho zamestnávateľa." },
        { q: "V akom jazyku prebieha workshop?", a: "Workshop prebieha v slovenčine, zaslané materiály sú často aj v angličtine." },
        { q: "Čo ak budem chcieť viac?", a: "Chceš prísť na workshop s celým tvojim tímom alebo sa do témy ponoriť viac? Ozvi sa nám." }
      ],
      details: {
        title: "Detaily",
        items: [
          { label: "Kde", value: "SORRYWECAN Studio", subvalue: "Pečnianska 7, Bratislava" },
          { label: "Kedy", value: "26. februára 2026", subvalue: "Streda" },
          { label: "Čas", value: "17:00 – 20:30", subvalue: "3.5 hodiny" },
          { label: "Cena", value: "od €99", subvalue: "na osobu" }
        ]
      }
    },
    cta: {
      headline: "Váš Ťah.",
      subline: "Prvá session 26. februára.",
      button: "Idem Do Toho",
      note: "Chceš toto pre svoj tím?",
      corporate: "Firemný Workshop"
    }
  }
}

const t = computed(() => content[lang.value])

const partners = [
  { name: "Meta", logo: "/logos/meta.png", size: "h-4 md:h-5" },
  { name: "Tatra Banka", logo: "/logos/tatrabanka.png", size: "h-10 md:h-12" },
  { name: "Raiffeisen", logo: "/logos/raiffeisen.png", size: "h-10 md:h-12" },
  { name: "VUB", logo: "/logos/vub.png", size: "h-7 md:h-8" },
  { name: "Sennheiser", logo: "/logos/sennheiser.png", size: "h-10 md:h-12" },
  { name: "Forbes", logo: "/logos/forbes.png", size: "h-4 md:h-5" },
  { name: "Audi", logo: "/logos/audi.svg", size: "h-4 md:h-5" }
]

const faqOpen = ref<number | null>(null)
const toggleFaq = (i: number) => {
  faqOpen.value = faqOpen.value === i ? null : i
}

const pageReady = ref(false)
onMounted(() => {
  requestAnimationFrame(() => { pageReady.value = true })
})

</script>

<template>
  <Header />
  <div class="min-h-screen bg-[var(--bg-color)] text-[#0a0a0a] selection:bg-[#0047BB]/20 font-proxima">

    <!-- Hero Section -->
    <section class="min-h-[90vh] flex flex-col justify-center px-[32px] md:px-12 pt-20 relative overflow-hidden">
      <div class="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
      <div class="max-w-5xl mx-auto w-full relative z-10">

        <div
          class="transition-all duration-1000 ease-out transform"
          :class="[pageReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
        >
          <div class="mb-6">
            <span class="text-[10px] font-bold tracking-[0.3em] uppercase text-techblue font-source-code-pro">
              {{ t.hero.label }}
            </span>
          </div>

          <h1 class="font-bold text-[10vw] md:text-[6.5vw] leading-[0.9] tracking-tighter mb-8">
            {{ t.hero.title.line1 }}<br />
            <span class="text-techblue">{{ t.hero.title.line2 }}</span>
          </h1>

          <p class="text-lg md:text-xl text-black/40 mt-4 transition-opacity duration-1000 delay-200" :class="[pageReady ? 'opacity-100' : 'opacity-0']">
            {{ t.hero.subline }}
          </p>

          <div class="mb-10"></div>

          <div class="space-y-8 transition-opacity duration-1000 delay-500" :class="[pageReady ? 'opacity-100' : 'opacity-0']">
            <div class="flex items-baseline gap-3">
              <span class="text-6xl md:text-7xl font-bold">{{ t.hero.price }}</span>
              <span class="text-2xl opacity-40">EUR</span>
              <span class="text-sm text-black/40 ml-2">/ {{ t.hero.duration }}</span>
            </div>

            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <ShiftBookButton variant="primary">
                {{ t.hero.cta }}
              </ShiftBookButton>
              <div class="flex items-center gap-4 font-bold uppercase tracking-widest font-source-code-pro">
                <span class="text-sm text-techblue">{{ t.hero.date }}</span>
                <span class="text-sm text-black/30">|</span>
                <span class="text-sm text-black/50">{{ t.hero.location }}</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <span class="text-[10px] font-source-code-pro font-bold uppercase tracking-widest text-black/30 shrink-0">
                {{ t.trust.label }}
              </span>
              <div class="flex items-center gap-6 md:gap-8 flex-wrap">
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
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-24 md:py-32 px-[32px] md:px-12 border-b border-black/10">
      <div class="max-w-6xl mx-auto scroll-reveal">
        <p
          class="text-center text-xl md:text-2xl font-bold text-black/70 mb-16 md:mb-20"
        >
          {{ t.stats.headline }}
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-12 md:gap-16">
          <div
            v-for="(stat, i) in t.stats.items"
            :key="i"
            class="text-center"
          >
            <span class="text-4xl md:text-5xl font-bold text-techblue">{{ stat.value }}</span>
            <p class="text-sm md:text-base text-black/60 mt-3 mb-1">{{ stat.label }}</p>
            <p class="text-[10px] font-source-code-pro font-bold uppercase tracking-widest text-black/30">{{ stat.source }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Founders Section -->
    <section class="py-20 md:py-28 px-[32px] md:px-12 border-b border-black/10">
      <div class="max-w-5xl mx-auto scroll-reveal">
        <div class="text-center mb-12">
          <h2 class="font-bold text-3xl md:text-4xl mb-2">{{ t.founders.title }}</h2>
          <p class="text-black/50">{{ t.founders.subtitle }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="(card, i) in t.founders.cards"
            :key="i"
            class="p-6 border border-black/10 text-center"
          >
            <div v-if="card.image" class="w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto border-2 border-white/20">
              <img :src="card.image" :alt="card.name" class="w-full h-full object-cover" />
            </div>
            <h4 class="text-xl font-bold">{{ card.name }}</h4>
            <p class="text-[10px] font-bold uppercase tracking-widest text-techblue mt-1 font-source-code-pro">{{ card.role }}</p>
            <p class="text-[10px] text-black/30 mb-4 font-source-code-pro">{{ card.company }}</p>
            <p class="text-sm text-black/60 mb-3 md:min-h-[8.5rem]">{{ card.bio }}</p>
            <a v-if="card.url" :href="card.url" target="_blank" rel="noopener noreferrer" class="inline-block text-[10px] font-source-code-pro font-bold uppercase tracking-widest text-techblue hover:underline mt-2 max-w-full truncate">
              {{ card.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') }}
            </a>
            <p class="text-sm text-black/80 italic border-t border-black/10 pt-3">"{{ card.tagline }}"</p>
          </div>
        </div>
        <p v-if="t.founders.trust" class="text-center text-[11px] font-source-code-pro text-black/40 mt-6">{{ t.founders.trust }}</p>
      </div>
    </section>

    <!-- Session Section -->
    <section class="py-20 md:py-28 px-[32px] md:px-12 border-b border-black/10">
      <div class="max-w-5xl mx-auto scroll-reveal">
        <div class="mb-12 text-center">
          <h2 class="font-bold text-3xl md:text-4xl">
            {{ t.session.title }}
          </h2>
          <p v-if="t.session.subtitle" class="text-lg text-techblue mt-2">{{ t.session.subtitle }}</p>
        </div>

        <div class="space-y-3">
          <div
            v-for="(part, i) in t.session.parts"
            :key="i"
            class="flex flex-col md:flex-row gap-4 p-5 md:p-6 border"
            :class="[
              i === 0 ? 'border-techblue/30 bg-black/[0.03]' : 'border-black/[0.06] hover:border-techblue/20'
            ]"
          >
            <div class="flex md:flex-col items-center md:items-start gap-3 md:gap-1 md:w-20 shrink-0">
              <span class="text-[10px] font-bold text-techblue font-source-code-pro">{{ part.num }}</span>
              <span class="text-[10px] text-black/30 font-source-code-pro">{{ part.time }}</span>
            </div>
            <div class="flex-1">
              <h4 class="text-lg font-bold mb-2">{{ part.title }}</h4>
              <p class="text-sm text-black/60 leading-relaxed md:min-h-[3.75rem]">{{ part.desc }}</p>
            </div>
            <div class="md:w-20 shrink-0 md:text-right">
              <span class="text-[10px] font-bold uppercase tracking-widest text-black/30 font-source-code-pro">{{ part.lead }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Outcome Section -->
    <section class="py-28 md:py-36 px-[32px] md:px-12 bg-black/[0.02] border-b border-black/10">
      <div class="max-w-6xl mx-auto scroll-reveal">
        <h2 class="font-bold text-3xl md:text-4xl text-center mb-16">
          {{ t.outcome.title }}
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          <div
            v-for="(item, i) in t.outcome.items"
            :key="i"
            class="p-6 md:p-8 border border-black/10"
          >
            <span class="w-8 h-8 bg-techblue text-white flex items-center justify-center font-bold text-sm mb-4 font-source-code-pro">{{ i + 1 }}</span>
            <h4 class="font-bold text-base mb-2">{{ item.title }}</h4>
            <p class="text-sm text-black/50">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Details Section (Where / When / Time / Price) -->
    <section class="py-16 md:py-20 px-[32px] md:px-12 border-b border-black/10">
      <div class="max-w-3xl mx-auto scroll-reveal">
        <h2 class="font-bold text-2xl md:text-3xl text-center mb-10">{{ t.faq.details.title }}</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 bg-black/[0.02] border border-black/[0.06]">
          <div v-for="(item, i) in t.faq.details.items" :key="i" class="text-center">
            <p class="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2 font-source-code-pro">{{ item.label }}</p>
            <p class="text-base font-medium">{{ item.value }}</p>
            <p class="text-sm text-black/50">{{ item.subvalue }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 md:py-28 px-[32px] md:px-12">
      <div class="max-w-3xl mx-auto scroll-reveal">
        <h2 class="font-bold text-3xl text-center mb-10">{{ t.faq.title }}</h2>
        <div class="space-y-2">
          <div v-for="(item, i) in t.faq.items" :key="i" class="border border-black/[0.06]">
            <button
              @click="toggleFaq(i)"
              class="w-full px-5 py-4 flex justify-between items-center text-left hover:bg-black/5 transition-colors"
            >
              <span class="font-medium text-sm pr-4">{{ item.q }}</span>
              <span class="text-techblue font-bold transition-transform duration-300" :class="{ 'rotate-45': faqOpen === i }">+</span>
            </button>
            <Transition name="accordion">
              <div v-if="faqOpen === i" class="overflow-hidden">
                <p class="px-5 pb-4 text-sm text-black/60">{{ item.a }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 md:py-32 bg-black text-white text-center">
      <div class="max-w-2xl mx-auto px-[32px]">
        <h2 class="font-bold text-5xl md:text-6xl mb-4">{{ t.cta.headline }}</h2>
        <p class="text-lg text-white/50 mb-4">{{ t.cta.subline }}</p>
        <ShiftBookButton variant="secondary">
          {{ t.cta.button }}
        </ShiftBookButton>
        <div class="mt-12 pt-10 border-t border-white/10">
          <p class="text-base text-white/50 mb-4">{{ t.cta.note }}</p>
          <NuxtLink
            to="/corporate"
            class="inline-flex items-center gap-3 font-bold border-2 border-techblue text-techblue px-8 py-4 hover:bg-techblue hover:text-white transition-all font-source-code-pro uppercase tracking-widest text-[11px]"
          >
            {{ t.cta.corporate }}
            <span class="text-lg">→</span>
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

.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  max-height: 200px;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

/* All sections visible immediately - no scroll animations */
</style>
