<template>
  <div class="overflow-hidden  py-6 sm:py-12 mt-12 px-4">
    <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
        <div class=" lg:px-0 lg:pr-4 lg:pt-4">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Du kennst das sicher...</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">Mitten in einem wichtigen Projekt merkst du plötzlich, dass
              du professionelle IT-Dienstleistungen brauchst. Die Suche beginnt, du verbringst Stunden mit Anfragen und
              Verhandlungen, nur um am Ende unzufrieden zu sein. <strong>Frustrierend, oder?</strong></p>
            <h3 class="mt-10 text-xl font-bold">Erkennst du dich wieder?</h3>
            <dl class="mt-4 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name">
                <div class="flex items-center  gap-2">
                  <img src="/Icons/Dot.svg" alt="Dot" class=" w-4 h-4">
                  <dd>{{ feature.description }}</dd>
                </div>

              </div>
              <h3 class="mt-10 text-xl font-bold text-gray-900">Wir haben die Lösung!</h3>
            </dl>
            <p class="mt-4 text-gray-600">Alles an einem Ort. Stelle so viele Anfragen, wie du willst, und wir
              bearbeiten sie innerhalb von 1-2 Tagen. Kein lästiges Agentur-Hopping mehr. Pausiere oder kündige dein Abo
              nach Bedarf.

              <strong class="text-gray-900"> <br /> Bedeutet für dich:</strong> Mehr Zeit fürs Wesentliche, weniger Stress und konstante,
              hochwertige Ergebnisse für dein Business. Klingt gut, oder?
            </p>


          </div>
        </div>
        <ModalVideo
    :thumb="VideoThumb"
    :thumbWidth="768"
    :thumbHeight="432"
    :video="VideoSrc"
    :videoWidth="1920"
    :videoHeight="1080" />


      </div>
    </div>
  </div>
</template>

<script setup>
import ModalVideo from './ModalVideo.vue';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'

const VideoSrc = 'https://videocdn.cdnpk.net/videos/fd7e918a-0d3b-4c38-ad02-f07d8435f8ad/horizontal/previews/clear/large.mp4?token=exp=1721648353~hmac=913ca3bf6b2665adc72e9dbea9b8818e12539987e1151d1ced6ee3c43c6a0d24'
const VideoThumb = '/TillTech.ico'

const features = [
  {
    name: 'Grafik Design',
    description:
      'Du brauchst dringend ein neues Logo oder ein schickes Design für deine Webseite, aber jede Agentur hat wochenlange Wartezeiten.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Marketing',
    description: 'Deine letzte Kampagne hat nicht so gezündet, wie du es dir erhofft hast. Du suchst nach neuen Ideen und einer Agentur, die schnell umsetzt.',
    icon: LockClosedIcon,
  },
  {
    name: 'Content Creation',
    description: 'Du willst regelmäßig hochwertigen Content für deine Social Media Kanäle, aber die Koordination mit verschiedenen Textern und Designern raubt dir den letzten Nerv.',
    icon: ServerIcon,
  },
]
</script>