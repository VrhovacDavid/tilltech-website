<script setup>
import { ref, computed } from 'vue';
import supabase from '../lib/supabase';
import { store } from '../components/store';

const selectedCategory = ref('Alles');

// Define categories in the desired order
const categories = ['Alles', 'Grafik Design', 'Marketing', 'Development', 'Content Creation', 'Extras'];

const fetchPosts = async () => {
  let { data: posts, error } = await supabase
    .from('posts')
    .select()

  if (error) throw new Error(error)
  store.posts = posts
}

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'Alles') {
    return store.posts;
  } else {
    return store.posts.filter(post => post.category === selectedCategory.value);
  }
});

fetchPosts()
</script>

<template>
 <div class="h-96 background-gradient flex flex-col justify-center items-start px-4">
      <h1 class="p-1.5 text-xs bg-neutral-50/20 rounded-lg border-2 my-2 border-white text-white">Design Blog</h1>
      <h2 class="text-4xl mt-2 font-black text-white">Unser Blog</h2>
      <p class="text-white ">Hier findest du immer die neuesten Artikel zum Thema, Grafik Design, Marketing, Development, Content Creation und mehr...
      </p>

      <a href="/#pricing"
        class="text-sm sm:text-base my-2 px-4 font-bold bg-btn-black shadow-lg shadow-white/20 rounded-full py-2 text-white">
        Projekt Starten
      </a>
    </div>

  <div class="bg-primary py-8 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <div class="lg:mx-auto lg:max-w-7xl text-center ">

        <div class="flex flex-wrap gap-4 py-2 items-center justify-center  ">
          <button v-for="category in categories" :key="category" @click="selectedCategory = category" :class="[
            'px-4 py-2 text-sm rounded-xl font-medium ',
            selectedCategory === category ? 'background-gradient  text-white' : 'bg-gray-400/20 text-sm rounded-lg  text-gray-600'
          ]">
            {{ category }}
          </button>
        </div>
      </div>
      <div
        class="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="item in filteredPosts" :key="item.id" @click="$router.push(`/blogpost/${item.id}`)"
          class="cursor-pointer relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
          <img :src="item.img" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time :datetime="item.created_at" class="mr-8">{{ item.created_at }}</time>
            <div class="-ml-4 flex items-center gap-x-4">
              <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="flex gap-x-2.5">
                <img src="/Branding/TillTech.webp" alt="TillTech" class="h-6 w-6 flex-none rounded-full bg-white/10" />
                TillTech
              </div>
            </div>
          </div>
          <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
            <a :href="item.href">
              <span class="absolute inset-0" />
              {{ item.title }}
            </a>
          </h3>
        </article>
      </div>
    </div>
  </div>
</template>