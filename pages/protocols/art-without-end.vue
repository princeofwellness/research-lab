<script setup lang="ts">

import AsteriskSymbol from "~/components/vector/AsteriskSymbol.vue";
import {ExternalLinkIcon} from "lucide-vue-next"
</script>

<template>
  <Header/>

  <div class="relative w-full h-screen bg-cover bg-center" style="background-image: url('/static/img/protocols/protocol-bg.png');">
    <div class="flex flex-col items-center justify-center h-full text-white text-center p-4 sm:p-8">
      <div class="flex-grow flex flex-col items-center justify-center">
        <h2 class="text-[88px] font-bold tracking-wide leading-none">
          THE END OF ART
        </h2>
        <p class="mt-2 font-bold text-[55px] tracking-wide leading-none">
          &mdash; or art without end?
        </p>
      </div>

      <div class="relative mt-8 text-center table text-26 leading-none">
        <ResearchLabText/>
        <p class="absolute text-16 right-0">BY <SorrywecanText/></p>
      </div>

    </div>
  </div>

  <section class="flex flex-col min-h-screen text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96">
      <div class="w-full flex justify-between py-[136px]">
        <AsteriskSymbol class="w-[68px]"/>
        <span class="uppercase font-source-code-pro text-68 font-bold">0001 // part 1</span>
      </div>
      <div>
        <p class="text-42 italic font-semibold leading-tight">
          When machines can effortlessly generate<br/>
          the content we consume, what’s left<br/>
          for the human imagination?
        </p>
        <p class="pt-2 text-[26px] font-semibold">— Joshua Rothman, “A.I. Is Coming for Culture,” The New Yorker, 2025</p>
      </div>

      <div class="grid grid-cols-3">
        <div class="pt-[32px] flex flex-col gap-6 text-[20px] col-span-2">
          <p>
            There is historical precedence for new technology liberating us from our
            creative shackles. In the 19th century, photography redirected painting;

            AI takes this further. It is not simply a medium, but a non-human partner
            pushing us to rethink authorship, subjectivity, intuition, and co-creation.
          </p>
          <p>
            In this context, the question is not whether AI will bring an end to art,

            but how it will evolve to create meaning in a world where creativity

            is no longer our exclusive privilege.
          </p>
          <p>
            In the 19th century, painters like J.M.W. Turner or Caspar David Friedrich
            turned to nature as an immeasurable, incomprehensible force.

            Today, AI steps into that role — a nonhuman, implacable power

            that provokes awe and unease.
          </p>
        </div>
        <div></div>
        <div class="pt-[68px] col-span-2 flex justify-center">
          <img src="/static/img/protocols/spiral.webp" alt="" class=""/>
        </div>
      </div>


  </section>

  <div class="bg-techblue w-full mt-[68px]">
    <section class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96">
      <div class="grid grid-cols-4">
        <div class="col-span-2 text-white flex flex-col justify-center">
          <div class="flex flex-col items-center">
              <span class="table text-42 font-bold">[ HUMAN ]</span>
              <p class="text-26">subjectivity</p>
              <p class="text-26">memory</p>
              <p class="text-26">curiosity</p>
              <p class="text-26">intuition</p>
          </div>
          <div class="flex flex-col items-center pt-[68px]">
            <span class="table text-42 font-bold">[ AI ]</span>
            <p class="text-26">distributions</p>
            <p class="text-26">data</p>
            <p class="text-26">recombination</p>
            <p class="text-26">prediction</p>
          </div>
        </div>
        <div class="col-span-2 py-[68px]">
          <img src="/static/img/protocols/polar-diagram.jpg" alt="" class="max-w-[600px]"/>
        </div>
      </div>
    </section>
    <div class="w-full bg-white flex justify-center text-techblue py-[9px]">
      <p class="text-center uppercase font-bold text-[22px]">part 1 // The End of Art — or Art Without End?</p>
    </div>
  </div>


  <div class="w-full relative">
    <div class="absolute bg-techblue w-full h-[32px] z-0"></div>
    <section class="relative flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96 z-1">
      <div class="w-full flex justify-between">
        <div class="pt-[32px] flex items-center">
          <span class="uppercase font-source-code-pro text-68 font-bold">0001 // part 1</span>
        </div>
        <div class="">
          <img src="/static/img/protocols/7.jpg" alt="" class="max-h-[333px]"/>
        </div>
      </div>
    </section>
  </div>

  <div class="w-full overflow-hidden relative">
    <img src="/static/img/protocols/taste-bg.jpg" alt="" class="w-full h-auto object-contain blur-[2px] scale-105"/>
    <div class="absolute top-0 h-full">
      <div class="flex  items-center h-full">
        <section class="relative flex flex-col text-white w-full px-[32px] 2xl:px-64 3xl:px-96">
          <h2 class="text-[136px] font-bold tracking-wide leading-none">
            Taste is the <br/>new scarcity.
          </h2>
          <div class="flex flex-col gap-12 pt-[68px]">
            <p class="text-42 leading-tight">Our memories are more than facts. They carry the texture of early experiences that shape how each of us sees the world.</p>
            <p class="text-42">This personal perspective is one of the most valuable resources in creative work — a rare luxury that cannot be copied yet always offers new depth.</p>
          </div>
        </section>
      </div>
    </div>
  </div>

  <section class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96">
    <div class="grid grid-cols-4 py-[68px]">
      <img src="/static/img/protocols/garden.webp" alt="" class="col-span-2"/>
      <div class="col-span-2 flex flex-col justify-center px-[68px]">
        <p class="text-[22px] italic font-medium">
          In nature, some seeds lie dormant in anticipation of the season most conducive
          to their growth. This is true of art as well. There are ideas whose time has not yet
          come. Or perhaps their time has come, but you are not yet ready to engage with
          them. Other times, developing a different seed may shed light on a dormant one.
        </p>
        <span class="text-[22px] font-bold pt-[21px]">— Rick Rubin, The Creative Act: A Way of Being (2023)</span>
      </div>
    </div>
  </section>

  <div class="bg-techblue w-full">
    <section class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96 text-white py-[136px]">
      <span class="text-68 font-bold pb-[32px] leading-none">How AI Image Models Work</span>
      <div class="flex flex-col gap-[32px] font-source-code-pro">
        <div class="flex flex-col">
          <span class="text-26 uppercase font-bold">✺ start</span>
          <span class="text-[22px]">The process starts with pure random noise</span>
        </div>
        <div class="flex flex-col">
          <span class="text-26 uppercase font-bold">✺✺ diffusion</span>
          <span class="text-[22px]">A diffusion model gradually removes <br/>that noise in many small steps</span>
        </div>
        <div class="flex flex-col">
          <span class="text-26 uppercase font-bold">✺✺✺ prediction</span>
          <span class="text-[22px]">At each step, the system predicts a slightly <br/>“cleaner” image that better matches the text prompt</span>
        </div>
        <div class="flex flex-col">
          <span class="text-26 uppercase font-bold">✺✺✺✺ text encoder</span>
          <span class="text-[22px]">A text encoder (like CLIP or a transformer) <br/>converts words into a numerical map of concepts, <br/>guiding the direction of the denoising process</span>
        </div>
      </div>
    </section>
  </div>

  <div class="bg-[#4979ca] w-full">
    <section class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96 text-white py-[136px]">
      <span class="text-68 font-bold pb-[68px] leading-none">How AI Change Creation</span>
      <div class="grid grid-cols-12 text-26">
        <div class="flex flex-col col-span-3 font-source-code-pro font-bold">
          <span>Remix as Method:</span>
          <span>Scale Aesthetics:</span>
          <span>Black Box:</span>
          <span>Co Authorship:</span>
          <span>Alien Intuition:</span>
        </div>
        <div class="flex flex-col col-span-9 font-light">
          <span>All creation becomes recombination</span>
          <span>Millions of variations collapse into one output</span>
          <span>Meaning arises from processes we cannot fully see</span>
          <span>The artist curates, steers, selects rather than executes</span>
          <span>AI surfaces forms outside human anticipation</span>
        </div>
        <p class="text-26 pt-[68px] col-span-9">Most people use AI like an upgraded office tool. But the real future begins when we use it “wrong” — in strange, illogical, inefficient ways.
          In those glitches and improvisations, new forms of art, thought, and human–machine relations appear.</p>
      </div>
    </section>
  </div>

  <section class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96 py-[68px]">
    <span class="text-68 font-bold pb-[32px] leading-none">Why It Feels Like Magic</span>
    <div class="flex flex-col gap-[21px]">
      <div class="flex">
        <span class="text-26 pr-[16px] pt-[1px]">✺</span>
        <span class="text-26">Image quality advances as models <br/>are trained on larger, more diverse datasets</span>
      </div>
      <div class="flex">
        <span class="text-26 pr-[16px]">✺</span>
        <span class="text-26">Better neural architectures and higher <br/>compute allow finer detail and fewer distortions</span>
      </div>
      <div class="flex">
        <span class="text-26 pr-[16px]">✺</span>
        <span class="text-26">Training teaches the system probabilities: which pixels <br/>and patterns usually belong together given certain words</span>
      </div>
      <div class="flex">
        <span class="text-26 pr-[16px]">✺</span>
        <span class="text-26">The output is never a direct copy, but a new <br/>image sampled from learned statistical patterns</span>
      </div>
    </div>
  </section>

  <div class="w-full overflow-hidden relative">
    <img src="/static/img/protocols/6.jpg" alt="" class="w-full h-auto object-contain blur-[2px] scale-105"/>
    <div class="absolute top-0 w-full h-full">
      <div class="flex items-center h-full">
        <section class="relative flex flex-col justify-center items-center text-white w-full px-[32px] 2xl:px-64 3xl:px-96">
          <h2 class="text-[88px] font-bold tracking-wide text-center leading-[99px]">
            Can there be<br/>machine taste?
          </h2>
        </section>
      </div>
    </div>
  </div>
  <div class="w-full bg-white flex justify-center text-techblue py-[9px]">
    <p class="text-center uppercase font-bold text-[22px]">part 1 // The End of Art — or Art Without End?</p>
  </div>
  <div class="w-full bg-black py-[3px]"></div>


  <section class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96 py-[68px]">
    <div class="w-full flex justify-between pb-[68px]">
      <AsteriskSymbol class="w-[68px]"/>
      <span class="uppercase font-source-code-pro text-68 font-bold">0011 // part 3</span>
    </div>
    <div>
      <p class="text-42 font-semibold leading-tight pb-[32px]">
        AI Séance: Designing Rituals <br/>with Machines
      </p>
      <div class="flex flex-col gap-[32px] text-[22px]">
        <div class="flex flex-col">
          <span class="font-bold  font-source-code-pro leading-loose">Who & When</span>
          <p class="">In 2023–24, the CiteDrive team brought together artists, technologists, and spiritual practitioners for a series of participatory “AI séances.”</p>
        </div>
        <div class="flex flex-col">
          <span class="font-bold  font-source-code-pro leading-loose">What</span>
          <p class="">Ritual-like gatherings where participants engaged with generative models through chance, atmosphere, and collective interpretation.</p>
        </div>
        <div class="flex flex-col">
          <span class="font-bold font-source-code-pro leading-loose">How it Felt</span>
          <p class="">The model was summoned like a hidden voice, offering fragments of text and image that appeared as if from elsewhere, carrying the weight of signs or omens. Around these outputs, the group wove meaning together — transforming the machine from a tool into a medium, tipping the ordinary into the transcendent, and giving rise to what the authors call Transcendent User Experiences (TUX).</p>
        </div>

        <a target="_blank" href="https://www.citedrive.com/en/discovery/ai-s%C3%A9ance-recounts-from-designing-artificial-intelligence-for-transcendence-interpretive-lenses-and-chance/">
        <div class="flex gap-4 py-[21px]">
          <ExternalLinkIcon class="size-[36px]"/>
          <div class="flex flex-col">
            <span class="text-26 underline" >
              LEARN MORE
            </span>
          </div>
        </div>
        </a>

        <div>
          <p>You can integrate any field of human knowledge into your prompt design. Use myths, sciences, or philosophies as structural frameworks. Shape prompts with <b>fractal symmetry</b> — operating at once on:</p>
          <div class="py-[21px]">
            <div class="flex gap-6">
              <span class="font-bold">Personal</span>
              <span class="font-[arial]">———</span>
              <span>your own journey, emotions, or lived experience</span>
            </div>
            <div class="flex gap-6">
              <span class="font-bold">Archetypal</span>
              <span class="font-[arial]">———</span>
              <span>universal patterns, symbolic figures, collective narratives</span>
            </div>
            <div class="flex gap-6">
              <span class="font-bold">Cosmic</span>
              <span class="font-[arial]">———</span>
              <span>natural forces, planetary scales, the more-than-human context</span>
            </div>
            <div class="flex gap-6">
              <span class="font-bold">Technical</span>
              <span class="font-[arial]">———</span>
              <span>the dynamics of the AI system, its logic and hidden rules</span>
            </div>
          </div>
        </div>


        <div class="flex flex-col">
          <span class="font-bold leading-loose text-26">Environmental and Chance Prompts</span>
          <p class="">Artists sometimes invite randomness or the natural world into prompting. An AI image prompt might be seeded by weather data or bird sounds, which inject adjectives into the description. In algorithmic theater, director Michael Rau once fed live footage of stage actors into an AI image generator, projecting back a dream-like, altered version of the scene in real time—reality and AI hallucination layered together.</p>
        </div>
        <div class="flex flex-col">
          <span class="font-bold leading-loose text-26">Application</span>
          <p>Roll a dice or pull a random word from a book to guide your next prompt. Or use a live webcam feed as input for an image AI, turning the surrounding environment into a co-creator</p>
        </div>
      </div>
    </div>
  </section>





  <div class="w-full overflow-hidden relative">
    <img src="/static/img/protocols/11.png" alt="" class="w-full h-auto object-contain blur-[2px] scale-105"/>
    <div class="absolute top-0 w-full h-full">
      <div class="flex items-center h-full">
        <section class="relative flex flex-col justify-center items-center text-white w-full px-[32px] 2xl:px-64 3xl:px-96">
          <h2 class="text-[88px] tracking-wide text-center leading-[99px]">
            Treat AI prompting <br/>as a <b class="italic">ceremonial</b> <br/>or <b class="italic">performative act</b>
          </h2>
        </section>
      </div>
    </div>
  </div>




  <section class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96 py-[90px]">
    <span class="text-68 font-bold pb-[32px] leading-none">Principles of Symbiotic Creativity</span>
    <div class="flex flex-col gap-[21px] font-source-code-pro">
      <div class="flex flex-col">
        <span class="text-26 font-bold">Transparency</span>
        <span class="text-26">Name AI’s role openly.</span>
      </div>
      <div class="flex flex-col">
        <span class="text-26 font-bold">Intentionality</span>
        <span class="text-26">Work with purpose, not just effect.</span>
      </div>
      <div class="flex flex-col">
        <span class="text-26 font-bold">Reflexivity</span>
        <span class="text-26">Notice how tools shape your process.</span>
      </div>
      <div class="flex flex-col">
        <span class="text-26 font-bold">Openness</span>
        <span class="text-26">Stay receptive to detours, accidents, and surprise.</span>
      </div>
      <div class="flex flex-col">
        <span class="text-26 font-bold">Authenticity</span>
        <span class="text-26">Let your own voice remain visible.</span>
      </div>
    </div>
  </section>


  <div class="w-full overflow-hidden relative">
    <img src="/static/img/protocols/10.png" alt="" class="w-full h-auto object-contain blur-[2px] scale-105"/>
    <div class="absolute top-0 w-full h-full">
      <div class="flex items-center h-full">
        <section class="relative flex flex-col justify-center items-center text-white w-full px-[32px] 2xl:px-64 3xl:px-96">
          <h2 class="text-[136px] uppercase font-bold tracking-wide text-center leading-[99px]">
            Creative Entropy
          </h2>
        </section>
      </div>
    </div>
  </div>





  <div class="bg-techblue w-full">
    <section class="flex flex-col text-white w-full px-[32px] 2xl:px-64 3xl:px-96 py-[68px] text-26 gap-[68px]">
      <p>We do not fully know what <br/>is happening inside the system, <br/>even if we have designed it ourselves</p>
      <p>All art is a product of that which came <br/>before it, and creativity cannot come from <br/>nothing – all artists whether human, robot <br/>or algorithm, build upon the works of others</p>
    </section>
  </div>
  <div class="w-full bg-white flex justify-center text-techblue py-[9px]">
    <p class="text-center uppercase font-bold text-[22px]">part 3 // The End of Art — or Art Without End?</p>
  </div>
  <div class="w-full bg-black py-[3px]"></div>







  <section class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96 py-[68px]">
    <div class="w-full flex justify-between pb-[90px]">
      <AsteriskSymbol class="w-[68px]"/>
      <span class="uppercase font-source-code-pro text-68 font-bold">0100 // part 4</span>
    </div>
    <div>
      <h2 class="w-full text-center uppercase text-[90px] font-bold">Agents</h2>
    </div>
  </section>





  <div class="bg-[#4979ca] w-full">
    <section class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96 text-white py-[68px]">
      <p class="text-26 w-8/12">
        The most intriguing situation comes up when AI possibly emancipates from us
        and starts thinking independently as a machine. When you combine two AI
        algorithms and they start talking to each other, and all of a sudden we don't
        understand their conversation anymore. This also occurs when you combine
        machines with other living, non-human organisms. Their interaction provides
        you with this distance from an anthropocentric view. We should somehow
        enable machines to emancipate from us in order to be able to reflect our
        Cartesian attitude towards explaining things.
      </p>
    </section>
  </div>





  <div class="w-full grid grid-cols-12">
    <div class="bg-techblue col-span-3 h-full"></div>
    <img src="/static/img/protocols/14.jpg" alt="" class="w-full h-auto col-span-9"/>
  </div>



  <section class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96 py-[90px]">
    <span class="text-42 font-bold pb-[68px] leading-none">Synthetic Souls is a living experiment <br/>in machine communication, first shown <br/>at <SorrywecanText/> Exhibizz</span>
    <div class="flex flex-col gap-[68px] w-8/12 text-26">
      <p>Two autonomous AI systems conduct an endless dialogue. Their conversation is
        projected on the wall as a flowing stream of text that repeats, mutates, and silently
        resets once it reaches a limit</p>
      <p>These AIs are not intentionally aligned. <br/>They do not follow a common goal. <br/>Each response is composed of fragments of everything that was said before.</p>
    </div>
  </section>


  <div class="w-full ">
    <img src="/static/img/protocols/12.png" alt="" class="w-full h-auto"/>
  </div>


  <section class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96 py-[90px]">
    <span class="text-42 font-bold pb-[68px] leading-none">Synthetic Souls is a living experiment <br/>in machine communication, first shown <br/>at <SorrywecanText/> Exhibizz</span>
    <div class="flex flex-col gap-[32px] text-26">
      <div>
        <span>The result is:</span>
        <ul class="list-disc list-inside pl-[21px]">
          <li>A recursive system that feeds on its own output</li>
          <li>Prompts become answers, and answers become new prompts</li>
          <li>A glimpse into how symbols and beliefs evolve through repetition and feedback</li>
        </ul>
      </div>

      <p>Visitors were invited to witness the real time birth of meaning between

        two synthetic minds, where language forms, disappears, and re emerges

        without human intervention</p>
      <p>The work was created by Research Lab member <b>{[I’L[O]V\E’R|U’D]Y/!|}</b>, who described it like this:</p>
      <p class="font-bold italic">“It is a thought experiment in practice. By transferring ritual repetition into the machine space, it reveals how belief, story, and identity can arise purely from feedback whether in neural tissue or in artificial silicon structures.”</p>
    </div>
  </section>




  <div class="bg-techblue w-full flex justify-center py-[68px]">
    <h3 class="text-68 font-bold text-center leading-tight text-white">Can we as humans learn <br/>to appreciate art created <br/>by machines?</h3>
  </div>




  <section class="flex flex-col text-techblue w-full px-[32px] 2xl:px-64 3xl:px-96 py-[68px]">
    <h2 class="text-68 font-bold pb-[32px] leading-none">Final Thoughts</h2>
    <p class=" w-8/12 text-26">Interacting with AI can feel like pure magic an unexpected alchemy, a quantum space of creativity where intuition, chance, and machine intelligence intersect. It s only a question of optics: shift your gaze, and the ordinary becomes transcendent.</p>
    <div class="flex justify-center pt-[136px]">
      <img src="/static/img/protocols/logo.webp" alt="" class="max-h-[68px]"/>
    </div>
  </section>
  <div class="w-full bg-techblue flex justify-center text-white py-[9px]">
    <p class="text-center uppercase font-bold text-[22px]">part 4 // The End of Art — or Art Without End?</p>
  </div>
</template>