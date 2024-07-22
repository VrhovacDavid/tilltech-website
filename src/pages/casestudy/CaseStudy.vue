<template>


  <div v-if="!casestudy">No Post found.</div>

  <div v-else="casestudy">



    <div class="h-96 background-gradient flex flex-col justify-center items-start px-4">
      <h1 class="p-2 bg-neutral-50/20 my-2  rounded-lg border-2 text-xs border-white text-white">{{ casestudy.seo }}</h1>
      <h2 class="text-4xl font-black text-white">{{ casestudy.title }}</h2>
      <p class="text-white">{{ casestudy.description }}</p>
      <div class="flex gap-4 py-2 items-center ">
        <p class="p-2 bg-neutral-50/20  rounded-lg border-2 border-white text-white text-xs">{{ casestudy.price }}</p>
        <p class="p-2 bg-neutral-50/20  rounded-lg border-2 border-white text-white text-xs">{{ casestudy.time }}</p>
        <img class="bg-neutral-50/20 h-10 w-10 p-2 rounded-lg border-2 border-white text-xs" :src=casestudy.tools1 alt="">
        <img class="bg-neutral-50/20 h-10 w-10 p-2 rounded-lg border-2 border-white text-xs" :src=casestudy.tools2 alt="">


      </div>
      <a href="/#pricing"
        class="text-sm my-2  sm:text-base px-4 font-bold bg-btn-black shadow-lg shadow-white/20 rounded-full py-2 text-white">
        Projekt Starten </a>

    </div>

    <div class="relative  overflow-hidden bg-primary px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

      <div
        class="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">

              <div class="bg-white rounded-r-xl p-4 border-l-4 border-indigo-500">
                <img class="py-2" src="/PortfolioIcons/Stars.svg" alt="Stars">
                <p class="">Wir haben begonnen Meta Kampagnen mit TillTech zu schalten und sehr gute Ergebnisse erzielt.
                  Darüber hinaus waren auch Produktfotos und Filmschnitte mit dabei, diese wurden dann für die Kampagnen
                  verwendet und können auch anderswo eingesetzt werden. Einfache und zuverlässige Zusammenarbeit. Danke
                  dir David 😉</p>
                <div class="flex items-center gap-2 py-2">
                  <img src="/Testimonials/JessicaZeder.webp" alt="" class=" h-12 rounded-full ">
                  <div>
                    <p>Jessica Zeder</p>
                    <p class="text-xs">Dipon Schweiz GmbH</p>
                  </div>

                </div>
              </div>

              <h3 class="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Case Study</h3>
              <p class="mt-4 text-lg leading-2 text-gray-700">{{casestudy.introtext}}</p>
            </div>
          </div>
        </div>
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div class="p-2 rounded-2xl background-gradient flex items-center flex-col">
            <img class=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 w-[600px] "
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="" />
            <h2 class="text-3xl my-4 font-bold tracking-tight text-white text-center sm:text-4xl">Lass uns über dein Projekt reden
            </h2>
            <a href="#"
              class="text-sm my-4 sm:text-base px-4 font-bold bg-btn-black shadow-lg shadow-white/20 rounded-full py-2 text-white">
              Projekt Starten </a>

          


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



</template>

<script setup>
import { reactive } from 'vue';
import { casestudy } from '../../components/store';
import supabase from '../../lib/supabase';
import { useRoute } from 'vue-router';

const route = useRoute();

let singlecase = reactive({});

const fetchPost = async (slug) => {
  // Die 'id' sollte von den Routenparametern kommen
  slug = slug || route.params.slug;

  // Überprüfen, ob die 'id' tatsächlich definiert ist
  if (!slug) {
    console.error('No ID provided or found in route parameters');
    return;
  }

  const found = casestudy.singlecase.find(x => x.slug == parseInt(slug));

  if (found) {
    Object.assign(casestudy, found);
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


};
// Die ID direkt beim Aufruf der Funktion übergeben
fetchPost(route.params.slug);

</script>