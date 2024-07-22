<template>
  <div class="bg-primary">
    <div class="h-96 background-gradient flex flex-col justify-center items-start px-4">
      <h1 class="p-1.5 text-xs bg-neutral-50/20 rounded-lg border-2 my-2 border-white text-white">Design Portfolio</h1>
      <h2 class="text-4xl mt-2 font-black text-white">Unsere Arbeiten</h2>
      <p class="text-white ">Hier findest du ein Teil unserer Arbeiten die wir bei der TillTech gemacht haben!
      </p>

      <a href="/#pricing"
        class="text-sm sm:text-base my-2 px-4 font-bold bg-btn-black shadow-lg shadow-white/20 rounded-full py-2 text-white">
        Projekt Starten
      </a>
    </div>
  



    <!-- Filter tabs -->
    <div class="lg:mx-auto lg:max-w-7xl my-6 lg:px-8 mb-8 ">
  <div class="flex flex-wrap gap-4 py-2 items-center justify-center  ">
    <button v-for="category in categories" :key="category" @click="currentFilter = category" :class="{
      'background-gradient text-white': currentFilter === category,
      'bg-gray-400/20 text-sm rounded-lg text-gray-600': currentFilter !== category
    }" class="px-4 py-2 text-sm rounded-xl font-medium">
      {{ category }}
    </button>
  </div>
</div>
    <!-- Portfolio items -->







    <div class="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
     

      <div class="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        <div v-for="item in filteredItems" :key="item.id" @click="$router.push(`/casestudy/${item.slug}`)"
          class="group relative border-b border-r border-gray-200 p-4 sm:p-6">
          <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
            <img :src="item.img" :alt="item.alt" class="h-full w-full object-cover object-center" />
          </div>
          <div class="pb-4 pt-10 text-center">
            <h3 class="text-sm font-medium text-gray-900">
              <a :href="item.href">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ item.shortdescription }}
              </a>
            </h3>

            <p class="mt-4 text-base font-medium text-gray-900">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>





  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import supabase from '../lib/supabase';
import { casestudy } from '../components/store';

const currentFilter = ref('Alles');

const fetchStudy = async () => {
  let { data: singlecase, error } = await supabase
    .from('casestudy')
    .select()

  if (error) throw new Error(error)
  casestudy.singlecase = singlecase
}

fetchStudy()

// Define categories in the desired order
const categories = ['Alles', 'Grafik Design', 'Marketing', 'Development', 'Content Creation', 'Extras'];

const filteredItems = computed(() => {
  if (currentFilter.value === 'Alles') {
    return casestudy.singlecase;
  } else {
    return casestudy.singlecase.filter(item => item.category === currentFilter.value);
  }
});
</script>