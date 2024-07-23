<template>
  <div class="carousel" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @mousedown="mouseStart"
    @mousemove="mouseMove" @mouseup="mouseEnd" @mouseleave="mouseEnd">
    <div class="carousel-inner" :style="carouselStyle">
      <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
        <div class="slide-content">

          <div class="icon-container my-2 p-4 rounded-full">
            <img :src="slide.icon" :alt="slide.title" class="slide-icon" loading="lazy">
          </div>
          <h3 class="text-xl font-bold py-2">{{ slide.title }}</h3>
          <p class="py-2 text-gray-600">{{ slide.description }}</p>
        </div>
      </div>
    </div>
    <div class="carousel-indicators ">
      <button name="Slider Dot" v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)"
        :class="{ active: currentSlide === index }" class="indicator-dot"></button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const slides = [
  {
    icon: '/Icons/Time.svg',
    title: 'Alles an einem Ort',
    description: 'Spare wertvolle Zeit, indem du alle deine kreativen Bedürfnisse an einem Ort erledigen lässt'
  },
  {
    icon: '/Icons/Flexible.svg',
    title: 'Flexibilität pur',
    description: 'Pausiere oder kündige dein Abonnement jederzeit nach Bedarf, ohne langfristige Verpflichtungen'
  },
  {
    icon: '/Icons/Lightning.svg',
    title: 'Schnelle Ergebnisse',
    description: 'Profitiere von schnellen Bearbeitungszeiten und erhalte deine Anfragen innerhalb von 1-2 Tagen'
  },
  // Add more slides here
];

const currentSlide = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const currentX = ref(0);

const carouselStyle = computed(() => {
  const translateX = -currentSlide.value * 100 + (currentX.value - startX.value) / window.innerWidth * 100;
  return {
    transform: `translateX(${translateX}%)`,
    transition: isDragging.value ? 'none' : 'transform 0.3s ease'
  };
});

function goToSlide(index) {
  currentSlide.value = index;
}

function handleDragStart(clientX) {
  isDragging.value = true;
  startX.value = clientX;
  currentX.value = clientX;
}

function handleDragMove(clientX) {
  if (!isDragging.value) return;
  currentX.value = clientX;
}

function handleDragEnd() {
  if (!isDragging.value) return;
  isDragging.value = false;

  const draggedPercent = (currentX.value - startX.value) / window.innerWidth * 100;
  if (Math.abs(draggedPercent) > 20) {
    if (draggedPercent > 0 && currentSlide.value > 0) {
      currentSlide.value--;
    } else if (draggedPercent < 0 && currentSlide.value < slides.length - 1) {
      currentSlide.value++;
    }
  }

  startX.value = 0;
  currentX.value = 0;
}

// Touch events
function touchStart(e) {
  handleDragStart(e.touches[0].clientX);
}

function touchMove(e) {
  handleDragMove(e.touches[0].clientX);
}

function touchEnd() {
  handleDragEnd();
}

// Mouse events
function mouseStart(e) {
  handleDragStart(e.clientX);
}

function mouseMove(e) {
  handleDragMove(e.clientX);
}

function mouseEnd() {
  handleDragEnd();
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  touch-action: pan-y;
}

.carousel-inner {
  display: flex;
  height: 100%;
  will-change: transform;
}

.carousel-slide {
  flex: 0 0 100%;
  height: 100%;
}

.slide-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
}

.icon-container {
  background: linear-gradient(to bottom right, #5046E5, #9966FF);
  background-size: cover;
  position: relative;
  z-index: 1;
}

.icon-container::before {
  content: '';
  opacity: 0.1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('https://png.pngtree.com/background/20211217/original/pngtree-noise-abstract-texture-dark-gray-noise-background-picture-image_1575837.jpg');
  background-size: fill;
  background-repeat: repeat;
  border-radius: 100%;
  z-index: -1;
  /* Add this line to place it behind the content */
  pointer-events: none;
  /* Add this line to allow clicks to pass through */


}

.icon-container>* {
  position: relative;
  z-index: 2;
}

.slide-icon {
  width: 30px;
  height: 30px;
}

.slide-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
}

.slide-description {
  font-size: 16px;
  color: #6b7280;
}

.carousel-indicators {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgb(192, 192, 192);
  border: none;
  cursor: pointer;
}

.indicator-dot.active {
  background: rgb(138, 43, 226);
}
</style>