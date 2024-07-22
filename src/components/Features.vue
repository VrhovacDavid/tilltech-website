<template>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto  lg:text-center">

        <h3 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Es war noch nie so einfach!</h3>
        <p class="mt-6 text-lg leading-8 text-gray-600">Geniesse die Freiheit, dich auf dein Geschäft zu konzentrieren, während wir uns um deine kreativen Bedürfnisse kümmern.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-bold leading-7 text-gray-900">
              <div class="h-12 w-12 background-gradient rounded-lg flex items-center justify-center">
                <img :src=feature.img :alt=feature.name class="h-6 w-6">
              </div>

              {{ feature.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6">

              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>

</template>

<script setup>


const features = [
  {
    img:'/Icons/Time.svg',
    name: 'Alles an einem Ort',
    description:
      'Spare kostbare und wertvolle Zeit, indem du alle deine IT Anfragen an einem Ort erledigen lässt ',


  },
  {
    img:'/Icons/Flexible.svg',
    name: 'Flexibilität pur',
    description:
      'Pausiere oder kündige dein Abonnement jederzeit nach Bedarf, ohne langfristige Verpflichtungen',


  },
  {
    img:'/Icons/Lightning.svg',
    name: 'Schnelle Ergebnisse',
    description: 'Profitiere von schnellen Bearbeitungszeiten und erhalte deine Anfragen innerhalb von 1-2 Tagen'


  },
]
</script>