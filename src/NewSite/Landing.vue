<script setup>


import Features01 from './components/Features01.vue'
import Features02 from './components/Features02.vue'
import Features03 from './components/Features03.vue'
import PricingTabs from './components/PricingTabs.vue'
import Testimonials from './components/Testimonials.vue'
import Cta from './components/Cta.vue'
import Footer from './components/Footer.vue'
import HeroHome from './components/HeroHome.vue'
</script>

<template>
  <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <HeroHome />
      <Features01 />
      <Features02 />
      <Features03 />
      <PricingTabs />
      <Testimonials />
      <Cta />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>
