<template>
  <!-- Partie haut avec texte et image -->
  <div class="group overflow-hidden flex flex-col md:flex-row items-center justify-center md:justify-around 
              bg-gray-900 w-full min-h-[300px] md:h-[400px] px-4 sm:px-6 md:px-8 py-8 md:py-0 text-white gap-6 md:gap-8">
    
    <!-- Texte -->
    <div class="max-w-xl w-full text-center md:text-left order-2 ">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight">
        Réfléchir, c'est bien. Décider avec les bons outils, c'est mieux.
      </h1>
      <p class="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
        Dans un monde où chaque décision compte, notre logiciel de gestion commerciale vous offre la clarté, la rapidité
        et le contrôle dont vous avez besoin.
      </p>
    </div>

    <!-- Image -->
    <div class="w-48 sm:w-56 md:w-64 lg:w-80 order-1 md:order-2 flex-shrink-0">
      <img src="./../assets/image/img (1).png" alt="Personne réfléchissant" 
           class="rounded-lg shadow-lg w-full h-auto object-contain" />
    </div>
  </div>

  <!-- Zone avec texte animé et 4 chiffres -->
  <div ref="counterSection" class="bg-gradient-to-br from-[#5563DA] to-[#AC24DF] px-4 sm:px-6 md:px-8 py-8 md:py-12">
    
    <!-- Titre animé qui s'écrit en boucle -->
    <div class="text-left mb-8 md:mb-12 px-2 md:px-4 lg:px-20">
      <h1 class="flex flex-wrap items-center text-2xl sm:text-3xl md:text-4xl font-semibold text-white min-h-[50px] md:min-h-[60px] gap-2">
        <span>Activité</span>
        <span class="text-[#0FDBD0]">{{ typedText }}</span>
        <span class="animate-pulse">|</span>
      </h1>
    </div>

    <!-- Cartes de statistiques -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-white max-w-7xl mx-auto">
      
      <!-- Card 1 - Nos clients -->
      <div class="flex flex-row items-center justify-center sm:justify-start gap-4 md:gap-6 
                  bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300">
        <img src="./../assets/image/userClient.png" alt="Clients" 
             class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0" />
        <div class="flex flex-col items-start">
          <div class="text-3xl sm:text-4xl md:text-5xl font-bold">
            {{ displayNumber }}<span class="text-xl sm:text-2xl md:text-3xl align-super">+</span>
          </div>
          <div class="font-semibold text-base sm:text-lg md:text-xl mt-1 md:mt-2">Nos clients</div>
        </div>
      </div>

      <!-- Card 2 - Nos Partenaires -->
      <div class="flex flex-row items-center justify-center sm:justify-start gap-4 md:gap-6 
                  bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300">
        <img src="./../assets/image/main.png" alt="Partenaires" 
             class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0" />
        <div class="flex flex-col items-start">
          <div class="text-3xl sm:text-4xl md:text-5xl font-bold">
            {{ displayNumber1 }}
          </div>
          <div class="font-semibold text-base sm:text-lg md:text-xl mt-1 md:mt-2">Nos Partenaires</div>
        </div>
      </div>

      <!-- Card 3 - Nos modules -->
      <div class="flex flex-row items-center justify-center sm:justify-start gap-4 md:gap-6 
                  bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300">
        <img src="./../assets/image/module.png" alt="Modules" 
             class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0" />
        <div class="flex flex-col items-start">
          <div class="text-3xl sm:text-4xl md:text-5xl font-bold">
            {{ displayNumber2 }}
          </div>
          <div class="font-semibold text-base sm:text-lg md:text-xl mt-1 md:mt-2">Nos modules</div>
        </div>
      </div>

      <!-- Card 4 - Sécurité -->
      <div class="flex flex-row items-center justify-center sm:justify-start gap-4 md:gap-6 
                  bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
             stroke="currentColor" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white flex-shrink-0">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
        <div class="flex flex-col items-start">
          <div class="text-3xl sm:text-4xl md:text-5xl font-bold">
            {{ displayNumber3 }}<span class="text-xl sm:text-2xl md:text-3xl">%</span>
          </div>
          <div class="font-semibold text-base sm:text-lg md:text-xl mt-1 md:mt-2">Sécurité</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Valeurs cibles pour les compteurs
const targetNumber = 455;
const targetNumber1 = 400;
const targetNumber2 = 300;
const targetNumber3 = 100;
const duration = 2000;

// Valeurs affichées
const displayNumber = ref(0);
const displayNumber1 = ref(0);
const displayNumber2 = ref(0);
const displayNumber3 = ref(0);

// Animation du texte
const typedText = ref('');
const fullText = 'et satisfaction.....';
let typingInterval = null;
let restartTimeout = null;

// Référence à la section
const counterSection = ref(null);
let observer = null;

// Fonction pour animer un compteur spécifique
function animateCounter(displayRef, target) {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    displayRef.value = Math.floor(progress * target);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      displayRef.value = target;
    }
  }

  requestAnimationFrame(update);
}

// Fonction pour animer le texte lettre par lettre EN BOUCLE
function animateTyping() {
  // Nettoyer les anciens timers
  if (typingInterval) clearInterval(typingInterval);
  if (restartTimeout) clearTimeout(restartTimeout);

  typedText.value = '';
  let index = 0;
  const typingSpeed = 100;

  typingInterval = setInterval(() => {
    if (index < fullText.length) {
      typedText.value = fullText.substring(0, index + 1);
      index++;
    } else {
      clearInterval(typingInterval);
      // Recommencer après 2 secondes
      restartTimeout = setTimeout(() => {
        animateTyping();
      }, 2000);
    }
  }, typingSpeed);
}

// Lancer toutes les animations
function startAllAnimations() {
  // Réinitialiser les compteurs
  displayNumber.value = 0;
  displayNumber1.value = 0;
  displayNumber2.value = 0;
  displayNumber3.value = 0;

  // Lancer les animations
  animateCounter(displayNumber, targetNumber);
  animateCounter(displayNumber1, targetNumber1);
  animateCounter(displayNumber2, targetNumber2);
  animateCounter(displayNumber3, targetNumber3);
}

// Observer l'intersection avec le viewport
onMounted(() => {
  // Démarrer l'animation du texte immédiatement
  animateTyping();

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Déclencher à CHAQUE fois que la section devient visible
          startAllAnimations();
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '0px'
    }
  );

  if (counterSection.value) {
    observer.observe(counterSection.value);
  }
});

// Nettoyer les timers lors de la destruction du composant
onUnmounted(() => {
  if (typingInterval) clearInterval(typingInterval);
  if (restartTimeout) clearTimeout(restartTimeout);
  if (observer) observer.disconnect();
});
</script>

<style scoped>
/* Animation smooth pour les compteurs */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation au chargement */
.grid > div {
  animation: fadeIn 0.6s ease-out;
}
</style>