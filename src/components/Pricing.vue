<template>
    <div class=" py-16 sm:py-32">
        <div class="mx-auto max-w-5xl px-4 lg:px-8">
            <div class="mx-auto max-w-7xl text-start">

                <h2 class="mt-2 text-mobile-h2 leading-mobile-h2 sm:text-h3 sm:leading-h3 font-black tracking-tight text-headings sm:text-5xl">Unsere Flexiblen Preispläne
                </h2>

            </div>
            <p class="mx-auto mt-6 max-w-7xl text-start text-mobile-bodyLG leading-mobile-bodyLG text-highlights">Wir wissen, wie schnell sich
                die Bedürfnisse eines Unternehmens ändern können. Deshalb bieten wir flexible Preispläne, die sich
                deinem Business anpassen.
            </p>

            <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">



                <div class="border-2 p-6 rounded-3xl background-gradient-black flex flex-col justify-between sm:h-[600px] h-[500px]">
    <div class="flex flex-col gap-y-6">
        <div class="flex w-48 justify-start items-center space-x-2 py-2.5 sm:py-4 bg-neutral-50/20 p-2 rounded-xl ring-1 ring-white">
            <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-100 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span class="text-white text-mobile-bodySM font-semibold">Wenig Plätze verfügbar</span>
        </div>
        <h3 class="text-4xl sm:text-5xl md:text-6xl font-black text-white">Jetzt TillTech beitreten</h3>
    </div>

    <div class="mt-4 sm:mt-6 md:mt-8"> <!-- Added margin-top here -->
        <a href="https://calendly.com/tilltech/tilltech-infogesprach?month=2024-07">
            <div class="flex border-2 rounded-lg p-2 items-center gap-x-4 hover:bg-neutral-50/10 cursor-pointer my-2">
                <div class="flex-flex-col">
                    <h4 class="text-white text-mobile-bodyLG leading-mobile-bodyLG font-black sm:text-xl">Buche einen 15Min. Intro Call</h4>
                    <p class="text-mobile-bodySM leading-mobile-bodySM sm:text-sm text-white">Erfahre mehr darüber, wie TillTech funktioniert und wie wir helfen können.</p>
                </div>
                <div>
                    <img class="h-10 w-10" src="/Icons/Forward.svg" alt="">
                </div>
            </div>
        </a>

        <a href="https://calendly.com/tilltech/tilltech-infogesprach?month=2024-07">
            <div class="flex border-2 rounded-lg p-2 items-center gap-x-4 hover:bg-neutral-50/10 cursor-pointer my-2">
                <div class="flex-flex-col">
                    <h4 class="text-white font-black text-mobile-bodyLG leading-mobile-bodyLG  sm:text-xl">Empfiehl jemanden & verdiene</h4>
                    <p class="text-mobile-bodySM leading-mobile-bodySM sm:text-sm text-white">Verdiene 10% monatliche wiederkehrende Provisionen für jede Empfehlung.</p>
                </div>
                <div>
                    <img class="h-10 w-10" src="/Icons/Forward.svg" alt="">
                </div>
            </div>
        </a>
    </div>
</div>

                <div v-for="tier in tiers" :key="tier.id" class="shadow-lg bg-white"
                    :class="[tier.featured ? 'bg-gray-900 ring-gray-900' : 'ring-gray-200', 'rounded-3xl p-8 ring-1 xl:p-10']">
                    <h3 class="text-4xl font-black text-headings">Mitgliedschaft</h3>


                    <!-- Switch for selecting payment frequency -->
                    <div class="mt-8 flex justify-start ">
                        <fieldset aria-label="Payment frequency">
                            <RadioGroup v-model="frequency"
                                class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-mobile-bodySM font-semibold leading-5 background-gradient ring-1 ring-inset ring-gray-200">
                                <RadioGroupOption as="template" v-for="option in frequencies" :key="option.value"
                                    :value="option" v-slot="{ checked }">
                                    <div
                                        :class="[checked ? 'bg-btn-black text-white' : 'text-gray-100', 'cursor-pointer rounded-full px-2.5 py-1']">
                                        {{ option.label }}</div>
                                </RadioGroupOption>
                            </RadioGroup>
                        </fieldset>
                    </div>

                    <!-- Display selected price based on frequency -->
                    <p class="mt-6 flex items-baseline gap-x-1">
                        <span
                            :class="[tier.featured ? 'text-white' : 'text-headings', 'text-mobile-h1 font-black tracking-tight']">{{
                                typeof tier.price === 'string' ? tier.price : tier.price[frequency.value] }}</span>
                        <span v-if="typeof tier.price !== 'string'"
                            :class="[tier.featured ? 'text-gray-300' : 'text-highlights', 'text-mobile-body font-semibold leading-6']">{{
                                frequency.priceSuffix }}</span>
                    </p>


                    <ul role="list"
                        :class="[tier.featured ? 'text-gray-300' : 'text-paragraphs', 'mt-8 space-y-3 text-mobile-body leading-6 xl:mt-10']">
                        <li v-for="feature in tier.features[frequency.value]" :key="feature" class="flex gap-x-3">
                            <CheckIcon :class="[tier.featured ? 'text-white' : 'text-indigo-600', 'h-6 w-5 flex-none']"
                                aria-hidden="true" />
                            {{ feature }}
                        </li>
                    </ul>
                    <div class="flex flex-row items-center ">
                        <a :href="tier.href[frequency.value]" :aria-describedby="tier.id"
                            :class="[tier.featured ? 'background-gradient-black text-white hover:bg-white/20 focus-visible:outline-white' : 'bg-btn-black text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600', 'mt-6  block rounded-md px-3 py-2 text-center text-mobile-bodyLG font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2']">{{
                                tier.cta }}</a>
                        <a class="mt-6 block underline rounded-md px-3 py-2 text-center text-mobile-body font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                            href="https://calendly.com/tilltech/tilltech-infogesprach">oder Call buchen</a> 
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/20/solid'

// Payment frequency options
const frequencies = [
    { value: 'monthly', label: 'Standard', priceSuffix: '/monat' },
    { value: 'annually', label: 'Pro', priceSuffix: '/monat' },
]

// Pricing tiers with prices and links for different frequencies
const tiers = [
    {
        name: 'Mitgliedschaft',
        id: 'tier-enterprise',
        href: { monthly: 'https://buy.stripe.com/6oE6pP0Vs611gXCfZ6', annually: 'https://buy.stripe.com/cN2aG57jQ0GH6iYbIR' },
        price: { monthly: '3995.-', annually: '4995.-' },

        features: {
            monthly: [
                'Eine Anfrage auf einmal',
                'Lieferzeit von 24-48 Stunden',
                'Unbegrenzte Designs',
                'Vue.js Webseiten',
                'Unbegrenzte Stockfotos',
                'Jederzeit pausieren oder kündigen',
            ],
            annually: [
                'Zwei Anfragen auf einmal',
                'Lieferzeit von 24-48 Stunden',
                'Unbegrenzte Designs',
                'Vue.js Webseiten',
                'Unbegrenzte Stockfotos',
                'Jederzeit pausieren oder kündigen',
            ],
        },
        featured: false,
        cta: 'Jetzt Starten',
    },
]

// Default selected frequency
const frequency = ref(frequencies[0])
</script>
