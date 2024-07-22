<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { TransitionRoot } from '@headlessui/vue'



const duration: number = 5000
const frame = ref<number>(0)
const firstFrameTime = ref(performance.now())
const active = ref<number>(0)
const progress = ref<number>(0)


const items = [
  {
    img: "/Intro/Schritt1.webp",

    title: 'Einfacher Start',
    desc: 'Hole den passenden Plan und erhalte eine Bestätigungs-E-Mail. Melde dich bei Trello an, um loszulegen.',
    buttonIcon: '/Icons/search.svg',
  },
  {
    img: "/Intro/Schritt2.webp",




    title: 'Anfragen stellen',
    desc: 'Stelle deine IT-Anfragen direkt über Trello. Unser Team bearbeitet sie sofort.',
    buttonIcon: '/Icons/payment.svg',
  },
  {
    img: "/Intro/Schritt3.webp",



    title: 'Schnelle Lieferung',
    desc: 'Innerhalb von 1-2 Tagen erhältst du deine fertigen Ergebnisse. Einfach, schnell und effizient.',
    buttonIcon: '/Icons/mice.svg',
  },

]


const startAnimation = () => {
  firstFrameTime.value = performance.now()
  frame.value = requestAnimationFrame(animate)
}

const animate = (now: number) => {
  let timeDifference = now - firstFrameTime.value
  let timeFraction = Math.max(0, timeDifference) / duration
  if (timeFraction <= 1) {
    progress.value = timeFraction * 100
    frame.value = requestAnimationFrame(animate)
  } else {
    timeFraction = 1
    progress.value = 0
    active.value = (active.value + 1) % items.length
  }
}

onMounted(() => startAnimation())

onUnmounted(() => cancelAnimationFrame(frame.value))

watch(active, () => {
  cancelAnimationFrame(frame.value)
  startAnimation()
})
</script>

<template>

  <div class="max-w-7xl mt-12 py-6 sm:py-12  mx-auto flex flex-col  sm:flex-row items-center">

    <div class="px-6 py- w-full justify-center  flex -order-first sm:order-first ">
      <div class="transition-all duration-150 delay-300 ease-in-out">
        <div class="relative flex flex-col ">

          <template :key="index" v-for="(item, index) in items">
            <TransitionRoot :show="active === index" enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 scale-105" enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-300 absolute" leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <img class="rounded-xl h-full w-full" :src="item.img" :alt="item.title"
                loading="lazy">
            </TransitionRoot>
          </template>

        </div>
      </div>
    </div>


    <div class=" w-full ">
      <div class="px-6 sm:max-w-sm md:max-w-3xl mx-auto flex flex-col  gap-4 sm:my-8">




        <h2 class="font-bold text-4xl">So funktioniert's!</h2>

        <template :key="index" v-for="(item, index) in items">


          <button class=" rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group my-2 "
            @click="active = index">
            <span class="text-start flex flex-col items-start"
              :class="active === index ? '' : 'opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity'">
              <div class="flex flex-row items-center justify-center gap-x-4">
                <span class="flex items-center justify-center relative w-10 h-10 rounded-full background-gradient mb-2">
                  <img :src="item.buttonIcon" :alt="item.title">
                </span>
                <span class="block text-lg  font-black text-slate-900 mb-2">{{ item.title }}</span>
              </div>

              <span class="block text-sm text-start font-medium text-slate-900 mb-2">{{ item.desc }}</span>
              <span class="block relative w-full bg-slate-200 h-1 rounded-full" role="progressbar"
                :aria-valuenow="active === index ? progress : 0" aria-valuemin="0" aria-valuemax="100">
                <span class="absolute inset-0 bg-indigo-500 rounded-[inherit]"
                  :style="`${active === index ? `width: ${progress}%` : 'width: 0%'}`"></span>
              </span>
            </span>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>