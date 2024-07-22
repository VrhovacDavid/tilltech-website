<template>
  <div class="">
    <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div
        class="overflow-hidden background-gradient-black px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Gratis TillTech Icon Pack<br />+200 Icons
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">Eine Kollektion von +200 Icons in Vector und SVG Formaten</p>

          <form class="mt-6 sm:flex sm:max-w-md" ref="form" @submit.prevent="sendEmail">
            <label for="email-address" class="sr-only">Email address</label>
            <input type="email" name="user_email"
              class="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/40 placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
              placeholder="Gib deine E-Mail Adresse ein" required />
            <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button type="submit"
                class="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Download</button>
            </div>
          </form>

          <p v-if="message" :class="{'mt-4 text-small': true, 'text-green-500': !isError, 'text-red-500': isError}">
            {{ message }}
          </p>

        </div>
        <div class="relative mt-16 h-80 lg:mt-8">
          <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-xl bg-white/5 ring-1 ring-white/10"
            src="/Download.webp" alt="App screenshot" width="1824" height="1080" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      message: '',
      isError: false,
    };
  },  
  methods: {
    sendEmail() {
      emailjs
        .sendForm('service_hhs1k3s', 'template_28oclks', this.$refs.form, 'g9YwDHgxktt14tVn_')
        .then(
          () => {
            this.message = 'E-Mail versendet! Überprüfe gegebenenfalls deinen Spam Ordner.';
            this.isError = false;
          },
          (error) => {
            console.log('FAILED...', error.text);
            this.message = 'Fehler beim Senden der E-Mail.';
            this.isError = true;
          },
        );
    },
  },
};
</script>
