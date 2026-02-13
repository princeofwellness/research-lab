<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import type {WordpressCategory} from "~/lib/types/wordpress";
import {cn} from "~/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes['class'],
  categories: WordpressCategory[]
}>()

const emit = defineEmits(['changed']);

const activeCategories = ref<number[]>([])

const handleCategoryClick = (id: number) => {
  if(activeCategories.value.includes(id)){
    activeCategories.value = activeCategories.value.filter(x => x !== id)
    emit('changed', activeCategories.value)
    return;
  }
  activeCategories.value.push(id);
  emit('changed', activeCategories.value)
}
const handleAllClick = () => {
  activeCategories.value = [];
  emit('changed', [])
}
</script>

<template>
  <div :class="cn('flex flex-col px-[21px] gap-[21px]', props.class)">

    <PostsFilterCategory @click="handleAllClick"  :category="{id: 0, name: 'ALL', slug: 'all', description: ''}" :active="activeCategories.length == 0" class="w-full font-bold h-[62px]"/>

    <PostsFilterCategory @click="handleCategoryClick(category.id)" v-for="category in props.categories" :category="category" :active="activeCategories.includes(category.id)"/>
  </div>


</template>

<style scoped>

</style>