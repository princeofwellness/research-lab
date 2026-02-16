<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// SEO
useHead({
  title: 'THE MINDSHIFT - Stories',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Language
const { locale, setLocale } = useI18n()
const lang = computed<'en' | 'sk'>(() => locale.value === 'sk' ? 'sk' : 'en')

const toggleLang = () => {
  setLocale(lang.value === 'en' ? 'sk' : 'en')
}

const print = () => {
  if (typeof window !== 'undefined') {
    window.print()
  }
}

// Content
const content = {
  en: {
    slides: [
      // Slide 1: Title Card
      {
        type: 'title',
        label: "THE MINDSHIFT",
        title: "Everyone has AI tools.\nThinking makes the difference.",
        date: "BRATISLAVA · FEB 26 · from €99"
      },
      // Slides 2-6: Stats
      {
        type: 'stat',
        value: "39%",
        label: "of your current skills will change by 2030",
        source: "WEF 2025"
      },
      {
        type: 'stat',
        value: "75%",
        label: "of knowledge workers already use AI",
        source: "Microsoft 2024"
      },
      {
        type: 'stat',
        value: "88%",
        label: "of companies use AI in at least one function",
        source: "McKinsey 2025"
      },
      {
        type: 'stat',
        value: "9×",
        label: "surge in GenAI-skill job vacancies since 2022",
        source: "World Bank 2025"
      },
      {
        type: 'stat',
        value: "56%",
        label: "of companies see no return on AI investment yet",
        source: "PwC 2026"
      },
      // Slide 7: Session Title Card
      {
        type: 'session-title',
        title: "What separates the 1%.",
        subtitle: "3.5 hours · 3 founders · 1 evening"
      },
      // Slides 8-11: Session Parts
      {
        type: 'session-part',
        num: "01",
        title: "Taste",
        time: "50 min",
        desc: "What separates good from unforgettable. Everyone has the same tools. The difference is taste, curation, and the eye for detail.",
        lead: "Roland"
      },
      {
        type: 'session-part',
        num: "02",
        title: "Leverage",
        time: "50 min",
        desc: "What one person can build today. New businesses, new ways to operate. What to build, what to skip, and how to think about products in this new reality.",
        lead: "Ján"
      },
      {
        type: 'session-part',
        num: "03",
        title: "Clarity",
        time: "40 min",
        desc: "What stays human and what to delegate to AI. When to automate and when to consciously stop. Decision frameworks you'll actually use.",
        lead: "Roman"
      },
      {
        type: 'session-part',
        num: "04",
        title: "Q&A",
        time: "40 min",
        desc: "Your questions. Your reality. Open and honest answers from people who work with AI daily.",
        lead: "All"
      },
      // Slide 12: Founders Title Card
      {
        type: 'founders-title',
        title: "Three Perspectives",
        subtitle: "Art. Product. Transformation."
      },
      // Slides 13-15: Founder Cards
      {
        type: 'founder',
        name: "Roland Vraník",
        role: "The Creative",
        company: "Creative Director / Founder, SORRYWECAN",
        tagline: "Made decisions that came at a high price. Now sees what creative teams often miss.",
        image: "/founders/roland.jpg"
      },
      {
        type: 'founder',
        name: "Ján Koscelanský",
        role: "The Architect",
        company: "CPO / Co-founder, SUDOLABS",
        tagline: "Years of building products showed him exactly where teams lose months on what can now be done many times faster.",
        image: "/founders/jan.jpg"
      },
      {
        type: 'founder',
        name: "Roman Pii Wagner",
        role: "The Navigator",
        company: "Transformational Design",
        tagline: "Turns confusion into priorities and priorities into concrete decisions.",
        image: "/founders/roman.jpg"
      },
      // Slide 16: Outcome Title Card
      {
        type: 'outcome-title',
        title: "You Leave With"
      },
      // Slides 17-20: Outcome Cards
      {
        type: 'outcome',
        num: 1,
        title: "A Working System",
        desc: "Not tips. Not theory. A way of working with AI you'll actually use Monday morning."
      },
      {
        type: 'outcome',
        num: 2,
        title: "Less Noise, More Signal",
        desc: "Lower mental load. No more AI FOMO. You stop chasing tools and start choosing the right ones."
      },
      {
        type: 'outcome',
        num: 3,
        title: "Your Edge",
        desc: "Everyone has the same tools. You'll know what they don't. How to see, decide, and create differently."
      },
      {
        type: 'outcome',
        num: 4,
        title: "A New Lens",
        desc: "You won't leave with new tools. You'll leave with a different way of looking at what you already have."
      },
      // Slide 21: Details Card
      {
        type: 'details',
        items: [
          { label: "Where", value: "SORRYWECAN Studio", subvalue: "Pečnianska 7, Bratislava" },
          { label: "When", value: "February 26, 2026", subvalue: "Wednesday" },
          { label: "Time", value: "17:00 – 20:30", subvalue: "3.5 hours" },
          { label: "Price", value: "from €99", subvalue: "per person" }
        ]
      },
      // Slide 22: CTA Card
      {
        type: 'cta',
        title: "Your Move.",
        subline: "First session February 26.",
        button: "I'm In",
        link: "cal.com/researchlabsorrywecan/theshift"
      }
    ]
  },
  sk: {
    slides: [
      // Slide 1: Title Card
      {
        type: 'title',
        label: "THE MINDSHIFT",
        title: "AI nástroje má dnes každý.\nRozhoduje spôsob myslenia.",
        date: "BRATISLAVA · 26.2. · od 99 eur"
      },
      // Slides 2-6: Stats
      {
        type: 'stat',
        value: "39%",
        label: "vašich súčasných zručností sa zmení do 2030",
        source: "WEF 2025"
      },
      {
        type: 'stat',
        value: "75%",
        label: "knowledge workers už používa AI",
        source: "Microsoft 2024"
      },
      {
        type: 'stat',
        value: "88%",
        label: "firiem používa AI aspoň v jednej oblasti",
        source: "McKinsey 2025"
      },
      {
        type: 'stat',
        value: "9×",
        label: "nárast pracovných ponúk vyžadujúcich GenAI zručnosti od 2022",
        source: "World Bank 2025"
      },
      {
        type: 'stat',
        value: "56%",
        label: "firiem nevidí návratnosť investícií do AI",
        source: "PwC 2026"
      },
      // Slide 7: Session Title Card
      {
        type: 'session-title',
        title: "Čo odlišuje to 1%.",
        subtitle: "3.5 hodiny · 3 zakladatelia · 1 večer"
      },
      // Slides 8-11: Session Parts
      {
        type: 'session-part',
        num: "01",
        title: "Vkus",
        time: "50 min",
        desc: "Čo odlišuje dobré od nezabudnuteľného. Rovnaké nástroje má každý. Rozdiel robí vkus, kurátorstvo a oko pre detail.",
        lead: "Roland"
      },
      {
        type: 'session-part',
        num: "02",
        title: "Využitie",
        time: "50 min",
        desc: "Čo dokáže jeden človek vytvoriť dnes. Nové biznisy, nové spôsoby fungovania. Na čo sa sústrediť, čo tvoriť a ako premýšľať o produktoch v tomto svete.",
        lead: "Ján"
      },
      {
        type: 'session-part',
        num: "03",
        title: "Jasnosť",
        time: "40 min",
        desc: "Čo zostáva ľudské a čo delegovať na AI. Kedy automatizovať a kedy sa vedome zastaviť. Rozhodovacie rámce, ktoré viete reálne používať.",
        lead: "Roman"
      },
      {
        type: 'session-part',
        num: "04",
        title: "Q&A",
        time: "40 min",
        desc: "Vaše otázky. Vaša realita. Otvorené a úprimné odpovede od ľudí, ktorí s AI pracujú denne.",
        lead: "Všetci"
      },
      // Slide 12: Founders Title Card
      {
        type: 'founders-title',
        title: "Tri Perspektívy",
        subtitle: "Umenie. Produkt. Transformácia."
      },
      // Slides 13-15: Founder Cards
      {
        type: 'founder',
        name: "Roland Vraník",
        role: "Umelec",
        company: "Creative Director / Zakladateľ, SORRYWECAN",
        tagline: "Prešiel si rozhodnutiami, ktoré mali vysokú cenu. Dnes vidí to, čo kreatívnym tímom často uniká.",
        image: "/founders/roland.jpg"
      },
      {
        type: 'founder',
        name: "Ján Koscelanský",
        role: "Architekt",
        company: "CPO / Spoluzakladateľ, SUDOLABS",
        tagline: "Po rokoch v developmente presne vie, kde tímy trávia mesiace nad niečím, čo sa dnes dá zvládnuť mnohonásobne rýchlejšie.",
        image: "/founders/jan.jpg"
      },
      {
        type: 'founder',
        name: "Roman Pii Wagner",
        role: "Navigátor",
        company: "Transformačný dizajnér",
        tagline: "Mení zmätok na priority a priority na konkrétne rozhodnutia.",
        image: "/founders/roman.jpg"
      },
      // Slide 16: Outcome Title Card
      {
        type: 'outcome-title',
        title: "S Čím Odchádzate"
      },
      // Slides 17-20: Outcome Cards
      {
        type: 'outcome',
        num: 1,
        title: "Funkčný Systém",
        desc: "Nie tipy. Nie teória. Spôsob práce s AI, ktorý reálne použijete v pondelok ráno."
      },
      {
        type: 'outcome',
        num: 2,
        title: "Menej Šumu, Viac Signálu",
        desc: "Nižšia mentálna záťaž. Koniec AI FOMO. Prestanete naháňať nástroje a začnete vyberať tie správne."
      },
      {
        type: 'outcome',
        num: 3,
        title: "Vaša Výhoda",
        desc: "Rovnaké nástroje má každý. Vy budete vedieť, čo ostatní nie. Ako vidieť, rozhodovať a tvoriť inak."
      },
      {
        type: 'outcome',
        num: 4,
        title: "Nová Optika",
        desc: "Neodídete s novými nástrojmi. Odídete s iným pohľadom na to, čo už máte."
      },
      // Slide 21: Details Card
      {
        type: 'details',
        items: [
          { label: "Kde", value: "SORRYWECAN Studio", subvalue: "Pečnianska 7, Bratislava" },
          { label: "Kedy", value: "26. februára 2026", subvalue: "Streda" },
          { label: "Čas", value: "17:00 – 20:30", subvalue: "3.5 hodiny" },
          { label: "Cena", value: "od €99", subvalue: "na osobu" }
        ]
      },
      // Slide 22: CTA Card
      {
        type: 'cta',
        title: "Váš Ťah.",
        subline: "Prvá session 26. februára.",
        button: "Idem Do Toho",
        link: "cal.com/researchlabsorrywecan/theshift"
      }
    ]
  }
}

const t = computed(() => content[lang.value])
</script>

<template>
  <div class="min-h-screen bg-[#e5e5e5] font-proxima text-[#0a0a0a] py-10 print:p-0 print:bg-white">
    
    <!-- Controls -->
    <div class="fixed top-6 right-6 z-50 flex gap-4 print:hidden">
      <button 
        @click="print"
        class="hidden md:flex bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-techblue transition-colors"
      >
        Export PDF
      </button>
      <button 
        @click="toggleLang"
        class="bg-white text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-colors shadow-sm"
      >
        {{ lang === 'en' ? 'SK' : 'EN' }}
      </button>
    </div>

    <!-- Slides Container -->
    <div class="flex flex-col items-center gap-10 print:block print:gap-0">
      
      <div 
        v-for="(slide, i) in t.slides" 
        :key="i"
        class="slide-container relative bg-[#f4ede6] w-full max-w-[430px] aspect-[9/16] md:w-[430px] md:h-[764px] flex flex-col p-8 md:p-10 shadow-2xl print:shadow-none print:w-full print:h-screen print:max-w-none print:break-after-page print:page-break-after-always overflow-hidden"
      >
        
        <!-- Slide Content Wrapper -->
        <div class="flex-1 flex flex-col justify-center items-center text-center w-full h-full relative z-10">
          
          <!-- TYPE: TITLE -->
          <template v-if="slide.type === 'title'">
            <div class="mb-8">
              <span class="text-[11px] font-source-code-pro font-bold uppercase tracking-[0.3em] text-techblue">
                {{ slide.label }}
              </span>
            </div>
            <h1 class="text-[28px] font-bold leading-tight whitespace-pre-line">
              {{ slide.title }}
            </h1>
            <div class="mt-8">
              <span class="text-[10px] font-source-code-pro font-bold uppercase tracking-[0.2em] text-techblue">
                {{ slide.date }}
              </span>
            </div>
          </template>

          <!-- TYPE: STAT -->
          <template v-else-if="slide.type === 'stat'">
            <span class="text-[64px] font-bold text-techblue leading-none">
              {{ slide.value }}
            </span>
            <p class="text-[16px] text-black/60 mt-4 leading-snug max-w-[280px] mx-auto">
              {{ slide.label }}
            </p>
            <p class="text-[9px] font-source-code-pro font-bold uppercase tracking-widest text-black/30 mt-3">
              {{ slide.source }}
            </p>
          </template>

          <!-- TYPE: SESSION TITLE -->
          <template v-else-if="slide.type === 'session-title'">
            <h2 class="text-[32px] font-bold leading-tight">
              {{ slide.title }}
            </h2>
            <div class="mt-6 flex items-center justify-center gap-3">
              <div class="w-8 h-[1px] bg-black/20"></div>
              <span class="text-[10px] font-source-code-pro text-black/40 uppercase tracking-wider">
                {{ slide.subtitle }}
              </span>
              <div class="w-8 h-[1px] bg-black/20"></div>
            </div>
          </template>

          <!-- TYPE: SESSION PART -->
          <template v-else-if="slide.type === 'session-part'">
            <span class="text-[11px] font-source-code-pro font-bold text-techblue">
              {{ slide.num }}
            </span>
            <h3 class="text-[36px] font-bold mt-2 leading-tight">
              {{ slide.title }}
            </h3>
            <span class="text-[11px] font-source-code-pro text-black/40 mt-2">
              {{ slide.time }}
            </span>
            <p class="text-[15px] text-black/60 mt-6 leading-relaxed max-w-[300px] mx-auto">
              {{ slide.desc }}
            </p>
            <span class="text-[10px] font-source-code-pro font-bold uppercase tracking-widest text-techblue mt-6">
              {{ slide.lead }}
            </span>
          </template>

          <!-- TYPE: FOUNDERS TITLE -->
          <template v-else-if="slide.type === 'founders-title'">
            <h2 class="text-[32px] font-bold leading-tight">
              {{ slide.title }}
            </h2>
            <p class="text-[14px] text-black/50 mt-3">
              {{ slide.subtitle }}
            </p>
          </template>

          <!-- TYPE: FOUNDER -->
          <template v-else-if="slide.type === 'founder'">
            <div class="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-black/10 mb-4">
              <img :src="slide.image" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-[24px] font-bold leading-tight">
              {{ slide.name }}
            </h3>
            <p class="text-[10px] font-source-code-pro font-bold uppercase tracking-widest text-techblue mt-2">
              {{ slide.role }}
            </p>
            <p class="text-[11px] text-black/40 mt-1">
              {{ slide.company }}
            </p>
            <p class="text-[14px] text-black/70 italic mt-4 max-w-[280px] mx-auto leading-relaxed">
              "{{ slide.tagline }}"
            </p>
          </template>

          <!-- TYPE: OUTCOME TITLE -->
          <template v-else-if="slide.type === 'outcome-title'">
            <h2 class="text-[32px] font-bold leading-tight">
              {{ slide.title }}
            </h2>
          </template>

          <!-- TYPE: OUTCOME -->
          <template v-else-if="slide.type === 'outcome'">
            <div class="w-10 h-10 bg-techblue text-white flex items-center justify-center font-bold text-sm mx-auto mb-4 font-source-code-pro rounded-sm">
              {{ slide.num }}
            </div>
            <h3 class="text-[24px] font-bold mt-2 leading-tight">
              {{ slide.title }}
            </h3>
            <p class="text-[15px] text-black/60 mt-4 leading-relaxed max-w-[280px] mx-auto">
              {{ slide.desc }}
            </p>
          </template>

          <!-- TYPE: DETAILS -->
          <template v-else-if="slide.type === 'details'">
            <div class="space-y-6 w-full max-w-[280px] mx-auto">
              <div v-for="(item, idx) in slide.items" :key="idx" class="flex flex-col items-center">
                <span class="text-[9px] font-source-code-pro font-bold uppercase tracking-widest text-black/40">
                  {{ item.label }}
                </span>
                <span class="text-[18px] font-bold mt-1">
                  {{ item.value }}
                </span>
                <span class="text-[13px] text-black/50">
                  {{ item.subvalue }}
                </span>
              </div>
            </div>
          </template>

          <!-- TYPE: CTA -->
          <template v-else-if="slide.type === 'cta'">
            <h2 class="text-[36px] font-bold leading-tight">
              {{ slide.title }}
            </h2>
            <p class="text-[14px] text-black/50 mt-3">
              {{ slide.subline }}
            </p>
            <div class="bg-techblue px-6 py-3 mt-8 inline-block">
              <span class="text-white font-bold uppercase tracking-widest text-sm">
                {{ slide.button }}
              </span>
            </div>
            <p class="text-[9px] font-source-code-pro text-techblue mt-4 tracking-wider">
              {{ slide.link }}
            </p>
          </template>

        </div>

        <!-- Footer -->
        <div class="absolute bottom-8 left-0 w-full text-center">
          <span class="text-[8px] font-source-code-pro uppercase tracking-[0.3em] text-black/20">
            SORRYWECAN // RESEARCH LAB
          </span>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
@media print {
  @page {
    size: 108mm 192mm; /* 9:16 ratio roughly */
    margin: 0;
  }
  body {
    background: white;
  }
  .slide-container {
    box-shadow: none !important;
    border: none !important;
    page-break-after: always !important;
    break-after: page !important;
    height: 100vh !important;
    width: 100vw !important;
  }
}
</style>
