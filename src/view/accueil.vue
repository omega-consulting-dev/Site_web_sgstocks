<template>
  <!-- En-tête -->
  <div
    class="w-full min-h-[500px] relative bg-gradient-to-tr from-[#77C1EB] via-[#9B7EC4] to-[#dfb49fec] flex items-center justify-center">
    <!-- Dégradé transparent -->
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"></div>

    <!-- Bouton Connexion -->
    <div class="absolute top-4 right-4 md:top-6 md:right-8 z-10">
      <button
        class="bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg shadow-lg hover:shadow-xl text-sm md:text-base">
        Connexion
      </button>
    </div>

    <!-- Contenu central -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center">
      <img src="@/assets/image/OBJECTS.png" alt="mon logo" class="mb-6 max-w-xs w-full object-contain" />

      <h2 class="text-[25px] md:text-[35px] font-bold text-white mb-4 leading-tight">
        Simplifiez votre comptabilité
        <span class="block mt-2">avec SG-stocks</span>
      </h2>

      <p class="text-white text-base md:text-lg mb-8 max-w-2xl opacity-95">
        Faites un suivi de votre stock, en contrôlant vos dépenses
        <span class="block mt-1">et ressortez votre compte de résultat, vos charges, vos</span>
        <span class="block mt-1">produits, et votre bénéfice</span>
      </p>

      <!-- CTA -->
      <div class="relative px-4 mb-8">
        <a href="#"
          class="flex flex-col md:flex-col items-center justify-center mb-6 text-[#6500F3] font-bold text-2xl md:text-xl">
          <p class="mb-1 md:mb-0">Cliquez pour suivre le lien</p>
          <p class="flex items-center">
            pour la phase test <span class="ml-2 text-3xl">✨👌</span>
          </p>
        </a>
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

  <!-- Slider images -->
  <div class="overflow-hidden relative w-full h-[200px] md:h-[300px] p-4 mx-auto">
    <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(img, index) in images" :key="index" class="w-full flex-shrink-0 flex justify-center items-center">
        <img :src="img" alt="Slide Image" class="max-w-full h-auto object-contain" />
      </div>
    </div>
    <!-- Navigation -->
    <button @click="prevSlide"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow-lg focus:outline-none">←</button>
    <button @click="nextSlide"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow-lg focus:outline-none">→</button>
    <!-- Indicateurs -->
    <div class="flex justify-center mt-4 space-x-2">
      <div v-for="(img, index) in images" :key="index" @click="goToSlide(index)"
        :class="{ 'w-3 h-3 rounded-full cursor-pointer': true, 'bg-blue-500': index === currentIndex, 'bg-gray-300': index !== currentIndex }">
      </div>
    </div>
  </div>

  <!-- Section fonctionnalités -->
  <section class="w-full flex flex-col md:flex-row bg-[#F1F3F6] px-4 md:px-10 py-8">
    <!-- Partie gauche -->
    <div class="flex-1 max-w-4xl mx-auto mb-8 md:mb-0 px-4">
      <div class="text-center md:text-left px-4">
        <h2 class="text-[30px] md:text-[35px] font-bold text-black mb-2">
          Les fonctionnalités de
        </h2>
        <h2 class="text-[30px] md:text-[35px] font-bold text-black mb-4">
          notre logiciel
        </h2>
        <p class="text-[15px] text-gray-700 mb-6">
          Notre logiciel a été conçu pour répondre aux besoins concrets des professionnels et des entreprises en quête
          d’efficacité,
          de simplicité et de performance. Grâce à une interface intuitive et des outils puissants, il vous accompagne
          dans vos tâches
          quotidiennes, optimise vos processus et vous aide à atteindre vos objectifs plus rapidement. Découvrez
          ci-dessous les fonctionnalités
          clés qui font de notre solution un véritable allié dans votre activité.
        </p>
        <!-- Liste de fonctionnalités -->

        <div class="flex gap-8">
          <!-- fonctionnalités de gauches -->
          <div class=" flex-1 space-y-5">
            <!-- Fonctionnalité 1 -->
            <div class="flex items-center gap-3">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black/10">Gestion des stocks</p>
            </div>
            <!-- Fonctionnalité 2 -->
            <div class="flex items-center gap-3">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-bold">Gestion des fournisseurs</p>
            </div>
            <!-- Fonctionnalité 3 -->
            <div class="flex items-center gap-3">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-bold">Suivi des ventes</p>
            </div>
            <!-- Fonctionnalité 4 -->
            <div class="flex items-center gap-3">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-bold">Rapports analytiques</p>
            </div>
          </div>
          <!-- fonctionnalités de droite -->
          <div class="flex-1 space-y-5 ">
            <!-- Fonctionnalité 1 -->
            <div class="flex items-center gap-3">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-bold">Gestion des stocks</p>
            </div>
            <!-- Fonctionnalité 2 -->
            <div class="flex items-center gap-3">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-bold">Gestion des fournisseurs</p>
            </div>
            <!-- Fonctionnalité 3 -->
            <div class="flex items-center gap-3">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-bold">Suivi des ventes</p>
            </div>
            <!-- Fonctionnalité 4 -->
            <div class="flex items-center gap-3">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-bold">Rapports analytiques</p>
            </div>
          </div>

        </div>

      </div>
    </div>

    <!-- Partie droite -->
    <div class="flex-1 flex justify-center items-center px-4">
      <img src="./../assets/image/Frame.png" alt="Illustration" class="max-h-[400px] w-full object-contain" />
    </div>
  </section>
  <!-- Fonctionnalités -->
  <div class="flex  justify-center gap-20">
    <!-- Fonctionnalité 1 -->
    <div class="flex flex-col items-center max-w-[250px] p-4  ">
      <p class="text-[15px] mb-4 text-center text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <img src="./../assets/image/Group.png" alt="Fonctionnalité 1"
        class="max-w-full h-auto object-contain rounded-md" />
    </div>
    <!-- Fonctionnalité 2 -->
    <div class="flex flex-col items-center max-w-[200px] p-4  ">
      <p class="text-[15px] mb-4 text-center text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <img src="./../assets/image/Group (1).png" alt="Fonctionnalité 2"
        class="max-w-full h-auto object-contain rounded-md" />
    </div>
    <!-- Fonctionnalité 3 -->
    <div class="flex flex-col items-center max-w-[200px] p-4  ">
      <p class="text-[15px] mb-4 text-center text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <img src="./../assets/image/Group (2).png" alt="Fonctionnalité 3"
        class="max-w-full h-auto object-contain rounded-md" />
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