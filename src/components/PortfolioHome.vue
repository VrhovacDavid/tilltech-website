<template>
  <div class="">
    <div class="pt-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
      <div class="flex items-center justify-between px-6 sm:px-6 lg:px-0">
        <h2 class="font-bold text-4xl ">Unser Portfolio</h2>
        <a href="/portfolio" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          Alles anschauen
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div class="relative mt-8">
        <div class="relative -mb-6 w-full overflow-x-auto pb-6">
          <ul role="list" class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0">
            <li v-for="product in limitedCaseStudies" :key="product.id" class="inline-flex w-64 flex-col text-center lg:w-auto">
              <div class="group relative">
                <div class=" h-[250px] w-[250px] overflow-hidden rounded-2xl shadow-xl relative">
                  <img
                    :src="product.img"
                    :alt="product.alt"
                    class=" h-[250px] w-[250px]   "
                  />
                 
                </div>
                <div class="mt-6">
                  <p class="text-sm text-gray-500">{{ product.shortdescription }}</p>
                  <h3 class="mt-1 font-semibold text-gray-900">
                    <a :href="`/casestudy/${product.slug}`">
                      <span class="absolute inset-0"></span>
                      {{ product.title }}
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex px-4 sm:hidden">
        <a href="/portfolio" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
        Alles anschauen
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import supabase from '../lib/supabase';

const caseStudies = ref([]);

const fetchStudy = async () => {
  let { data, error } = await supabase
    .from('casestudy')
    .select()
    .limit(4)

  if (error) throw new Error(error)
  caseStudies.value = data
}

onMounted(() => {
  fetchStudy()
})

const limitedCaseStudies = computed(() => {
  return caseStudies.value;
});

</script>