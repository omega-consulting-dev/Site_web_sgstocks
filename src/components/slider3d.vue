<template>
 <Swiper
  modules="[Autoplay, Navigation, EffectCoverflow]"
  effect="coverflow"
  grabCursor="true"
  centeredSlides="true"
  slidesPerView="auto"
  loop="true"
  :autoplay="{ delay: 2500 }"
  navigation
  :coverflowEffect="{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: false }"
  class="mySwiper"
>
  <SwiperSlide v-for="(img, i) in mesImages" :key="i">
    <img :src="img" class="carousel-img" />
  </SwiperSlide>
</Swiper>

</template>

<script setup>
import { ref } from 'vue'

// Swiper Vue 3 components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Modules
import { Autoplay } from 'swiper/modules/autoplay'
import { Navigation } from 'swiper/modules/navigation'
import { EffectCoverflow } from 'swiper/modules/effect-coverflow'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

const mesImages = ref([
  "https://images.unsplash.com/photo-1682687221038-404cb8830901?w=800",
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800",
  "https://images.unsplash.com/photo-1682687220866-c856f566f1bd?w=800",
  // ... tes 20+ images
])
</script>


<style scoped>
.carousel-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
}
.mySwiper {
  width: 100%;
  padding: 40px 0;
}
</style>
