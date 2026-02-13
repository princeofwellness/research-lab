<script setup lang="ts">
import type {HTMLAttributes} from "vue";

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class'],
  required?: boolean,
  modelValue?: string,
  label?: string,
  placeholder?: string,
  type?: string,
  disabled?: boolean
}>(), {modelValue: "", label: "", placeholder: "", disabled: false, type: "text", required: false})

const emit = defineEmits(['update:modelValue']);


const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
}
</script>

<template>

<!--  flex flex-col mt-6 -->
  <div class="flex flex-col mt-6">
    <div class="flex">
      <span class="mb-2 text-16 lg:text-[21px] font-medium text-techblue " v-if="label">{{ label }}</span>
    </div>
    <input :type="type" :value="modelValue" :placeholder="placeholder" :disabled="disabled" :required="required"
           @input="updateValue"
           class="block w-full px-3 py-3 mt-2 focus:outline-2 focus:outline-offset-0 focus:outline-techblue text-techblue placeholder-gray-400 bg-transparent  border border-techblue dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
  </div>


</template>

<style scoped>

</style>
