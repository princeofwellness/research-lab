<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import BlueroomScene from "~/lib/blueroomScene";

const container = ref(null);
const rendered = ref(false);
const height = 800;
let scene = null;

const updateWindowWidth = () => {
  if (scene) {
    scene.camera.aspect = window.innerWidth / height;
    scene.camera.updateProjectionMatrix();
    scene.renderer.setSize(window.innerWidth, height);
  }
};


onMounted(() => {
  // Template refs are accessed via the .value property. [1]
  if (container.value) {
    scene = new BlueroomScene(container.value);
    scene.render();
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);
    rendered.value = true;
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});

</script>

<template>
  <div class="w-full" ref="container"></div>
</template>
