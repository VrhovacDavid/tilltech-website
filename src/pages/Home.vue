<script setup>
import Features from '../components/Features.vue';
import Hero from '../components/Hero.vue';
import IntroText from '../components/IntroText.vue';
import PortfolioHome from '../components/PortfolioHome.vue';
import Services from '../components/services.vue';
import Banner from '../components/Banner.vue';
import Testimonials from '../components/Testimonials.vue';
import FAQ from '../components/FAQ.vue';
import Download from '../components/Download.vue';
import CompanyLogo from '../components/CompanyLogo.vue';
import Pricing from '../components/Pricing.vue';
import ProgressSlider from '../components/ProgressSlider.vue';
import CarouselFeature from '../components/CarouselFeature.vue';


</script>

<template>
  <div class="bg-primary ">

    <div id="hero">
      <Hero />
    </div>
    <div id="features" class="hidden sm:block">
      <Features />
    </div>
    <div id="introtext" class="block sm:hidden ">
      <CarouselFeature />
    </div>
    <div id="introtext">
      <IntroText />
    </div>

    <div id="process">
      <ProgressSlider />
    </div>
    <div id="service">
      <Services />
    </div>
    <div id="portfoliohome">
      <PortfolioHome />
    </div>
    <div id="banner">
      <Banner />
    </div>
    <div id="testamonials">
      <Testimonials />
    </div>


 


    <div id="pricing">
      <Pricing />
    </div>

    <div id="companylogo">
      <CompanyLogo />
    </div>
    
    <div id="faq" class="z-200">
      <FAQ />
    </div>

    <div id="download">
      <Download />
    </div>


  </div>

</template>

<style scoped></style>
