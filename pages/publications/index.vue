<script lang="ts" setup>

import {onMounted, ref} from "vue";
import {ogMetaDescription, ogMetaImage} from "~/constants/constant";
import PostItem from "~/components/blog/PostItem.vue";
import { AlertCircle } from 'lucide-vue-next';
import ResearchLabText from "~/components/ResearchLabText.vue";
import SorrywecanText from "~/components/SorrywecanText.vue";
import {futureProtocols} from "~/constants/future-protocols";


useHead({
  title: 'BLOG | RESEARCH LAB',
  meta: [
    {name: 'description', content: ogMetaDescription},
    {name: 'og:image', content: ogMetaImage},
    {name: "twitter:image", content: ogMetaImage},
  ]
})

defineRouteRules({
  sitemap: {
    changefreq: 'daily',
    priority: 0.8
  },
  robots: false
})

// const page = ref(0);
//
// const filterCategories = ref<number[]>([])
//
// const {data,execute, clear, status} = await useAsyncData('posts', () => $fetch('/api/blog/posts', { params: {categories: filterCategories.value.join(',')} }));

// const handleFilterChanged = (categories: number[]) => {
//   filterCategories.value = categories;
//   data.value = {...data.value, posts: []};
//   execute();
// }

const publications = ref([
  ...(futureProtocols.map(x => ({...x, type: 'image', category: 'Toolkit'}))),
  {
    type: 'logo',
    category: 'Papers & Essays',
    date: 'August 2025',
    title: 'Lightpaper',
    description: 'Adaptive pattern recognition frameworks for navigating hybrid human-AI intelligence landscapes.',
    downloadLink: '/static/pdf/Lightpaper.pdf',
    moreLink: '/lightpaper',
  },
]);

</script>


<template>
  <Header/>

  <div class="flex flex-col min-h-screen text-techblue w-full ">
    <div class="flex grow w-full py-[136px]">

      <div class="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div class="flex font-proxima">
<!--          <div class="flex justify-center content-center center">-->
<!--            <HamburgerMenuIcon class="scale-50"/>-->
<!--          </div>-->
          <div class="mx-auto text-center">
            <h1 class="text-42 lg:text-68 tracking-tight uppercase font-black">publications</h1>
            <p class="mt-6 text-16 md:text-26 max-w-3xl mx-auto leading-relaxed">
              Monthly toolkits and research exploring human-AI collaboration, creative intelligence, and the future of consciousness.
            </p>
            <NuxtLink to="/glossary">
              <button class="border border-techblue text-techblue px-12 py-2 font-semibold hover:bg-techblue hover:text-white transition-colors duration-200 mt-6">
                Glossary
              </button>
            </NuxtLink>
          </div>
        </div>


        <!-- Publications Grid -->
        <main class="mt-20">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div v-for="(pub, index) in publications" :key="index" class="bg-white border border-gray-200 flex flex-col">

              <!-- Card Image/Logo Area -->
              <div class="h-64 w-full">
                <a :href="pub.moreLink != null ? pub.moreLink : pub.downloadLink" class="cursor-pointer">
                  <img v-if="pub.type === 'image'" :src="pub.image" class="w-full h-full object-cover" :alt="pub.title">
                  <div v-if="pub.type === 'logo'" class="w-full h-full flex flex-col justify-center items-center text-center bg-[#eae8e4] p-4 border-b border-gray-200">
                    <div class="text-xl font-medium tracking-wider text-techblue">
                      <SorrywecanText/> x <ResearchLabText/>
                    </div>
                    <h2 class="text-xs uppercase font-bold z-10 text-center tracking-wide">{{ $t('landingPage.heroSection.heading') }}</h2>
                  </div>
                </a>

                <div v-if="pub.type === 'placeholder'" class="w-full h-full bg-black"></div>
              </div>

              <!-- Card Content Area -->
              <div class="p-6 flex flex-col flex-grow">
                <div class="flex justify-between items-center text-sm text-techblue/80">
                  <span class="font-bold">{{ pub.category }}</span>
                  <span>{{ pub.date }}</span>
                </div>
                <a :href="pub.moreLink != null ? pub.moreLink : pub.downloadLink" class="cursor-pointer">
                  <h2 class="text-2xl font-bold mt-2 mb-3 hover:opacity-80">{{ pub.title }}</h2>
                </a>
                <p class="text-techblue/90 text-base leading-relaxed flex-grow">
                  {{ pub.description }}
                </p>
                <div class="flex flex-wrap gap-4 mt-8">
                  <a :href="pub.downloadLink" class="flex-grow">
                    <button class="w-full bg-techblue text-white px-8 py-3 font-semibold hover:bg-opacity-90 transition-colors duration-200">
                      Download
                    </button>
                  </a>
                  <a :href="pub.moreLink != null ? pub.moreLink : pub.downloadLink" class="flex-grow">
                    <button class="w-full border border-techblue text-techblue px-8 py-3 font-semibold hover:bg-techblue hover:text-white transition-colors duration-200">
                      Read more
                    </button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </main>

        <!-- BLOG START -->
        <!-- BLOG START -->
        <!-- BLOG START -->
<!--        <div class="pt-[32px]" v-if="data.success">-->
<!--&lt;!&ndash;          <PostsFilter :categories="data.categories" @changed="handleFilterChanged" class="hidden lg:flex col-span-12 lg:col-span-2"/>&ndash;&gt;-->
<!--          <div class="flex justify-center content-center">-->
<!--            <LoadingSpinner v-if="status == 'pending'" :size="48"/>-->
<!--            <div v-if="status != 'pending' && data.posts == 0" class="flex">-->
<!--              <span class="text-26 font-bold">No posts...</span>-->
<!--            </div>-->

<!--            <div v-if="data.posts.length > 0" class="mx-auto grid auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">-->
<!--              <PostItem v-for="post in data.posts" :post="post" />-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->
<!--        <div class="flex justify-center pt-[68px]" v-if="!data.success">-->
<!--          <Alert variant="destructive" class="sm:rounded-none opacity-0 animate-fade-in lg:w-1/2" >-->
<!--            <AlertCircle class="w-4 h-4"/>-->
<!--            <AlertDescription>-->
<!--              Blog is unavailable, try again later-->
<!--            </AlertDescription>-->
<!--          </Alert>-->
<!--        </div>-->



      </div>

    </div>

    <NewsletterSection class="pt-[68px] pb-[136px]"/>

    <Footer/>
  </div>
</template>
