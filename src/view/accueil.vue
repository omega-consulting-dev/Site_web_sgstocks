<template>
    <!-- header Fond avec dégradé -->
    <div class="w-full h-[500px] relative bg-gradient-to-tr from-[#77C1EB] via-[#9B7EC4] to-[#dfb49fec]">

        <div class="absolute h-[0px] inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent">

        </div>

        <!-- Bouton Connexion -->
        <div class="absolute top-4 right-4 md:top-6 md:right-8 z-10">
          <button
            class="bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base">
            Connexion
          </button>
     
        </div>

          <!-- Zone centrale -->
        <div
        class="relative z-10 flex flex-col items-center justify-center min-h-[500px] md:h-full text-center px-4 md:px-4 py-4 md:py-0">
        <!-- Logo -->
        <img src="@/assets/image/OBJECTS.png" alt="mon logo" class="mb-6 md:mb-6" />

        <!-- Titre principal -->
        <h2 class="text-[25px] md:text-[35px] font-bold text-white mb-4 md:mb-4 leading-tight max-w-3xl px-4 text-center">
          Simplifiez votre comptabilité
          <span class="block mt-2">avec SG-stocks</span>
        </h2>

        <!-- Description -->
        <p class="text-white text-base md:text-lg mb-8 md:mb-10 max-w-2xl opacity-95 px-4 text-center">
          Faites un suivi de votre stock, en contrôlant vos dépenses
          <span class="block mt-1">et ressortez votre compte de résultat, vos charges, vos</span>
          <span class="block mt-1">produits, et votre bénéfice</span>
        </p>

        <!-- CTA -->
        <div class="relative px-4">
          <div class="px-3 md:px-8 py-1 md:py-2 relative">
            <a href="#"
              class="flex flex-col md:flex-col items-center justify-center mb-6 text-[#6500F3] font-bold text-2xl md:text-xl">
              <p class="mb-1 md:mb-0">Cliquez pour suivre le lien</p>
              <p class="flex items-center">
                pour la phase test <span class="ml-2 text-3xl">✨👌</span>
              </p>
            </a>
          </div>

          <!-- Flèche décorative -->
          <div class="hidden lg:block absolute -right-24 top-1/2 transform -translate-y-1/2 opacity-60">
            <svg width="120" height="80" viewBox="0 0 120 80" class="text-white">
              <path d="M10 40 Q 60 10, 110 35" fill="none" stroke="currentColor" stroke-width="2"
                stroke-dasharray="4 4" />
              <path d="M110 35 L105 30 M110 35 L105 40" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
            <span class="absolute right-0 top-12 text-white text-sm italic">Interface</span>
          </div>
        </div>
        </div>
    </div>   


    <div class="overflow-hidden relative w-full h-[200px] mx-auto p-4">
      <!-- Conteneur des images, avec défilement horizontal -->
      <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <!-- Images -->
        <div v-for="(img, index) in images" :key="index" class="w-full flex-shrink-0 ">
          <img :src="img" alt="Slide Image" class="w-full h-auto object-cover" />
        </div>
      </div>

      <!-- Boutons pour navigation -->
      <button @click="prevSlide"
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow-lg focus:outline-none">
        ←
      </button>
      <button @click="nextSlide"
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow-lg focus:outline-none">
        →
      </button>

      <!-- Indicateurs -->
      <div class="flex justify-center mt-4 space-x-2">
        <div v-for="(img, index) in images" :key="index" @click="goToSlide(index)" :class="{
          'w-3 h-3 rounded-full cursor-pointer': true,
          'bg-blue-500': index === currentIndex,
          'bg-gray-300': index !== currentIndex
        }"></div>
      </div>
    </div>

    
</template>

<script>



import image5 from '@/assets/image/slide/Frame 2.png';
import image6 from '@/assets/image/slide/Frame 3 (1).png';
import image7 from '@/assets/image/slide/Frame 4.png';
import image8 from '@/assets/image/slide/Frame 5.png';
import image9 from '@/assets/image/slide/Frame 6.png';
import image10 from '@/assets/image/slide/Frame.png';

export default {
  data() {
    return {
      images: [image5, image6, image7, image8, image9, image10,],
      currentIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    },
    nextSlide() {
      this.currentIndex =
        this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>