<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'nav'
}>(), {
  variant: 'primary'
})

const STRIPE_URL = "https://buy.stripe.com/eVqdR92fe7MH1c7cTn4gg04"

const baseStyles = "font-bold uppercase tracking-widest transition-all cursor-pointer inline-block text-center"

const variantStyles = {
  primary: "bg-[#0047BB] text-white px-10 py-5 text-[11px] tracking-[0.2em] hover:bg-black font-source-code-pro",
  secondary: "border-2 border-white text-white px-10 py-5 text-xs hover:bg-white hover:text-black",
  nav: "bg-black text-white px-6 py-2 text-[10px] hover:bg-[#0047BB]"
}

const openStripe = () => {
  window.open(STRIPE_URL, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <button
    @click="openStripe"
    :class="[baseStyles, variantStyles[variant]]"
  >
    <slot />
  </button>
</template>
