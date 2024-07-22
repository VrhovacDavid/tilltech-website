<script setup>
import { reactive } from 'vue';
import { store } from '../components/store';
import supabase from '../lib/supabase';
import { useRoute } from 'vue-router';

const route = useRoute();

let post = reactive({});

const fetchPost = async (id) => {
    // Die 'id' sollte von den Routenparametern kommen
    id = id || route.params.id;

    // Überprüfen, ob die 'id' tatsächlich definiert ist
    if (!id) {
        console.error('No ID provided or found in route parameters');
        return;
    }

    const found = store.posts.find(x => x.id == parseInt(id));

    if (found) {
        Object.assign(post, found);
        return;
    }

    let { data, error } = await supabase
        .from('posts')
        .select()
        .eq('id', id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    Object.assign(post, data);


};

// Die ID direkt beim Aufruf der Funktion übergeben
fetchPost(route.params.id);

</script>


<template>
    <div class="Post bg-primary">

        <div v-if="!post">No Post found.</div>

        <div v-else>
            <div class=" py-20 sm:py-24 background-gradient">


                <h1 class="text-4xl sm:text-6xl text-white  font-black text-center">{{ post.title }}</h1>


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





                <div class="mx-auto py-4 px-4">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
                        <div class=" lg:px-0 lg:pr-4 lg:pt-4">
                            <div class="mx-auto max-w-4xl lg:mx-0 lg:max-w-lg">

                                <p class="mt-4" v-html="post.inhaltsverzeichniss"></p>


                            </div>
                        </div>

                        <img :src=post.img :alt=post.alt class=" rounded-xl  shadow-xl" />

                    </div>
                </div>







                <p class="my-4 px-4" v-html="post.body"></p>

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
                <h1 class="text-4xl pt-12 pb-4 font-black px-4 ">Schlusswort</h1>

                <p v-html="post.schlusswort" class=" px-4 pb-4 text-start"></p>
            </div>






        </div>
    </div>
</template>