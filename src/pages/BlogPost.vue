<script setup>
import { reactive, computed } from 'vue';
import { marked } from 'marked';
import { store } from '../components/store';
import supabase from '../lib/supabase';
import { useRoute } from 'vue-router';


// Configure marked
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
  return marked(post.body || '');
});

const schlusswortHtml = computed(() => {
  return marked(post.schlusswort || '');
});

const route = useRoute();

const fetchPost = async (slug) => {
  slug = slug || route.params.slug;

  if (!slug) {
    console.error('No slug provided or found in route parameters');
    return;
  }

  const found = store.posts.find(x => x.slug === slug);

  if (found) {
    Object.assign(post, found);
    return;
  }

  let { data, error } = await supabase
    .from('posts')
    .select()
    .eq('slug', slug)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  Object.assign(post, data);
};

// Call fetchPost with the slug from the route
fetchPost(route.params.slug);
</script>


<template>
  <div class="Post bg-primary">

    <div v-if="!post">No Post found.</div>

    <div v-else>
      <div class=" py-20 sm:py-24 background-gradient">


        <h1 class="text-4xl sm:text-5xl text-white  font-black text-center">{{ post.title }}</h1>


        <div class="relative mt-2 flex justify-center items-center gap-x-2">
          <img src="/Branding/TillTech.webp" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
          <div class="text-sm leading-6">
            <p class=" text-white">
              Created by TillTech
            </p>

          </div>
        </div>
      </div>


      <div class="max-w-4xl mx-auto ">




        <img :src=post.img :alt=post.alt class=" rounded-xl mx-auto my-6 shadow-xl" />



        <p class="my-4 px-4 markdown-body" v-html="bodyHtml"></p>

        <div
          class="relative isolate overflow-hidden background-gradient-black px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Melde dich
            jetzt für unseren Newsletter an</h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Die neuesten Nachrichten, Artikel
            und Ressourcen, wöchentlich in deinem Posteingang.</p>
          <form class="mt-6 sm:flex  sm:max-w-md mx-auto">
            <label for="email-address" class="sr-only">Email addresse</label>
            <input type="email" name="email-address" id="email-address" autocomplete="email" required=""
              class="w-full min-w-0 appearance-none rounded-md border-0 bg-white/20 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/50 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
              placeholder="Gib deine E-Mail Adresse ein" />
            <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button type="submit"
                class="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Anmelden</button>
            </div>
          </form>

        </div>


        <p v-html="schlusswortHtml" class=" markdown-body px-4 pb-4 text-start"></p>
      </div>






    </div>
  </div>
</template>


<style>
.markdown-body h1 {
  color: #322261 !important;
  line-height: 4.5rem !important;
  font-size: 3.75rem !important;
  font-weight: 900 !important;
  margin-bottom: 1rem !important;
}

.markdown-body h2 {
  color: #322261 !important;
  line-height: 3rem !important;
  font-size: 2.75rem !important;
  font-weight: 900 !important;
  margin-bottom: 0.75rem !important;


}

.markdown-body h3 {
  color: #322261 !important;
  line-height: 3rem !important;
  font-size: 2.2rem !important;
  font-weight: 900 !important;
  margin-bottom: 0.5rem !important;


}

.markdown-body h4 {
  color: #322261 !important;
  line-height: 2.5rem !important;
  font-size: 1.938rem !important;
}

.markdown-body h5 {
  color: #322261 !important;
  line-height: 2rem !important;
  font-size: 1.563rem !important;
}

.markdown-body h6 {
  color: #322261 !important;
  line-height: 1.75rem !important;
  font-size: 1.25rem !important;
}

.markdown-body p {
  color: #302457 !important;
  line-height: 1.5rem !important;
  font-size: 1rem !important;
}

.markdown-body .highlight {
  color: #62668A !important;
}

.markdown-body summary {
  cursor: pointer;

  color: #322261 !important;

  line-height: 1.75rem !important;
  font-size: 1.25rem !important;

  font-weight: 800 !important;
  margin-bottom: 5px;
}

.markdown-body details[open] summary {

  color: #62668A !important;
}

.markdown-body details {
  margin-bottom: 15px;
}

.markdown-body summary::-webkit-details-marker {
  display: none;
}

.markdown-body details p {
  padding: 10px;
  color: #322261 !important;



  margin: 0;
}

/* Mobile styles */
@media (max-width: 768px) {
  .markdown-body h1 {
    line-height: 2rem !important;
    font-size: 2rem !important;
    font-weight: 900;
  }

  .markdown-body h2 {
    line-height: 2.25rem !important;
    font-size: 1.75rem !important;
    font-weight: 900 !important;
  }

  .markdown-body h3 {
    line-height: 1.8rem !important;
    font-size: 1.45rem !important;
    font-weight: 900 !important;
  }

  .markdown-body h4 {
    line-height: 1.75rem !important;
    font-size: 1.375rem !important;
  }

  .markdown-body h5 {
    line-height: 1.625rem !important;
    font-size: 1.25rem !important;
  }

  .markdown-body h6 {
    line-height: 1.5rem !important;
    font-size: 1.125rem !important;
  }

  .markdown-body p {
    line-height: 1.5rem !important;
    font-size: 1rem !important;
  }



  .markdown-body summary {
    cursor: pointer;

    color: #322261 !important;

    line-height: 1.5rem !important;
    font-size: 1rem !important;

    font-weight: 700 !important;
    margin-bottom: 5px;
  }

  .markdown-body details[open] summary {

    color: #62668A !important;
  }

  .markdown-body details {
    margin-bottom: 15px;
  }

  .markdown-body summary::-webkit-details-marker {
    display: none;
  }

  .markdown-body details p {
    padding: 10px;



    margin: 0;
  }
}
</style>