<template>
  <!-- Partie haut avec texte et image -->
  <div class=" group flex flex-col md:flex-row items-center bg-gray-900 w-full h-[400px] px-8 text-white md:justify-between  ">
    <!-- Texte -->
    <div class="max-w-xl mt-4 mb-8 md:mb-0">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">
        Réfléchir, c’est bien. Décider avec les bons outils, c’est mieux.
      </h1>
      <p class="text-gray-400 text-lg">
        Dans un monde où chaque décision compte, notre logiciel de gestion commerciale vous offre la clarté, la rapidité
        et le contrôle dont vous avez besoin.
      </p>
    </div>
    <!-- Image -->
    <div class="w-64 mb-6 md:w-96">
      <img src="./../assets/image/img (1).png" alt="Personne réfléchissant" class="rounded-lg shadow-lg" />
    </div>
  </div>

  <!-- Zone avec 3 chiffres -->
  <div ref="counterSection" class="flex  flex-col md:flex-row md:justify-center " >
    <!-- Card 1 -->
    <div class="flex flex-col justify-center items-center w-full md:w-1/4  gap-5 bg-gradient-to-r from-pink-300 via-purple-100 to-indigo-200 p-8  border-none text-center">
   
        <img src="./../assets/image/Achat/Frame.svg" alt="" class="size-15">
    
      <div class="text-4xl font-bold text-center">
        {{ displayNumber }}
      </div>
      <div class="font-bold text-[20px]">Nos clients</div>

    </div>
    <!-- Card 2 -->
    <div class="flex  flex-col justify-center items-center w-full md:w-1/4 gap-5 bg-gradient-to-r  from-pink-300 via-purple-300 to-indigo-300 p-8 border-none  text-center">
       <img src="./../assets/image/slide/Frame.svg" alt="" class="size-15">
      <div class="text-4xl font-bold text-center">
        {{ displayNumber1}}
      </div>
      <div class="font-bold text-[20px]">Nos Partenaires</div>
    </div>
    <!-- Card 3 -->
    <div class="flex flex-col justify-center items-center w-full md:w-1/4  bg-gradient-to-r gap-5 from-yellow-300 via-orange-300 to-red-300   p-8 border-none  text-center">
      
      <img src="./../assets/image/Frame.svg" alt="" class="size-15">
      <div class="text-4xl font-bold text-center">
        {{ displayNumber2 }}
      </div>
      <div class="font-bold text-[20px]">Nos modules</div>
    </div>
     <div class="flex   flex-col justify-center items-center w-full md:w-1/4  gap-5  bg-gradient-to-r   from-cyan-300 via-blue-300 to-purple-300  p-8 border-none  text-center">

        <img src="./../assets/image/securite/Achat/Frame.svg"  alt="" class="size-15">

      <div class="text-4xl font-bold text-center">
        {{ displayNumber3 }} %
      </div>
      <div class="font-bold text-[20px]">Sécurité</div>
    </div>
  </div>

</template>
<script setup>
import { ref, onMounted } from 'vue';

const targetNumber = 455;
const targetNumber1 = 400;
const targetNumber2 = 300;
const targetNumber3 = 100;

const duration = 2000;

const displayNumber = ref(0);
const displayNumber1 = ref(0);
const displayNumber2 = ref(0);
const displayNumber3 = ref(0);

// Référence à la section
const counterSection = ref(null);
let hasAnimated = false; // pour s'assurer que l'animation ne se lance qu'une fois

// Fonction d'animation (identique à la tienne)
function animateCount() {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    displayNumber.value = Math.floor(progress * targetNumber);
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      displayNumber.value = targetNumber;
    }
  }

  requestAnimationFrame(update);
}

// Idem pour les autres compteurs
function animateCount1() { 
  
    const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    displayNumber1.value = Math.floor(progress * targetNumber1);
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      displayNumber1.value = targetNumber1;
    }
  }

  requestAnimationFrame(update);/* ... même structure ... */ }
function animateCount2() { 
    const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    displayNumber2.value = Math.floor(progress * targetNumber2);
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      displayNumber2.value = targetNumber2;
    }
  }

  requestAnimationFrame(update);/* ... même structure ... */ }
function animateCount3() { 
    const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    displayNumber3.value = Math.floor(progress * targetNumber3);
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      displayNumber3.value = targetNumber3;
    }
  }

  requestAnimationFrame(update);/* ... même structure ... */ }

// Lors du montage
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        // Lancer l'animation quand la section devient visible
        animateCount();
        animateCount1();
        animateCount2();
        animateCount3();
        hasAnimated = true; // pour ne pas relancer plusieurs fois
        observer.disconnect(); // arrêter d'observer après
      }
    },
    {
      threshold: 0.1, // déclenche quand 10% de la section est visible
    }
  );

  if (counterSection.value) {
    observer.observe(counterSection.value);
  }
});
</script>