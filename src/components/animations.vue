<template>
  <div
    ref="haloRef"
    class="w-full h-screen z-40"
  >
  
  <header id="accueil"
    class="flex flex-col z-50    w-full min-h-screen md:min-h-[400px] lg:min-h-[500px] overflow-hidden font-[Poppins]  text-white">
   
    <!-- Dégradé positionné en haut a gauche-->
    <div class="overflow-hidden absolute inset w-[200px] h-1/2 bg-[#FE7098] blur-[135px] rounded-full top-0"></div>
    <div class="overflow-hidden absolute inset w-[200px] h-1/2 bg-gray-100 blur-[145px] rounded-full top-0 right-0">
    </div>

    <div
      class="overflow-hidden absolute inset w-[200px] h-1/2 bg-[#1671CD] blur-[145px] rounded-full  bottom-0  right-190">
    </div>
    <div class="overflow-hidden absolute inset w-full h-1/8 bg-[#2216cd] blur-[135px] rounded-full  top-0  right-190">
    </div>

    <!-- Navigation Bar -->
    <nav class="relative z-50 w-full px-4 md:px-6 lg:px-10 py-4 bg-white  text-black">

      <div class="flex justify-between items-center">

        <!-- Logo à gauche -->
        <div class="flex items-center">
          <img src="@/assets/image/OBJECTS.png" alt="SG-Stocks Logo"
            class="w-40 md:w-48 lg:w-52 h-auto object-contain" />
        </div>

        <!-- Menu Desktop + User Profile à droite -->
        <div class="hidden md:flex items-center gap-6 lg:gap-8">
          <ul class="flex text-black font-semibold items-center text-[16px] gap-4 lg:gap-6">
            <li>
              <a href="#accueil"
                class="hover:text-[#0FDBD0] duration-300 hover:scale-105 cursor-pointer transition-all">
                Accueil
              </a>
            </li>
            <li>
              <a href="#Apropos"
                class="hover:text-[#0FDBD0] duration-300 hover:scale-105 cursor-pointer transition-all">
                A propos
              </a>
            </li>
            <li>
              <a href="#Tarifs" class="hover:text-[#0FDBD0] duration-300 hover:scale-105 cursor-pointer transition-all">
                Tarifs
              </a>
            </li>
            <li>
              <a href="#contact"
                class="hover:text-[#0FDBD0] duration-300 hover:scale-105 cursor-pointer transition-all">
                Contact
              </a>
            </li>
          </ul>

          <!-- User Profile Button -->
          <div class="relative">
            <button
              class="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-300 border border-white/20">
              <!-- User Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>

              <!-- User Name or Guest -->
              <span class="text-sm font-medium">Se Connecter</span>

            </button>

            <!-- User Dropdown Menu -->
            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
              <div v-if="userMenuOpen"
                class="absolute right-0 mt-2 w-56 bg-[#1a1548] backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl py-2 overflow-hidden">
                <div v-if="isConnected">
                  <!-- User Info -->
                  <div class="px-4 py-3 border-b border-white/10">
                    <p class="text-sm font-semibold">{{ userName }}</p>
                    <p class="text-xs text-white/60">{{ userEmail }}</p>
                  </div>
                  <!-- Logout Button -->
                  <button @click="handleLogout"
                    class="w-full text-left px-4 py-3 hover:bg-white/10 transition-all duration-300 flex items-center gap-3 text-red-300 hover:text-red-200">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Se déconnecter
                  </button>
                </div>
                <div v-else>
                  <!-- Login Button -->
                  <button @click="handleLogin"
                    class="w-full text-left px-4 py-3 hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Se connecter
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Menu Mobile Toggle -->
        <button @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300">
          <svg v-if="!mobileMenuOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>


      <!-- Menu Mobile Sidebar -->
      <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 -translate-x-full"
        enter-to-class="opacity-100 translate-x-0" leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 -translate-x-full">
        <div v-if="mobileMenuOpen" class="md:hidden fixed inset-0 z-50">
          <!-- Overlay -->
          <div @click="mobileMenuOpen = false" class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          <!-- Sidebar Menu -->
          <div class="absolute left-0 top-0 h-full w-72 bg-[#1a1548] shadow-2xl">
            <!-- Header avec fermeture -->
            <div class="flex justify-between items-center p-6 border-b border-white/10">
              <h2 class="text-xl font-bold">Menu</h2>
              <button @click="mobileMenuOpen = false"
                class="text-white p-2 hover:bg-white/10 rounded-lg transition-all">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- User Info Section -->
            <div class="p-6 border-b border-white/10">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-[#FE7098] flex items-center justify-center text-xl font-bold">
                  {{ isConnected ? userName.charAt(0).toUpperCase() : 'I' }}
                </div>
                <div>
                  <p class="font-semibold">{{ isConnected ? userName : 'Invité' }}</p>
                  <p class="text-xs text-white/60">{{ isConnected ? 'Bienvenue !' : 'Non connecté' }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Navigation Links -->
            <div class="p-4">
              <ul class="flex flex-col gap-2">
                <li>
                  <a href="#accueil"
                    class="flex items-center gap-3 py-3 px-4 hover:bg-white/10 rounded-lg hover:text-[#0FDBD0] transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#Apropos"
                    class="flex items-center gap-3 py-3 px-4 hover:bg-white/10 rounded-lg hover:text-[#0FDBD0] transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    A propos
                  </a>
                </li>
                <li>
                  <a href="#Tarifs"
                    class="flex items-center gap-3 py-3 px-4 hover:bg-white/10 rounded-lg hover:text-[#0FDBD0] transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#competences"
                    class="flex items-center gap-3 py-3 px-4 hover:bg-white/10 rounded-lg hover:text-[#0FDBD0] transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Compétences
                  </a>
                </li>
                <li>
                  <a href="#contact"
                    class="flex items-center gap-3 py-3 px-4 hover:bg-white/10 rounded-lg hover:text-[#0FDBD0] transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <!-- Login/Logout Button -->
            <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
              <button v-if="!isConnected" @click="handleLogin"
                class="w-full flex items-center justify-center gap-2 bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Se connecter
              </button>
              <button v-else @click="handleLogout"
                class="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Se déconnecter
              </button>
            </div>
          </div>
        </div>
      </transition>
    </nav>
    <hr class="mt-0 bg-gray-500 h-[5px]">

    <!-- CONTENU PRINCIPAL -->
    <div class="relative z-30 container mt-8 mx-auto px-4 md:px-6 lg:px-8 pt-12 md:pt-15 pb-12">

      <!-- TITRE PRINCIPAL -->
      <h1 class="text-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 md:mb-6 leading-tight">
        Simplifiez votre comptabilité
        <br class="hidden sm:block" />
        <span class="block mt-2">avec SG-STOCK</span>
      </h1>

      <!-- SECTION DESCRIPTION + IMAGE -->
      <div class="flex flex-col justify-center items-center w-full lg:flex-row gap-8 lg:gap-20 mb-8 md:mb-12">

        <!-- DESCRIPTION (Gauche sur desktop, haut sur mobile) -->
        <div class="flex justify-center items-center text-center w-full md:w-1/2 lg:text-center max-w-xl">
          <p class="text-white text-sm md:text-base lg:text-lg leading-relaxed opacity-95">
            Faites un suivi de votre stock, en contrôlant vos dépenses
            et ressortez votre compte de résultat, vos charges, vos
            produits, et votre bénéfice
          </p>
        </div>

      </div>

      <!-- CTA -->
      <div>
        <!-- Texte du lien à gauche -->
        <div class="flex justify-center items-center gap-20 w-full text-center md:text-center text-blue-800">

          <a href="#" class="group flex-col gap-1 justify-center animate-bounce">
            <p class="font-bold text-xl md:text-2xl mb-2 group-hover:underline">
              Cliquez pour suivre le lien
            </p>
            <div class="font-bold text-xl md:text-2xl flex items-center justify-center md:justify-start gap-2">
              <p
                class="group-hover:underline font-bold text-xl md:text-2xl flex items-center justify-center md:justify-start gap-2">
                pour la phase test</p>
              <span class="text-3xl md:text-4xl ">✨👌</span>
            </div>
          </a>

        </div>
        <div class="overflow-hidden absolute inset w-[100px] h-1/2 bg-purple-500 blur-[120px] rounded-full top-0"></div>

        <div class="flex relative justify-center md:justify-end p-2 px-4 text-left">
          <img src="@/assets/image/interface.png" alt="Aperçu des interfaces"
            class="w-full md:w-auto max-w-xl h-auto drop-shadow-2xl rounded-lg" />
        </div>
      </div>

    </div>

  </header>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const haloRef = ref(null);
let vantaEffect = null;

onMounted(() => {
  // Vérifie que VANTA est chargé
  if (window.VANTA) {
    vantaEffect = window.VANTA.HALO({
      el: haloRef.value,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      backgroundColor: 0x0,
      size: 1.7,
    });
  }
});

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy(); // Nettoyage
});
</script>
