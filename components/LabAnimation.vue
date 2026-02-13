<script setup lang="ts">
import * as THREE from 'three';
import SpriteText from "three-spritetext";
import {OBJLoader} from 'three/addons/loaders/OBJLoader.js';
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js';

import type {HTMLAttributes} from "vue";
import {cn} from "~/lib/utils";

const {t} = useI18n();

const highlightNodes = new Set();
const highlightLinks = new Set();
let hoverNode = null;
const props = defineProps<{
  class?: HTMLAttributes['class'],
  isPaused: boolean,
}>()


const gData = {
  "nodes": [
    {"id": "@", "group": 1, color: '#1C59BF'},
    {"id": "QUANTUM STATE", label: t('landingPage.heroSection.animationTexts.quantum'), "group": 2, color: '#ff6b6b'},
    {
      "id": "Wavefunction Collapse",
      label: t('landingPage.heroSection.animationTexts.wavefunction'),
      "group": 2,
      color: '#ff6b6b'
    },
    {
      "id": "Idea Creation",
      label: t('landingPage.heroSection.animationTexts.ideaCreation'),
      "group": 2,
      color: '#ff6b6b'
    },
    {
      "id": "Infinite Possibility",
      label: t('landingPage.heroSection.animationTexts.possibility'),
      "group": 2,
      color: '#ff6b6b'
    },
    {"id": "AI & CO-CREATION", label: t('landingPage.heroSection.animationTexts.ai'), "group": 3, color: '#15aabf'},
    {
      "id": "AI as Inhibitor",
      label: t('landingPage.heroSection.animationTexts.aiInhibitor'),
      "group": 3,
      color: '#15aabf'
    },
    {
      "id": "COGNITIVE DISSONANCE",
      label: t('landingPage.heroSection.animationTexts.cognitiveDissonance'),
      "group": 4,
      color: '#4dabf7'
    },
    {
      "id": "Redefining States",
      label: t('landingPage.heroSection.animationTexts.redefiningStates'),
      "group": 4,
      color: '#4dabf7'
    },
    {
      "id": "Beyond Material",
      label: t('landingPage.heroSection.animationTexts.beyondMaterial'),
      "group": 4,
      color: '#4dabf7'
    },
    {
      "id": "INFORMATION CYCLE",
      label: t('landingPage.heroSection.animationTexts.infoCycle'),
      "group": 5,
      color: '#20c997'
    },
    {"id": "Database of Known", label: t('landingPage.heroSection.animationTexts.known'), "group": 5, color: '#20c997'},
    {
      "id": "Collective Consciousness",
      label: t('landingPage.heroSection.animationTexts.collectiveConsciousness'),
      "group": 5,
      color: '#20c997'
    },
    {
      "id": "Outside Known Facts",
      label: t('landingPage.heroSection.animationTexts.outsideKnownFacts'),
      "group": 5,
      color: '#20c997'
    },
    {"id": "DEEP WORK", label: t('landingPage.heroSection.animationTexts.deepWork'), "group": 6, color: '#fd7e14'},
    {
      "id": "Derived Thinking",
      label: t('landingPage.heroSection.animationTexts.derivedThinking'),
      "group": 6,
      color: '#fd7e14'
    },
    {
      "id": "Refining Ideas",
      label: t('landingPage.heroSection.animationTexts.refiningIdeas'),
      "group": 6,
      color: '#fd7e14'
    },
    {
      "id": "CONSCIOUSNESS STATES",
      label: t('landingPage.heroSection.animationTexts.consciousnessStates'),
      "group": 7,
      color: '#cc5de8'
    },
    {
      "id": "Meditative Not Knowing",
      label: t('landingPage.heroSection.animationTexts.meditativeNotKnowing'),
      "group": 7,
      color: '#cc5de8'
    },
    {"id": "Flow State", label: t('landingPage.heroSection.animationTexts.flowState'), "group": 7, color: '#cc5de8'},
    {
      "id": "Emerging Properties",
      label: t('landingPage.heroSection.animationTexts.emergingProps'),
      "group": 7,
      color: '#cc5de8'
    }
  ],
  "links": [
    {"source": "@", "target": "QUANTUM STATE", "value": 1},
    {"source": "@", "target": "AI & CO-CREATION", "value": 1},
    {"source": "@", "target": "COGNITIVE DISSONANCE", "value": 1},
    {"source": "@", "target": "INFORMATION CYCLE", "value": 1},
    {"source": "@", "target": "DEEP WORK", "value": 1},
    {"source": "@", "target": "CONSCIOUSNESS STATES", "value": 1},
    {"source": "QUANTUM STATE", "target": "AI & CO-CREATION", "value": 1},
    {"source": "AI & CO-CREATION", "target": "COGNITIVE DISSONANCE", "value": 1},
    {"source": "COGNITIVE DISSONANCE", "target": "INFORMATION CYCLE", "value": 1},
    {"source": "INFORMATION CYCLE", "target": "DEEP WORK", "value": 1},
    {"source": "DEEP WORK", "target": "CONSCIOUSNESS STATES", "value": 1},
    {"source": "AI & CO-CREATION", "target": "AI as Inhibitor", "value": 1},
    {"source": "AI as Inhibitor", "target": "Redefining States", "value": 1},
    {"source": "COGNITIVE DISSONANCE", "target": "Redefining States", "value": 1},
    {"source": "COGNITIVE DISSONANCE", "target": "Beyond Material", "value": 1},
    {"source": "Beyond Material", "target": "Collective Consciousness", "value": 1},
    {"source": "INFORMATION CYCLE", "target": "Database of Known", "value": 1},
    {"source": "INFORMATION CYCLE", "target": "Collective Consciousness", "value": 1},
    {"source": "INFORMATION CYCLE", "target": "Outside Known Facts", "value": 1},
    {"source": "DEEP WORK", "target": "Refining Ideas", "value": 1},
    {"source": "DEEP WORK", "target": "Derived Thinking", "value": 1},
    {"source": "Derived Thinking", "target": "Infinite Possibility", "value": 1},
    {"source": "CONSCIOUSNESS STATES", "target": "Meditative Not Knowing", "value": 1},
    {"source": "CONSCIOUSNESS STATES", "target": "Flow State", "value": 1},
    {"source": "CONSCIOUSNESS STATES", "target": "Emerging Properties", "value": 1},
    {"source": "QUANTUM STATE", "target": "Wavefunction Collapse", "value": 1},
    {"source": "QUANTUM STATE", "target": "Idea Creation", "value": 1},
    {"source": "QUANTUM STATE", "target": "Infinite Possibility", "value": 1},
    {"source": "Wavefunction Collapse", "target": "Meditative Not Knowing", "value": 1}
  ],
};

