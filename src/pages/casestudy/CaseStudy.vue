<template>


  <div v-if="!casestudy">No Post found.</div>

  <div v-else="casestudy">



    <div class="h-[500px] background-gradient flex flex-col justify-center items-start px-4">
      <h1 class="p-2 bg-neutral-50/20 my-2  rounded-lg border-2 text-xs border-white text-white">{{ casestudy.seo }}
      </h1>
      <h2 class="text-4xl font-black text-white">{{ casestudy.title }}</h2>
      <p class="text-white">{{ casestudy.description }}</p>
      <div class="flex gap-4 py-2 items-center ">
        <p class="p-2 bg-neutral-50/20  rounded-lg border-2 border-white text-white text-xs">{{ casestudy.price }}</p>
        <p class="p-2 bg-neutral-50/20  rounded-lg border-2 border-white text-white text-xs">{{ casestudy.time }}</p>
        <img class="bg-neutral-50/20 h-10 w-10 p-2 rounded-lg border-2 border-white text-xs" :src=casestudy.tools1
          alt="">
        <img class="bg-neutral-50/20 h-10 w-10 p-2 rounded-lg border-2 border-white text-xs" :src=casestudy.tools2
          alt="">


      </div>
      <a href="/#pricing"
        class="text-sm my-2  sm:text-base px-4 font-bold bg-btn-black shadow-lg shadow-white/20 rounded-full py-2 text-white">
        Projekt Starten </a>

    </div>


    <!-- Indicator dots/bars -->

    <div class="bg-primary">
      <div class="relative z-10 -mt-12 px-1 sm:px-4">
        <!-- Image slider -->
        <div class="flex overflow-x-auto gap-x-6 scrollbar-hide" ref="slider">
          <div v-for="(img, index) in images" :key="index" class="flex-shrink-0 w-[420px] sm:w-[640px]">
            <img :src="img" :alt="`Image ${index + 1}`" class="object-contain rounded-xl shadow-xl">
          </div>
        </div>
        <div class="flex justify-center sm:justify-start mt-4 gap-2">
          <button v-for="(img, index) in images" :key="index" @click="scrollToImage(index)"
            class="h-3 rounded-full transition-all duration-300 ease-in-out"
            :class="[currentImageIndex === index ? 'w-10 background-gradient' : 'w-3 bg-gray-300 hover:bg-gray-400']">
          </button>
        </div>
      </div>
      <div class="relative  overflow-hidden bg-primary px-6 py-12 sm:py-32 lg:overflow-visible lg:px-0">

        <div
          class="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div
            class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">



                <h3 class="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Case Study</h3>
                <p class="mt-4 text-lg leading-2 text-gray-700">{{ casestudy.introtext }}</p>
              </div>
            </div>
          </div>
          <div class=" px-4 sm:p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div class="mx-auto w-full max-w-[340px] aspect-square sm:max-w-[500px] lg:sticky lg:top-4">
              <div class="h-full w-full p-3 rounded-2xl background-gradient flex flex-col justify-between items-center">
                <img class="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 w-full h-3/5 object-cover"
                  src="https://images.axios.com/XxUDleoVWgA_CV8n0kNWbFgMigY=/253x0:2962x1524/1920x1080/2023/09/05/1693873498138.jpg" alt="Zoom Call" />
                <div class="flex flex-col items-center justify-center flex-grow">
                  <h2 class="text-xl sm:text-3xl mt-2 mb-1 sm:my-3 font-bold tracking-tight text-white text-center">
                    Lass uns über dein Projekt reden
                  </h2>
                  <a href="https://calendly.com/tilltech/tilltech-infogesprach?month=2024-07"
                    class="text-sm px-4 font-bold bg-btn-black shadow-lg shadow-white/20 rounded-full py-2 text-white">
                    Gratis Call Buchen
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p v-html="casestudy.workdescription"></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue';
import { casestudy } from '../../components/store';
import supabase from '../../lib/supabase';
import { useRoute } from 'vue-router';

const route = useRoute();
let singlecase = reactive({});
const images = ref([]);
const slider = ref(null);
const currentImageIndex = ref(0);

const fetchPost = async (slug) => {
  slug = slug || route.params.slug;

  if (!slug) {
    console.error('No ID provided or found in route parameters');
    return;
  }

  const found = casestudy.singlecase.find(x => x.slug == parseInt(slug));

  if (found) {
    Object.assign(casestudy, found);
    // If the images are stored in the singlecase object
    images.value = casestudy.images ? casestudy.images.split(',') : [];
    return;
  }

  let { data, error } = await supabase
    .from('casestudy')
    .select()
    .eq('slug', slug)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  Object.assign(casestudy, data);

  // Split the images string into an array
  images.value = casestudy.images ? casestudy.images.split(',') : [];

  // If images are stored as JSON array in Supabase, use this instead:
  // images.value = casestudy.images || [];
};

const scrollToImage = (index) => {
  if (slider.value) {
    const imageWidth = slider.value.children[0].offsetWidth;
    slider.value.scrollTo({
      left: index * imageWidth,
      behavior: 'smooth'
    });
    currentImageIndex.value = index; // Update the currentImageIndex here
  }
};

const updateCurrentImageIndex = () => {
  if (slider.value) {
    const imageWidth = slider.value.children[0].offsetWidth;
    const newIndex = Math.round(slider.value.scrollLeft / imageWidth);
    if (newIndex !== currentImageIndex.value) {
      currentImageIndex.value = newIndex;
    }
  }
};

onMounted(() => {
  fetchPost(route.params.slug);
  if (slider.value) {
    slider.value.addEventListener('scroll', updateCurrentImageIndex);
  }
});

onUnmounted(() => {
  if (slider.value) {
    slider.value.removeEventListener('scroll', updateCurrentImageIndex);
  }
});
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>