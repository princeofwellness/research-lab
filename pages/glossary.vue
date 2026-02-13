<script lang="ts" setup>

import {ogMetaDescription, ogMetaImage} from "~/constants/constant";
import ResearchLabText from "~/components/ResearchLabText.vue";
import SorrywecanText from "~/components/SorrywecanText.vue";


useHead({
  title: 'GLOSSARY | RESEARCH LAB',
  meta: [
    {name: 'description', content: ogMetaDescription},
    {name: 'og:image', content: ogMetaImage},
    {name: "twitter:image", content: ogMetaImage},
  ]
})

defineRouteRules({
  sitemap: {
    changefreq: 'daily',
    priority: 0.6
  }
})


const glossaryTerms = [
  {
    term: "Adaptive Intuition",
    meaning: "Adaptive Intuition is not a mystical sense but an adaptive cognitive skill — the ability to use context, past patterns, and environmental signals to make rapid judgments under uncertainty. It develops through experience and repeated exposure to complex information, allowing a person to “feel” the structure of a situation before a fully rational assessment is formed.",
  },
  {
    term: "AI-First Approach",
    meaning: "AI-First Approach means starting any task by examining how AI interprets the problem, what structures it reveals, and how it can accelerate the next steps. It doesn’t replace human thinking — it sets the initial frame, giving us a faster, richer starting point for action.",
  },
  {
    term: "Attunement",
    meaning: "Attunement is not just about understanding a concept; it's about engaging in a living, evolving relationship with the very essence of ongoing experience — the continuous process through which perception, meaning, and self emerge.",
  },
  {
    term: "Co-creation",
    meaning: "Co-creation is the emergence of a shared act between distinct forms of agency — human and machine — neither of which fully contains or controls the other. It treats both sides as actors with their own modes of sensing, interpreting, and affecting the world.",
  },
  {
    term: "Cognitive Ergonomics",
    meaning: "Cognitive Ergonomics is the science of designing environments, tools, and workflows to match how the brain naturally processes information. It recognizes that the physical and digital surroundings directly shape attention, memory, and creative thinking.",
  },
  {
    term: "Collective Intelligence",
    meaning: "Collective Intelligence is a phenomenon where a group of agents functions as a single cognitive unit — coordinating to solve problems, make decisions, and generate insights that exceed individual capacity.",
  },
  {
    term: "Context",
    meaning: "In AI thinking, context is the primary source of intelligence — the field of signals a system uses to interpret meaning and decide what comes next. Modern models don’t respond to isolated inputs but to context windows that integrate everything relevant to the situation. Context isn’t background; it’s the architecture of meaning itself.",
  },
  {
    term: "Quantum Creativity",
    meaning: "Quantum Creativity refers to brief, high-potential moments of insight that appear at the edges of ordinary thinking. Using methods inspired by quantum physics, we pay attention to these small cognitive flashes, capture them before they fade, and amplify them into usable ideas. It treats creativity as a field of possibilities, not a linear process.",
  },
  {
    term: "Emergent Systems",
    meaning: "Emergent Systems are systems whose behavior arises from interaction rather than instruction. They matter in the age of AI because modern intelligence is emergent: large models gain capabilities through the collective dynamics of their parameters and the contexts they absorb. As human–AI teams start to function the same way, emergence becomes the new logic of capability — the way complexity turns into intelligence.",
  },
  {
    term: "Flow States",
    meaning: "Flow States are deep-focus modes where attention, action, and perception align into a single continuous loop. In flow, the mind settles, distraction drops, and work becomes intuitive — allowing faster insight, smoother execution, and heightened clarity in complex tasks.",
  },
  {
    term: "Mindshift",
    meaning: "Mindshift is transformation at the level of perception — the point where real change begins. It’s a Research Lab methodology that treats cognition as editable, helping people update their internal models, reinterpret uncertainty, and change the automatic assumptions that shape their decisions. Mindshift creates the conditions for natural adaptation: higher tolerance for prediction error, psychological safety, flexible identities, and openness to new possibilities.",
  },
  {
    term: "Neuroplasticity",
    meaning: "Neuroplasticity is the brain’s ability to change and adapt in response to experience — reorganizing its connections as we learn, practice, and encounter new situations.",
  },
  {
    term: "Osmosis",
    meaning: "Osmosis is the gradual process of unconscious assimilation of ideas and knowledge, formed quietly through exposure rather than effort.",
  },
  {
    term: "Shared Mental Models (SMMs)",
    meaning: "Shared Mental Models are a scientific theory showing that teams perform better when members share a common understanding of their goals, roles, and context. Research demonstrates that when this mental picture is aligned, coordination and adaptation become much smoother.",
  },
  {
    term: "Soft Engineering",
    meaning: "Soft Engineering is the practice of designing with awareness, combining systems thinking with empathy, observation, and imagination. Rooted in presence and human-centered, this approach brings you from confusion back to a state of creativity and aliveness.",
  },
  {
    term: "Technosphere",
    meaning: "The Technosphere is the environment where human and machine cognition merge into a hybrid system capable of generating new forms of collective intelligence.",
  },

]

</script>


<template>
  <Header/>

  <div class="flex flex-col min-h-screen text-techblue w-full font-source-code-pro">
    <div class="flex grow w-full py-[136px]">

      <div class="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div class="flex">
          <!--          <div class="flex justify-center content-center center">-->
          <!--            <HamburgerMenuIcon class="scale-50"/>-->
          <!--          </div>-->
          <div class="mx-auto text-center">
            <h1 class="text-42 lg:text-68 tracking-tight uppercase font-medium">About the <b>glossary</b></h1>
            <p class="mt-6 text-16 md:text-[22px] max-w-3xl mx-auto leading-relaxed">
              We created this glossary to help make the invisible parts of adaptation visible — and to offer a clear, shared vocabulary for the world we’re learning to inhabit.
              <br/>
              <br/>
              This glossary is not meant to be fixed. It’s a living system, expanding as new forms of change emerge.
              <br/>
              <br/>
              <i>updated on 09.12.25</i>
            </p>
          </div>
        </div>


        <main class="mt-20 flex flex-col gap-y-12 lg:gap-y-24 w-full">
          <div v-for="(glossaryTerm, index) in glossaryTerms" :key="index" class="">
            <h4 class="text-26 font-bold">{{glossaryTerm.term}}</h4>
            <p class="text-16 lg:text-[22px] pt-2">{{glossaryTerm.meaning}}</p>
          </div>
        </main>
      </div>

    </div>

    <NewsletterSection class="py-[68px] lg:py-[136px]"/>

    <Footer/>
  </div>
</template>
