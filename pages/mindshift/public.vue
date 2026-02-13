<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import SeatCounter from '~/components/shift/SeatCounter.vue'
import ShiftBookButton from '~/components/shift/ShiftBookButton.vue'

useHead({
  title: 'THE SHIFT - Research Lab',
})

// Language handling
const { locale } = useI18n()
const lang = computed<'en' | 'sk'>(() => locale.value === 'sk' ? 'sk' : 'en')

// Content
const content = {
  en: {
    hero: {
      label: "THE SHIFT",
      title: {
        line1: "In 3 Hours, You'll See",
        line2: "What Took Us Years to Learn."
      },
      subline: "One evening. A new way to think, decide, and create with AI.",
      price: "99",
      duration: "3.5 hours",
      date: "February 26, 2026",
      spots: "40 seats",
      cta: "I'm In"
    },
    stats: {
      headline: "The world is shifting faster than you think.",
      items: [
        { value: "39%", label: "of your current skills will change by 2030", source: "WEF 2025" },
        { value: "75%", label: "of knowledge workers already use AI", source: "Microsoft 2024" },
        { value: "78%", label: "of companies use AI in at least one function", source: "McKinsey 2025" },
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
        { title: "The Community", desc: "Access to the people who showed up. Monthly toolkit updates. A place to stay connected and keep growing." }
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
          tagline: "Made mistakes that cost more than money. Sees what most creative teams miss.",
          bio: "Creative director behind award-winning campaigns for Forbes, Meta, Audi, and Samsung. Decades connecting aesthetics with technology. Now builds with AI daily. Does in hours what used to take weeks.",
          url: "https://sorrywecan.com/",
          image: "/founders/roland.jpg"
        },
        { 
          name: "Ján Koscelanský", 
          role: "The Architect", 
          company: "CPO / Co-founder, SUDOLABS", 
          tagline: "Knows exactly where teams waste months building what one person could ship in a week.",
          bio: "Co-founded SUDOLABS. Years shipping digital products across fintech, health, and enterprise. Sees the gap between what companies build and what they could build.",
          url: "https://sudolabs.com/",
          image: ""
        },
        { 
          name: "Roman Pii Wagner", 
          role: "The Navigator", 
          company: "Transformational Design", 
          tagline: "Turns confusion into priorities. Turns priorities into Monday decisions.",
          bio: "Transformational designer. Helps organizations figure out what to focus on, what to let go of, and how to make decisions that hold under pressure.",
          url: "",
          image: "/founders/roman.jpg"
        }
      ]
    },
    faq: {
      title: "Questions.",
      items: [
        { q: "Do I need technical skills?", a: "No. If you can use a browser, you can do this." },
        { q: "What should I bring?", a: "Laptop. Internet. That's it." },
        { q: "Why €99?", a: "We want this accessible. Best marketing is people telling friends." },
        { q: "What makes this different?", a: "We're not teaching from slides. We build with AI daily. Real work, not theory." },
        { q: "Can I expense this?", a: "Yes. Proper invoices. Most companies approve €99 without questions." },
        { q: "What language?", a: "Slovak primarily. English materials. We adapt." },
        { q: "What if I want more after?", a: "Good. Corporate workshops for teams. Or join again." }
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
      headline: "I'm In.",
      subline: "40 seats. First session February 26.",
      button: "I'm In",
      note: "Want this for your team?",
      corporate: "Corporate Workshop"
    }
  },
  sk: {
    hero: {
      label: "THE SHIFT",
      title: {
        line1: "Za 3 Hodiny Uvidíte To,",
        line2: "Čo Nám Trvalo Roky Pochopiť."
      },
      subline: "Jeden večer. Nový spôsob, ako myslieť, rozhodovať a tvoriť s AI.",
      price: "99",
      duration: "3.5 hodiny",
      date: "26. februára 2026",
      spots: "40 miest",
      cta: "Idem Do Toho"
    },
    stats: {
      headline: "Svet sa mení rýchlejšie, než si myslíte.",
      items: [
        { value: "39%", label: "vašich súčasných zručností sa zmení do 2030", source: "WEF 2025" },
        { value: "75%", label: "knowledge workers už používa AI", source: "Microsoft 2024" },
        { value: "78%", label: "firiem používa AI aspoň v jednej oblasti", source: "McKinsey 2025" },
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
        { title: "Komunita", desc: "Prístup ku ľuďom, ktorí prišli. Mesačné toolkit updaty. Miesto, kde zostanete prepojení a rastete ďalej." }
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
          tagline: "Urobil chyby, ktoré stáli viac než peniaze. Vidí, čo väčšine kreatívnych tímov uniká.",
          bio: "Kreatívny riaditeľ za oceňovanými kampaňami pre Forbes, Meta, Audi a Samsung. Dekády na priesečníku estetiky a technológie. Dnes buduje s AI denne. Robí za hodiny, čo kedysi trvalo týždne.",
          url: "https://sorrywecan.com/",
          image: "/founders/roland.jpg"
        },
        { 
          name: "Ján Koscelanský", 
          role: "Architekt", 
          company: "CPO / Spoluzakladateľ, SUDOLABS", 
          tagline: "Presne vie, kde tímy strácajú mesiace nad niečím, čo jeden človek dodá za týždeň.",
          bio: "Spoluzakladateľ SUDOLABS. Roky dodávania digitálnych produktov naprieč fintechom, zdravotníctvom a enterprise. Vidí priepasť medzi tým, čo firmy stavajú a čo by stavať mohli.",
          url: "https://sudolabs.com/",
          image: ""
        },
        { 
          name: "Roman Pii Wagner", 
          role: "Navigátor", 
          company: "Transformational Design", 
          tagline: "Mení zmätok na priority. Mení priority na pondelkové rozhodnutia.",
          bio: "Transformačný dizajnér. Pomáha organizáciám zistiť, na čo sa sústrediť, čo pustiť a ako robiť rozhodnutia, ktoré vydržia pod tlakom.",
          url: "",
          image: "/founders/roman.jpg"
        }
      ]
    },
    faq: {
      title: "Otázky.",
      items: [
        { q: "Potrebujem technické zručnosti?", a: "Nie. Ak vieš používať prehliadač, zvládneš to." },
        { q: "Čo si mám priniesť?", a: "Laptop. Internet. To je všetko." },
        { q: "Prečo €99?", a: "Chceme, aby to bolo dostupné. Najlepší marketing je, keď ľudia povedia kamarátom." },
        { q: "Čo je na tom iné?", a: "Neučíme zo slajdov. S AI pracujeme denne. Reálna práca, nie teória." },
        { q: "Môžem si to preplatiť?", a: "Áno. Riadne faktúry. Väčšina firiem schváli €99 bez otázok." },
        { q: "V akom jazyku?", a: "Primárne slovensky. Anglické materiály. Prispôsobíme sa." },
        { q: "Čo ak budem chcieť viac?", a: "Dobre. Firemné workshopy pre tímy. Alebo príď znova." }
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
      headline: "Idem Do Toho.",
      subline: "40 miest. Prvá session 26. februára.",
      button: "Idem Do Toho",
      note: "Chceš toto pre svoj tím?",
      corporate: "Firemný Workshop"
    }
  }
}

