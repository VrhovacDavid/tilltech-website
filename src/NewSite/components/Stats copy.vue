<script setup>
import { ref } from 'vue'
import Counter from './Counter.vue'

const stats = ref([
  {
    number: 500,
    suffix: 'K',
    text: 'Organische Besuche pro Monat',
  },
  {
    number: 3.2,
    suffix: 'K',
    text: 'Backlinks von hochwertigen Domains.',
  },
  {
    number: 1.2,
    suffix: 'M+',
    text: 'Monatliche Impressionen in den Suchergebnissen.',
  },
  {
    number: 192,
    suffix: 'K',
    text: 'Klicks aus organischen Suchergebnissen pro Monat.',
  },
])
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="max-w-sm mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-4 md:-mx-5 md:gap-0 items-start md:max-w-none">

      <template v-for="stat in stats">
        <div class="relative text-center md:px-5 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-8 after:border-l after:border-zinc-300 after:border-dashed last:after:hidden">
          <h4 class="font-inter-tight text-2xl md:text-3xl font-bold tabular-nums mb-2"><Counter :number="stat.number" />{{ stat.suffix }}</h4>
          <p class="text-sm text-zinc-500">{{ stat.text }}</p>
        </div>
      </template>

    </div>

  </div>
</template>
