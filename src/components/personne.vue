<template>
  <!-- Partie haut avec texte et image -->
  <div
    class="group overflow-hidden flex flex-col md:flex-row items-center bg-gray-900 w-full h-[400px] px-8 text-white md:justify-around">
    <!-- Texte -->
    <div class="max-w-xl mt-4 mb-8 md:mb-0  -ml-19">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">
        Réfléchir, c'est bien. Décider avec les bons outils, c'est mieux.
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

  <!-- Zone avec texte animé et 4 chiffres -->
  <div ref="counterSection" class="bg-gradient-to-br from-[#5563DA] to-[#AC24DF] px-8 py-12">
    <!-- Titre animé qui s'écrit en boucle -->
    <div class="text-left mb-12">
      <h2 class=" flex text-4xl md:ml-20 md:text-4xl font-semibold text-white min-h-[60px] gap-2">
        <h1> Activité</h1>
        {{ typedText }}
        <span class="animate-pulse">|</span>
      </h2>
    </div>

    <!-- Cartes de statistiques alignées horizontalement -->
    <div class="flex flex-col md:flex-row md:justify-center items-center md:items-stretch gap-8 text-white">
      <!-- Card 1 - Nos clients (image à gauche, texte à droite) -->
      <div class="flex flex-row md:flex-row justify-center items-center w-full md:w-1/4 gap-6">
        <img src="./../assets/image/userClient.png" alt="Clients" class="w-16 h-16 flex-shrink-0" />
        <div class="flex flex-col items-start">
          <div class="text-5xl font-bold">
            {{ displayNumber }}<span class="text-3xl align-super">+</span>
          </div>
          <div class="font-semibold text-xl mt-2">Nos clients</div>
        </div>
      </div>

      <!-- Card 2 - Nos Partenaires (image à gauche, texte à droite) -->
      <div class="flex flex-row md:flex-row justify-center items-center w-full md:w-1/4 gap-6">
        <img src="./../assets/image/main.png" alt="Partenaires" class="w-16 h-16 flex-shrink-0" />
        <div class="flex flex-col items-start">
          <div class="text-5xl font-bold">
            {{ displayNumber1 }}
          </div>
          <div class="font-semibold text-xl mt-2">Nos Partenaires</div>
        </div>
      </div>

      <!-- Card 3 - Nos modules (image à gauche, texte à droite) -->
      <div class="flex flex-row md:flex-row justify-center items-center w-full md:w-1/4 gap-6">
        <img src="./../assets/image/module.png" alt="Modules" class="w-16 h-16 flex-shrink-0" />
        <div class="flex flex-col items-start">
          <div class="text-5xl font-bold">
            {{ displayNumber2 }}
          </div>
          <div class="font-semibold text-xl mt-2">Nos modules</div>
        </div>
      </div>

      <!-- Card 4 - Sécurité (image à gauche, texte à droite) -->
      <div class="flex flex-row md:flex-row justify-center items-center w-full md:w-1/4 gap-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-20 text-white">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>

        <div class="flex flex-col items-start">
          <div class="text-5xl font-bold">
            {{ displayNumber3 }}<span class="text-3xl">%</span>
          </div>
          <div class="font-semibold text-xl mt-2">Sécurité</div>
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