<template>
    <header class=" w-full absolute top-0 left-0 z-20 ">
      <nav class=" flex    items-center  justify-between p-6 lg:px-8" aria-label="Global">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">TillTech</span>
          <img class="h-8 w-16" src="/Branding/TillTech.svg" alt="TillTech Logo" />
        </a>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-8 items-center">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
          <a href="/#pricing" class="text-sm  px-4 font-bold leading-6 bg-btn shadow-xl rounded-full py-2 text-white">Projekt Starten</a>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-40 " />
        <DialogPanel class="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-primary  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">TillTech</span>
           <img class="h-8 w-auto" src="/Branding/TillTech_Small.svg" alt="TillTech Logo" />

            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" @click="mobileMenuOpen = false" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-purple-100">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="/#pricing" @click="mobileMenuOpen = false" class="text-sm  px-6 font-bold leading-6 bg-btn shadow-xl rounded-full py-3 text-white ">Projekt Starten</a>
            </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Preise', href: '/#pricing' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Gratis Download', href: '/#download' },
  ]
  
  const mobileMenuOpen = ref(false)
  </script>