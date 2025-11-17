<template>
    <!-- Entete de la page  -->
    <header id="accueil"
        class="flex flex-col relative w-full min-h-screen md:min-h-[400px] lg:min-h-[500px] overflow-hidden font-[Poppins] bg-[#33268F] text-white">

        <!-- Dégradé positionné en haut a gauche-->
        <div class="overflow-hidden absolute inset w-[100px] h-1/2 bg-[#FE7098] blur-[120px] rounded-full top-0"></div>

        <!-- Navigation Bar -->
        <nav class="relative z-50 w-full px-4 md:px-8 lg:px-12 py-6">
            <div class="flex justify-between items-center">

                <!-- Logo à gauche -->
                <div class="flex items-center">
                    <img src="@/assets/image/OBJECTS.png" alt="SG-Stocks Logo"
                        class="w-40 md:w-48 lg:w-52 h-auto object-contain" />
                </div>

                <!-- Menu Desktop + User Profile à droite -->
                <div class="hidden md:flex items-center gap-6 lg:gap-8">
                    <ul class="flex text-white items-center text-[16px] gap-4 lg:gap-6">
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
                            <a href="#projets"
                                class="hover:text-[#0FDBD0] duration-300 hover:scale-105 cursor-pointer transition-all">
                                Projets
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
                        <button @click="userMenuOpen = !userMenuOpen"
                            class="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-300 border border-white/20">
                            <!-- User Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>

                            <!-- User Name or Guest -->
                            <span class="text-sm font-medium">{{ isConnected ? userName : 'Invité' }}</span>
                            <!-- Dropdown Icon -->
                            <svg class="w-4 h-4 transition-transform duration-300"
                                :class="{ 'rotate-180': userMenuOpen }" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <!-- User Dropdown Menu -->
                        <transition enter-active-class="transition duration-200 ease-out"
                            enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                            leave-active-class="transition duration-150 ease-in"
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
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Menu Mobile Sidebar -->
            <transition enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 -translate-x-full" enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition duration-300 ease-in" leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 -translate-x-full">
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
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <!-- User Info Section -->
                        <div class="p-6 border-b border-white/10">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-12 h-12 rounded-full bg-[#FE7098] flex items-center justify-center text-xl font-bold">
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
                                    <a href="#projets"
                                        class="flex items-center gap-3 py-3 px-4 hover:bg-white/10 rounded-lg hover:text-[#0FDBD0] transition-all duration-300">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                        Projets
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

        <!-- CONTENU PRINCIPAL -->
        <div class="relative z-30 container mx-auto px-4 md:px-6 lg:px-8 pt-12 md:pt-15 pb-12">

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
                <div class="flex justify-center items-center gap-20 w-full text-center md:text-center text-[#0090CC]">

                    <a href="#" class="group flex-col gap-1 justify-center">
                        <p class="font-bold text-xl md:text-2xl mb-2 group-hover:underline">
                            Cliquez pour suivre le lien
                        </p>
                        <div
                            class="font-bold text-xl md:text-2xl flex items-center justify-center md:justify-start gap-2">
                            <p
                                class="group-hover:underline font-bold text-xl md:text-2xl flex items-center justify-center md:justify-start gap-2">
                                pour la phase test</p>
                            <span class="text-3xl md:text-4xl animate-bounce">✨👌</span>
                        </div>
                    </a>

                </div>
                <div class="flex relative justify-center md:justify-end p-2 px-4 text-left">
                    <img src="@/assets/image/interface.png" alt="Aperçu des interfaces"
                        class="w-full md:w-auto max-w-xl h-auto drop-shadow-2xl rounded-lg" />
                </div>
            </div>

        </div>

    </header>
    
  <!-- Slider images -->
  <div class="overflow-hidden relative w-full h-[200px] md:h-[300px] p-4 mx-auto font-[Poppins]">
  </div>
    <!-- Section À Propos -->
    <section id="Apropos" class="min-h-screen bg-gray-900 py-20 px-6 text-white">
        <div class="max-w-7xl mx-auto">

            <!-- Titre de la section -->
            <div class="text-center mb-10">
                <h2 class="text-5xl md:text-6xl font-bold  mb-4">
                    À Propos de <span class="text-[#0FDBD0]">Nous</span>
                </h2>
                <div class="w-24 h-1 bg-[#0FDBD0] mx-auto rounded-full"></div>
            </div>

            <!-- Contenu principal -->
            <div class="grid md:grid-cols-2 md:gap-12 gap-8 justify-center items-center mb-8">

                <!-- Partie Gauche - Texte -->
                <div class="flex-1 flex-col ">

                    <!-- Introduction -->
                    <div
                        class="bg-white/5  rounded-2xl p-8 border border-white/10 hover:border-[#0FDBD0]/50 transition-all duration-300">
                        <h3 class="text-3xl font-bold t mb-4 flex items-center gap-3">
                            <span class="text-[#0FDBD0]">👋</span> Bonjour !
                        </h3>
                        <p class=" text-lg leading-relaxed">
                            Je suis <span class="text-[#0FDBD0] font-semibold">Marie Shalice</span>,
                            une développeuse fullstack junior passionnée par la création d'expériences web
                            modernes et intuitives. Je transforme des idées en applications fonctionnelles
                            et esthétiques.
                        </p>
                    </div>
                    <div
                        class=" mt-3 bg-gradient-to-br from-[#0FDBD0]/10 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-[#0FDBD0]/30  hover:border-[#0FDBD0]/60 transition-all duration-300">
                        <h3 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-7 h-7 text-[#0FDBD0]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                            </svg>
                            Mes aspirations
                        </h3>
                        <p class=" text-[16px] leading-relaxed">
                            Mon objectif est de devenir une développeuse fullstack confirmée, capable de
                            concevoir des solutions complètes et innovantes. Je souhaite continuer à apprendre
                            les dernières technologies, contribuer à des projets open source, et créer des
                            applications qui ont un impact positif sur la vie des utilisateurs.
                        </p>
                    </div>
                </div>

                <!-- Nos fonctionnalites -->
                <div
                    class=" flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#0FDBD0]/50 transition-all duration-300">
                    <h3 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-7 h-7 text-[#0FDBD0]">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                     Nos Fonctionnalités
                    </h3>
                    <ul class="space-y-3  gap-4 grid md:grid-cols-2 ">
                        <li v-for="(fonct, index) in fonctionnalites" :key="index" :fonct="fonct" class="flex items-center gap-4 text-[16px]">
                            <span class="text-[#0FDBD0] text-xl mt-1">✓</span>
                            <span class="text-[20px]  font-semibold t">{{ fonct }}</span>
                        </li>
                       
                    
                       
                        <li v-for="(fonct, index) in fonctionnalites1" :key="index" :fonct="fonct" class="flex items-center gap-4 text-[16px]">
                            <span class="text-[#0FDBD0] text-xl mt-1">✓</span>
                            <span class="text-[20px]  font-semibold t">{{ fonct }}</span>
                        </li>
                       
                    </ul>
                </div>

            </div>

        </div>
    </section>



  <!-- Image fonctionnalités -->

  <section class="bg-white flex  flex-col gap-3 font-[Poppins] mt-8">
    <div class="max-w-4xl mx-auto text-center  gap-1">
      <h2 class="text-xl md:text-2xl font-bold mb-1 text-black">
        Voici trois critères convaincants qui pourraient vous
      </h2>
      <h2 class="text-[15px] md:text-2xl font-bold mb-1 text-black"> inciter vous grande entreprise ou petite
        commerçants à
      </h2>
      <h2 class="text-[15px] md:text-2xl font-bold mb-1 text-black">adopter notre logiciel de gestion comptable, de
        stock et
      </h2>
      <h2 class="text-[15px] md:text-2xl font-bold mb-1 text-black"> commercial en 3 en 1</h2>
    </div>

    <div class="flex justify-around gap-20 mb-10 px-8 bg-white">
      <!-- Fonctionnalité 1 -->
      <div class="flex flex-col items-center max-w-[270px]">
        <div class="w-full h-[200px] flex items-center justify-center">
          <img src="./../assets/image/Group.png" alt="">
        </div>
        <div class="flex flex-col gap-5">
          <h2 class="text-[14px] md:text-[18px] font-bold  text-black flex ">Suivie de stock en temps réel </h2>
          <p class="text-[15px]  text-center text-gray-700">
            Alertes automatiques, tableaux de bord dynamiques,
            et génération de rapports instantanés pour une prise de
            décision rapide et éclairée.
          </p>

        </div>

      </div>

      <!-- Fonctionnalité 2 -->
      <div class="flex flex-col items-center max-w-[270px]">
        <div class="w-full h-[200px] flex items-center justify-center">
          <img src="./../assets/image/Group (1).png" alt="">
        </div>

        <div class="flex flex-col gap-5">
          <h2 class="text-[14px] md:text-[18px] font-bold  text-black flex ">Suivie de stock en temps réel </h2>
          <p class="text-[15px] mb-6 text-center text-gray-700">
            Une image plus professionnelle (factures conformes, suivi client structuré),
            une meilleure organisation, et des données fiables pour convaincre partenaires
            ou investisseurs.
          </p>
        </div>
      </div>

      <!-- Fonctionnalité 3 -->
      <div class="flex flex-col items-center max-w-[250px]">
        <div class="w-full h-[200px] flex items-center justify-center">
          <img src="./../assets/image/Group (2).png" alt="">
        </div>
        <div class="flex flex-col gap-5">
          <h2 class="text-[14px] md:text-[18px] font-bold  text-black flex ">Centralisation des opérations</h2>
          <p class="text-[15px] mb-6 text-center text-gray-700">
            Une seule plateforme pour gérer la comptabilité, le stock et les ventes,
            ce qui réduit les erreurs, les doublons et les pertes de données.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class=" overflow-y-hidden  w-full flex justify-between  gap-40 h-[900px] bg-[#33268F] font-[Poppins] ">

    <!-- Dégradé positionné  en haut a gauche-->
    <div class="w-[200px] h-[500px] relative overflow-hidden ">
      <div class="absolute top-0 left-0 w-1/2 h-1/2 blur-[80px]   bg-[#FE7098] rounded-full"></div>
    </div>
    <div class="w-full flex flex-col gap-10">

      <div class="flex flex-col justify-center items-center fixed-50">
        <h2 class="w-full text-2xl md:text-2xl  text-center flex  justify-center font-bold mb-2 mt-5 text-white   ">
          Nos Differents Plan</h2>
        <img src="./../assets/image/trait.png" alt="" class="w-[200px] h-4">
      </div>
      <div class="flex flex-col gap-2 w-full">

        <div class="w-full flex flex-col md:flex-row gap-6 justify-center items-center">

          <!-- <Paiement v-for="(plan, index) in planDb" :key="index" :plan="plan" /> -->
          <Paiement v-for="(plan, index) in planDb" :key="index" :plan="plan" />
        </div>

        <div class="w-full h-[150px] flex justify-between">

          <div class="flex justify-start hover:scale-105 w-[100px] h-[100px] ">
            <img src="./../assets/image/carre .png" alt="">
          </div>
          <div class="w-[200px] h-[200px] relative overflow-hidden rounded-full">
            <!-- Dégradé blanc sans bordures visibles -->
            <div class="absolute bg-white h-1/2 w-[150px] backdrop-blur-[60px] left-0 top-0 right-0 rounded-full"></div>
          </div>

        </div>

      </div>
    </div>
    <!-- Dégradé inversé en haut à droite -->
    <div class="w-[300px] h-[800px] relative overflow-hidden">

      <div class="absolute top-0 right-0 w-1/2 h-1/2 blur-[80px] bg-[#0802B7] rounded-full"></div>
    </div>


  </section>
  <personne />
  <footer class="w-full bg-gray-100 p-4 md:p-6">
    <section class="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-10">
      <!-- Titre -->
      <div class="text-center mb-8">
        <h2 class="text-[#1F2937] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Contactez-nous pour<br />une phase de test
        </h2>
      </div>

      <!-- Formulaire -->
      <form @submit.prevent="submitForm" class="max-w-2xl mx-auto space-y-5">
        <!-- Nom et prénom -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="relative">
            <input v-model="form.firstName" type="text" placeholder="First Name*"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 placeholder-gray-400"
              required />
          </div>
          <div class="relative">
            <input v-model="form.lastName" type="text" placeholder="Last Name*"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 placeholder-gray-400"
              required />
          </div>
        </div>

        <!-- Email -->
        <div class="relative">
          <input v-model="form.email" type="email" placeholder="Email*"
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 placeholder-gray-400"
            required />
        </div>

        <!-- Phone -->
        <div class="relative">
          <input v-model="form.phone" type="tel" placeholder="Phone Number*"
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 placeholder-gray-400"
            required />
        </div>

        <!-- Message -->
        <div class="relative">
          <input type="text" v-model="form.message" placeholder="Your message..." rows="5"
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 placeholder-gray-400 resize-none"
            required></input>
        </div>

        <!-- Bouton d'envoi -->
        <button type="submit"
          class="w-full bg-[#1E293B] text-white py-3.5 px-6 rounded-lg font-semibold hover:bg-[#0F172A] transition-colors duration-200">
          Send Message
        </button>

        <!-- Lien -->
        <p class="text-center text-blue-600 font-medium mt-6">
          <a href="#" class="hover:underline inline-flex items-center gap-1">
            Cliquez pour Suivre le lien pour la phase test 👍👌
          </a>
        </p>
      </form>
    </section>
  </footer>
  <!-- Section info bleue -->
  <section class="w-full bg-[#0EA5E9] py-12">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
        <!-- Phone -->
        <div class="flex flex-col items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold">Phone</h3>
          <p class="text-sm">+237 693 26 35 17</p>
          <p class="text-sm opacity-90">info@leogicom.com</p>
        </div>

        <!-- Localisation -->
        <div class="flex flex-col items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold">Localisation</h3>
          <p class="text-sm">Douala, Cameroun</p>
          <p class="text-sm opacity-90">Akwa ancien collège les Travailleurs</p>
        </div>

        <!-- Hours -->
        <div class="flex flex-col items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold">Hours</h3>
          <p class="text-sm">Lun-Ven: 8h-18h</p>
          <p class="text-sm opacity-90">Sam: 8h-12h</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer noir -->
  <footer class="w-full bg-[#000000] text-white py-12">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
        <!-- Logo et description -->
        <div class="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
          <div class="w-20 h-20 md:w-24 md:h-24">
            <img src="./../assets/image/OBJECTS.png" alt="SG-Stocks Logo" class="w-full h-full object-contain">
          </div>
          <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
            Contactez-nous pour entrer en possession de votre logiciel.
          </p>
          <div class="flex gap-3 justify-center md:justify-start">
            <a href="#"
              class="w-9 h-9 bg-white/10 hover:bg-[#0EA5E9] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Facebook">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#"
              class="w-9 h-9 bg-white/10 hover:bg-[#0EA5E9] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Twitter">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#"
              class="w-9 h-9 bg-white/10 hover:bg-[#0EA5E9] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div class="space-y-4 text-center md:text-left">
          <h3 class="text-base md:text-lg font-bold text-white">Services</h3>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li>
              <a href="#" class="hover:text-[#0EA5E9] transition-colors inline-block hover:translate-x-1 duration-300">
                Logiciel comptable
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-[#0EA5E9] transition-colors inline-block hover:translate-x-1 duration-300">
                Suivi et maintenance logicielle
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-[#0EA5E9] transition-colors inline-block hover:translate-x-1 duration-300">
                Formation sur le logiciel
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4 text-center md:text-left">
          <h3 class="text-base md:text-lg font-bold text-white">Contact Info</h3>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li class="flex items-center gap-2 justify-center md:justify-start">
              <svg class="w-4 h-4 text-[#0EA5E9] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+237693293817" class="hover:text-[#0EA5E9] transition-colors">
                +237 693 293 817
              </a>
            </li>
            <li class="flex items-center gap-2 justify-center md:justify-start">
              <svg class="w-4 h-4 text-[#0EA5E9] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:info@leogicom.com" class="hover:text-[#0EA5E9] transition-colors">
                info@leogicom.com
              </a>
            </li>
            <li class="flex items-center gap-2 justify-center md:justify-start">
              <svg class="w-4 h-4 text-[#0EA5E9] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd" />
              </svg>
              <span>Douala, Cameroun</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-6 md:pt-8 border-t border-gray-800 text-center">
        <p class="text-gray-500 text-xs md:text-sm">
          © 2025 Leogicom. All rights reserved.
        </p>
      </div>
    </div>
  </footer>


</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import Paiement from './../components/paiementessaie.vue'
import personne from '@/components/personne.vue';
import { reactive } from 'vue';

const mobileMenuOpen = ref(false)
const userMenuOpen = ref(false)

// État de connexion (à remplacer par votre logique d'authentification)
const isConnected = ref(false) // L'utilisateur n'est pas connecté au départ
const userName = ref('invite')
const userEmail = ref('invite@sgstock.com')
const planDb = ref([

  {
    'classe': 'Demarage simple', "economie": "4 550", "pi": "19,450", "pf": "15000", features: [
      'Suivre les revenus et les dépenses',
      'Envoyez un nombre limité de factures',
      'Pour un seul point de vente',
      'pour 03 utilisateur admin max',
      'Gestion 01 magasin',
      'Stocks, produits, services',
      'gestion des depenses',
      'Suivre vos statistiques',
      '3Go d\'espace pour vos donnee'
    ],
  },
  {
    'classe': 'Proffesionnel', "economie": "10 000", "pi": "50,000", "pf": "40000", features: [
      'Suivre les revenus et les dépenses',
      'Envoyez un nombre illimité de factures',
      'Pour 5 point de vente maxi',
      'Gestion 05 magasin',
      'pour 07 utilisateur admin max',
      'Stocks, produits, services',
      'Encaissement, decaissement',
      'Gestion des emprunts',
      'gestion des depenses'
    ],
    comingSoon: ['Encaissement, decaissement', 'Gestion des emprunts', 'gestion des depenses'],
  },
  {
    'classe': ' Avancé', "economie": "20 000", "pi": "80,000", "pf": "60000", features: [
      'Suivre les revenus et les dépenses',
      'Envoyez un nombre illimité de factures',
      'Pour 15 point de vente maxi',
      'Stocks, produits, services',
      'Encaissement, decaissement',
      'Gestion des emprunts',
      'gestion des depenses',
      'Mouvement stocks',
      'Suivre vos statistiques'
    ],
    comingSoon: ['gestion des depenses', 'Mouvement stocks', 'Suivre vos statistiques'],
  }]);
  const fonctionnalites=ref([
       'Gestion de stock','Gestion des ventes','Facturation', 'Caisse','Tableau de board','Emprunts', 'Dépenses'])
   const fonctionnalites1=ref([
       'Gestion des fournisseurs' ,'Gestion des Client', 'Enregistrement des mouvements','Bilan de résultat','Gestion Collaborateur'
  ])
  

// Toggle du menu utilisateur
const toggleUserMenu = () => {
    userMenuOpen.value = !userMenuOpen.value
}

// Fermer le menu si on clique ailleurs
const handleClickOutside = (event) => {
    if (userMenuRef.value && !userMenuRef.value.contains(event.target)) {
        userMenuOpen.value = false
    }
}

// Connexion
const handleLogin = () => {
    // Simuler la connexion (remplacez par votre vraie logique)
    isConnected.value = true
    userName.value = 'Charly'
    userEmail.value = 'charly@sgstock.com'
    
    console.log('Connexion réussie')
    mobileMenuOpen.value = false
    userMenuOpen.value = false
    
    // Redirection vers la page de connexion si nécessaire
    // window.location.href = '/login'
}

// Déconnexion
const handleLogout = () => {
    isConnected.value = false
    userName.value = ''
    userEmail.value = ''
    
    console.log('Déconnexion réussie')
    mobileMenuOpen.value = false
    userMenuOpen.value = false
}

// Ajouter l'écouteur de clic au montage du composant
onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

// Retirer l'écouteur avant de détruire le composant
onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})


const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
});

function submitForm() {
  // Vous pouvez traiter ici les données du formulaire
  alert(`Message envoyé par ${form.firstName} ${form.lastName}`);
  // Réinitialiser le formulaire si nécessaire
  form.firstName = '';
  form.lastName = '';
  form.email = '';
  form.phone = '';
  form.message = '';
}


</script>