<template>


  <div v-if="!casestudy">No Post found.</div>

  <div v-else="casestudy">



    <div class="h-[600px] background-gradient  flex flex-col justify-center items-start px-4">

      <h1
        class="p-2 bg-neutral-50/20 my-4  rounded-lg border-2 text-mobile-bodySM leading-mobile-bodySm border-white text-white">
        {{ casestudy.seo }}
      </h1>
      <div class="max-w-4xl">
        <h2 class="text-mobile-h1 leading-mobile-h1 font-black text-white mb-2" v-html="casestudy.casetitle"></h2>
        <p class="text-white text-mobile-body leading-mobile-body" v-html="casestudy.description"></p>
        <div class="flex gap-4 pb-6 pt-4 sm:pb-6 items-center ">
          <p class="p-2 bg-neutral-50/20  rounded-lg border-2 border-white text-white text-xs">{{ casestudy.price }}</p>
          <p class="p-2 bg-neutral-50/20  rounded-lg border-2 border-white text-white text-xs">{{ casestudy.time }}</p>
          <img class="bg-neutral-50/20 h-10 w-10 p-2 rounded-lg border-2 border-white text-xs" :src=casestudy.tools1
            alt="">
          <img class="bg-neutral-50/20 h-10 w-10 p-2 rounded-lg border-2 border-white text-xs" :src=casestudy.tools2
            alt="">


        </div>
        <a href="/#pricing"
          class="text-mobile-bodyLG    sm:text-base px-6 font-bold bg-btn-black shadow-lg shadow-white/20 rounded-full py-2.5 text-white">
          Projekt Starten </a>

      </div>
    </div>

    <!-- Indicator dots/bars -->

    <div class="bg-primary">
      <div class="relative z-10 -mt-12 px-1 sm:px-4 ">
        <!-- Image slider -->
        <div class="flex overflow-x-auto gap-x-6 scrollbar-hide pb-4" ref="slider">
          <div v-for="(img, index) in images" :key="index" class="flex-shrink-0 w-full  sm:w-[800px]">
            <img :src="img" :alt="`Image ${index + 1}`" class="object-contain rounded-xl shadow-lg">
          </div>
        </div>
        <div class="flex justify-center sm:justify-start mt-4 gap-2">
          <button v-for="(img, index) in images" :key="index" @click="scrollToImage(index)"
            class="h-3 rounded-full transition-all duration-300 ease-in-out"
            :class="[currentImageIndex === index ? 'w-10 background-gradient' : 'w-3 bg-gray-300 hover:bg-gray-400']">
          </button>
        </div>
      </div>
      <div class="relative  overflow-hidden bg-primary px-4 py-12 sm:py-32 lg:overflow-visible lg:px-0">

        <div
          class="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div
            class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">




              <p class=" markdown-body " v-html="bodyHtml"></p>


            </div>
          </div>
          <div class=" px-4 sm:p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div class="mx-auto w-full max-w-[340px] aspect-square sm:max-w-[500px] lg:sticky lg:top-4">
              <div class="h-full w-full p-3 rounded-2xl background-gradient flex flex-col justify-between items-center">
                <img class="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 w-full h-3/5 object-cover"
                  src="https://images.axios.com/XxUDleoVWgA_CV8n0kNWbFgMigY=/253x0:2962x1524/1920x1080/2023/09/05/1693873498138.jpg"
                  alt="Zoom Call" />
                <div class="flex flex-col items-center justify-center flex-grow">
                  <h2
                    class="text-mobile-h3  leading-mobile-h3  font-black sm:text-3xl mt-2 mb-1 sm:my-3  tracking-tight text-white text-center">
                    Lass uns über dein Projekt reden
                  </h2>
                  <a href="https://calendly.com/tilltech/tilltech-infogesprach?month=2024-07"
                    class="text-mobile-bodyLG my-2 px-6 font-bold bg-btn-black shadow-lg shadow-white/20 rounded-full py-2.5 text-white">
                    Gratis Call Buchen
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>



</template>

<script setup>
import { marked } from 'marked';
import { reactive, ref, onMounted, onUnmounted, computed } from 'vue';
import { casestudy } from '../../components/store';
import supabase from '../../lib/supabase';
import { useRoute } from 'vue-router';

marked.setOptions({
  breaks: true,
  renderer: new marked.Renderer()
});

const renderer = {
  paragraph(text) {
    return text;
  }
};

marked.use({ renderer });

const post = reactive({});

const bodyHtml = computed(() => {
  return marked(casestudy.body || '');
});



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


.markdown-body h1 {
  font-size: 2rem !important;
  line-height: 2rem !important;
  font-weight: 900 !important;
  padding-top: 2em;
  padding-bottom: 4em;
  margin-bottom: 4em;
  color: #322261;
}

.markdown-body h2 {
  font-size: 1.75rem !important;
  line-height: 2.25rem !important;
  font-weight: 900 !important;
  color: #322261;
}

.markdown-body h3 {
  font-size: 1.563rem !important;
  line-height: 2rem !important;
  font-weight: 900 !important;
  margin-top: 1.5rem;
  color: #322261;

}

.markdown-body h4 {
  font-size: 1.375rem !important;
  line-height: 1.75rem !important;
  font-weight: 900 !important;
  margin-bottom: 0.5em;
  color: #666;
}

.markdown-body h5 {
  font-size: 1.25rem !important;
  line-height: 1.625rem !important;
  font-weight: 900 !important;
  margin-bottom: 0.5em;
  color: #777;
}

.markdown-body h6 {
  font-size: 1.125rem !important;
  line-height: 1.5rem !important;
  font-weight: 900 !important;
  margin-bottom: 0.5em;
  color: #888;
}

.markdown-body p {
  font-size: 1rem !important;
  line-height: 1.5rem !important;
  padding-bottom: 0.5rem !important;
  color: #302457;
}

@media (min-width: 1024px) {
  .markdown-body h1 {
    font-size: 3.75rem !important;
    line-height: 4.5rem !important;
  }

  .markdown-body h2 {
    font-size: 3rem !important;
    line-height: 3.75rem !important;
  }

  .markdown-body h3 {
    font-size: 2.438rem !important;
    line-height: 3rem !important;
  }

  .markdown-body h4 {
    font-size: 1.938rem !important;
    line-height: 2.5rem !important;
  }

  .markdown-body h5 {
    font-size: 1.563rem !important;
    line-height: 2rem !important;
  }

  .markdown-body h6 {
    font-size: 1.25rem !important;
    line-height: 1.75rem !important;
  }

  .markdown-body p {
    font-size: 1rem !important;
    line-height: 1.5rem !important;
  }
}

.markdown-body img {
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1em 0;
}
</style>