const t = computed(() => content[lang.value])

// FAQ State
const faqOpen = ref<number | null>(null)
const toggleFaq = (i: number) => {
  faqOpen.value = faqOpen.value === i ? null : i
}

// Page loaded flag for entrance animation
const pageReady = ref(false)
onMounted(() => {
  requestAnimationFrame(() => { pageReady.value = true })
})

</script>

<template>
  <Header />
  <div class="min-h-screen bg-[var(--bg-color)] text-[#0a0a0a] selection:bg-[#0047BB]/20 font-proxima">
    
    <!-- Hero Section -->
    <section class="min-h-[90vh] flex flex-col justify-center px-[32px] md:px-12 pt-[136px] relative overflow-hidden">
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
              <div class="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest font-source-code-pro">
                <span class="text-techblue">{{ t.hero.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 md:py-20 px-[32px] md:px-12 border-b border-black/10">
      <div class="max-w-5xl mx-auto scroll-reveal">
        <p 
          class="text-center text-xl md:text-2xl font-bold text-black/70 mb-12"
        >
          {{ t.stats.headline }}
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-8 md:gap-12">
          <div 
            v-for="(stat, i) in t.stats.items" 
            :key="i"
            class="text-center"
          >
            <span class="text-3xl md:text-4xl font-bold text-techblue">{{ stat.value }}</span>
            <p class="text-sm text-black/60 mt-2 mb-1">{{ stat.label }}</p>
            <p class="text-[10px] font-source-code-pro font-bold uppercase tracking-widest text-black/30">{{ stat.source }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section class="py-16 md:py-20 px-[32px] md:px-12 border-b border-black/10">
      <div class="max-w-4xl mx-auto scroll-reveal">
        <h2 
          class="font-bold text-2xl md:text-3xl text-center mb-10"
        >
          {{ t.problem.title }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="(card, i) in t.problem.cards" 
            :key="i"
            class="p-6 border border-black/[0.06] bg-black/[0.03]"
          >
            <p class="text-lg md:text-xl font-medium text-black">{{ card.headline }}</p>
            <p class="text-lg md:text-xl text-black/40">{{ card.subline }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Session Section -->
    <section class="py-20 md:py-28 px-[32px] md:px-12 border-b border-black/10">
      <div class="max-w-5xl mx-auto scroll-reveal">
        <div class="mb-12 text-center">
          <h2 class="font-bold text-3xl md:text-4xl">
            {{ t.session.title }}
          </h2>
          <p class="text-lg text-techblue mt-2">{{ t.session.subtitle }}</p>
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
              <p class="text-sm text-black/60 leading-relaxed">{{ part.desc }}</p>
            </div>
            <div class="md:w-20 shrink-0 md:text-right">
              <span class="text-[10px] font-bold uppercase tracking-widest text-black/30 font-source-code-pro">{{ part.lead }}</span>
            </div>
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
            <p class="text-sm text-black/60 mb-3">{{ card.bio }}</p>
            <a v-if="card.url" :href="card.url" target="_blank" rel="noopener noreferrer" class="inline-block text-[10px] font-source-code-pro font-bold uppercase tracking-widest text-techblue hover:underline mt-2">
              {{ card.url.replace(/^https?:\/\//, '').replace(/\/$/, '') }}
            </a>
            <p class="text-sm text-black/80 italic border-t border-black/10 pt-3">"{{ card.tagline }}"</p>
          </div>
        </div>
        <p v-if="t.founders.trust" class="text-center text-[11px] font-source-code-pro text-black/40 mt-6">{{ t.founders.trust }}</p>
      </div>
    </section>

    <!-- Outcome Section -->
    <section class="py-20 md:py-28 px-[32px] md:px-12 bg-black/[0.02] border-b border-black/10">
      <div class="max-w-5xl mx-auto scroll-reveal">
        <h2 class="font-bold text-3xl md:text-4xl text-center mb-12">
          {{ t.outcome.title }}
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            v-for="(item, i) in t.outcome.items" 
            :key="i" 
            class="p-5 border border-black/10"
          >
            <h4 class="text-lg font-bold text-techblue mb-2">{{ item.title }}</h4>
            <p class="text-sm text-black/50">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 md:py-28 px-[32px] md:px-12">
      <div class="max-w-3xl mx-auto scroll-reveal">
        <h2 class="font-bold text-3xl text-center mb-10">{{ t.faq.title }}</h2>
        <div class="space-y-2 mb-12">
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

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 bg-black/[0.02] border border-black/[0.06]">
          <div v-for="(item, i) in t.faq.details.items" :key="i" class="text-center">
            <p class="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2 font-source-code-pro">{{ item.label }}</p>
            <p class="text-base font-medium">{{ item.value }}</p>
            <p class="text-sm text-black/50">{{ item.subvalue }}</p>
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
        <div class="mt-8 flex items-center justify-center gap-3">
          <span class="text-sm text-white/40">{{ t.cta.note }}</span>
          <NuxtLink 
            to="/corporate" 
            class="text-sm font-bold text-techblue hover:text-white transition-colors font-source-code-pro"
          >
            {{ t.cta.corporate }} →
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