// cross-link node objects
gData.links.forEach(link => {
  const a = gData.nodes.filter(n => n.id === link.source)[0];
  const b = gData.nodes.filter(n => n.id === link.target)[0];
  !a.neighbors && (a.neighbors = []);
  !b.neighbors && (b.neighbors = []);
  a.neighbors.push(b);
  b.neighbors.push(a);

  !a.links && (a.links = []);
  !b.links && (b.links = []);
  a.links.push(link);
  b.links.push(link);
});

const loader = new OBJLoader();

const graphEl = ref<HTMLDivElement | null>(null);

onMounted(async () => {
  if (window === undefined)
    return;

  const dynamicImport = await import('3d-force-graph')
  const ForceGraph3D = dynamicImport.default;

  document.fonts.add(await new FontFace("Proxima Nova", "url(/fonts/ProximaNova/ProximaNova-Regular.woff)", {
    style: "normal",
    weight: "400",
    stretch: "condensed",
  }).load());

  document.fonts.add(await new FontFace("Proxima Nova", "url(/fonts/ProximaNova/ProximaNova-Bold.woff)", {
    style: "normal",
    weight: "700",
    stretch: "condensed",
  }).load());

  let distance = 600;
  if (window.innerWidth <= 991) {
    distance = 1100;
  } else if (window.innerWidth <= 767) {
    distance = 900;
  }


  const hdrEquirect = new RGBELoader().load(
      "/empty_warehouse_01_0-5k.hdr",
      () => {
        hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
      }
  );

  const Graph = new ForceGraph3D(graphEl.value)
      .cooldownTicks(100)
      .graphData(gData)
      .enableNavigationControls(false)
      .showNavInfo(false)
      .nodeAutoColorBy('group')
      .height(window.innerHeight)
      .width(document.body.clientWidth)
      .linkWidth(link => 4)
      .nodeThreeObject(node => {
        const sprite = new SpriteText(node.id);
        sprite.fontFace = "Proxima Nova"
        sprite.material.depthWrite = false;
        sprite.color = '#0047BB';
        sprite.textHeight = 10;
        sprite.padding = 3;
        if (node.label)
          sprite.text = node.label;
        switch (node.id) {
          case '@':
            const standardMat = new THREE.MeshPhongMaterial({
              color: 0x0047BB,
              roughness: 0.1,

            });

            return new THREE.Mesh(
                new THREE.SphereGeometry(20),
                standardMat,
            );
          case 'QUANTUM STATE':
          case 'AI & CO-CREATION':
          case 'INFORMATION CYCLE':
          case 'DEEP WORK':
          case 'CONSCIOUSNESS STATES':
            sprite.textHeight = 14;
            sprite.text = sprite.text.toUpperCase();
            sprite.fontWeight = '700';
            break;
        }
        return sprite;
      })
      .linkColor(link => '#000000')
      .backgroundColor('#e8e1da')
      .cameraPosition({z: distance})
      .linkWidth(link => highlightLinks.has(link) ? 2 : 1)
      .linkDirectionalParticleColor(link => '#0047BB')
      .linkDirectionalParticles(link => highlightLinks.has(link) ? 6 : 0)
      //.linkDirectionalParticleSpeed(600)
      .linkDirectionalParticleWidth(2)
      .onNodeHover(node => {
        if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;

        highlightNodes.clear();
        highlightLinks.clear();
        if (node) {
          highlightNodes.add(node);
          node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
          if (node.id == '@') {
            gData.links.forEach(link => highlightLinks.add(link));
          } else {
            node.links.forEach(link => highlightLinks.add(link));
          }
        }

        hoverNode = node || null;

        if (node)
          console.log(node.__threeObj);

        updateHighlight();
      })
      .onLinkHover(link => {
        highlightNodes.clear();
        highlightLinks.clear();

        if (link) {
          highlightLinks.add(link);
          highlightNodes.add(link.source);
          highlightNodes.add(link.target);
        }

        updateHighlight();
      });

  function updateHighlight() {
    Graph
        .nodeColor(Graph.nodeColor())
        .linkWidth(Graph.linkWidth())
        .linkDirectionalParticles(Graph.linkDirectionalParticles());
  }

  Graph.d3Force('charge').strength(-1100);

  Graph.lights()[1].intensity = 5;

  let angle = 0;
  const angleStep = Math.PI / 1555;
  setInterval(() => {
    if (props.isPaused)
      return;

    Graph.cameraPosition({
      x: distance * Math.sin(angle),
      z: distance * Math.cos(angle),
      y: 150
    }, {x: -20, y: 25, z: 0});
    angle += angleStep;

  }, 10);
})

</script>

<template>
  <div :class="cn('flex justify-center h-screen', props.class)">
    <div ref="graphEl"></div>

  </div>
</template>

