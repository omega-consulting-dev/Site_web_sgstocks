<template>
  <!-- En-tête -->
  <!-- HEADER PRINCIPAL -->
  <header class=" group relative w-full min-h-screen md:min-h-[600px] lg:min-h-[700px] overflow-hidden  font-[Poppins bg-gradient-to-r from-white to-transparent">
      <!-- Fond dégradé -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#77C1EB] via-[#9B7EC4] to-[#dfb49fec]"></div>

    <!-- Overlay transparent (optionnel pour plus de profondeur) -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-white/10"></div>

    <!-- BOUTON CONNEXION (top right) -->
    <div class="absolute top-4 right-4 md:top-6 md:right-8 lg:top-8 lg:right-12 z-20">
      <button
        class="bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold px-5 py-2 md:px-7 md:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base">
        Connexion
      </button>
    </div>

    <!-- CONTENU PRINCIPAL -->
    <div class="relative z-30 container mx-auto px-4 md:px-6 lg:px-8 pt-20 md:pt-15 pb-12">

      <!-- LOGO CENTRÉ -->
      <div class="flex justify-center mb-6 md:mb-5">
        <img src="@/assets/image/OBJECTS.png" alt="SG-Stocks Logo" class="w-48 md:w-56 lg:w-70 h-auto object-contain" />
      </div>

      <!-- TITRE PRINCIPAL -->
      <h1
        class="text-white text-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 md:mb-6 leading-tight">
        Simplifiez votre comptabilité
        <br class="hidden sm:block" />
        <span class="block mt-2">avec sgstocks</span>
      </h1>

      <!-- SECTION DESCRIPTION + IMAGE -->
      <div class="flex flex-col  justify-center  items-center w-full lg:flex-row   gap-8 lg:gap-20 mb-8 md:mb-12">

        <!-- DESCRIPTION (Gauche sur desktop, haut sur mobile) -->
        <div class="flex justify-center items-center text-center   w-1/2 lg:text-center max-w-xl">
          <p class="  text-white text-sm md:text-base lg:text-lg leading-relaxed opacity-95">
            Faites un suivi de votre stock, en contrôlant vos dépenses
            et ressortez votre compte de résultat, vos charges, vos
            produits, et votre bénéfice
          </p>
        </div>


      </div>


      <!-- CTA -->
      <!-- Texte du lien à gauche -->
      <div class="flex  justify-center items-center gap-20 w-full text-center md:text-center ">

        <a href="#" class="group  flex-col gap-1 justify-center ">
          <p class="text-[#6500F3] font-bold text-xl md:text-2xl mb-2 hover:underline">
            Cliquez pour suivre le lien
          </p>
          <p
            class="text-[#6500F3] font-bold text-xl md:text-2xl flex items-center justify-center md:justify-start gap-2">
            pour la phase test
            <span class="text-3xl md:text-4xl animate-bounce">✨👌</span>
          </p>
        </a>

      </div>

    </div>
    <div class="flex relative justify-end p-2  px-4 text-left">


      <img src="@/assets/image/interface.png" alt="Aperçu des interfaces"
        class="w-50 h-auto drop-shadow-2xl rounded-lg" />
    </div>
  </header>

  <!-- Slider images -->
  <div class="overflow-hidden relative w-full h-[200px] md:h-[300px] p-4 mx-auto font-[Poppins]">
  </div>


  <!-- Section fonctionnalités -->
  <section class="w-full flex items-center bg-[#f1f3f6de] mb-10 py-16 px-25 font-[Poppins]">
    <!-- Partie gauche -->
    <div class="flex w-3/5">
      <div class="text-left">
        <h2 class="text-[25px] md:text-[30px] font-bold text-black mb-2">
          Les fonctionnalités de
        </h2>
        <h2 class="text-[25px] md:text-[30px] font-bold text-black mb-4">
          notre logiciel
        </h2>
        <p class="text-[15px] text-gray-700 max-w-[600px] mb-8">
          Notre logiciel a été conçu pour répondre aux besoins concrets des professionnels et des entreprises en
          quête d'efficacité, de simplicité et de performance. Grâce à une interface intuitive et des outils puissants,
          il vous accompagne dans vos tâches quotidiennes, optimise vos processus et vous aide à atteindre vos objectifs
          plus rapidement.
          Découvrez ci-dessous les fonctionnalités clés qui font de notre solution un véritable allié dans votre
          activité.
        </p>

        <!-- Liste de fonctionnalités -->
        <div class="flex  justify-between gap-8">
          <!-- Fonctionnalités de gauche -->
          <div class="flex  flex-col space-y-4">
            <!-- Fonctionnalité 1 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Gestion des stocks</p>
            </div>
            <!-- Fonctionnalité 2 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Gestion des Achats/Ventes</p>
            </div>
            <!-- Fonctionnalité 3 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Suivi des ventes</p>
            </div>
            <!-- Fonctionnalité 4 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Rapports analytiques</p>
            </div>
          </div>

          <!-- Fonctionnalités de droite -->
          <div class="flex  flex-col space-y-4">
            <!-- Fonctionnalité 1 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Gestion des Fournisseurss</p>
            </div>
            <!-- Fonctionnalité 2 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Gestion des Achats / ventes</p>
            </div>
            <!-- Fonctionnalité 3 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Gestion des Clients</p>
            </div>
            <!-- Fonctionnalité 4 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Statistiques</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Partie droite - Image avec slider -->
    <div class="w-2/5 flex justify-center items-center px-8 relative">
      <div class="relative w-full max-w-lg">

        <img src="./../assets/image/Frame.png" alt="">
      </div>
    </div>
  </section>


  <!-- Image fonctionnalités -->

  <section class="bg-white flex  flex-col gap-3 font-[Poppins]">
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
        
        <!-- Message de succès -->
        <div v-if="showSuccess" class="bg-green-50 border-2 border-green-500 rounded-lg p-4 text-center">
          <div class="flex items-center justify-center gap-2 text-green-700 font-semibold">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            {{ successMessage }}
          </div>
        </div>

        <!-- Lien -->
        <p class="text-center text-blue-600 font-medium mt-6">
          <a href="https://demo.sgstocks.com/login?demo=true" target="_blank" class="hover:underline inline-flex items-center gap-1">
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
          <p class="text-sm opacity-90">info@sgstocks.com</p>
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
              <a href="mailto:info@sgstocks.com" class="hover:text-[#0EA5E9] transition-colors">
                info@sgstocks.com
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
          © 2025 Sgstocks. All rights reserved.
        </p>
      </div>
    </div>
  </footer>



</template>



<script setup>
import { ref } from 'vue'
// import Paiement from './../components/paiement.vue'
import Paiement from './../components/paiementessaie.vue'
import personne from '@/components/personne.vue';
import { reactive } from 'vue';

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
});

const successMessage = ref('')
const showSuccess = ref(false)

function submitForm() {
  // Afficher un message de succès
  successMessage.value = `Merci ${form.firstName} ${form.lastName}, votre message a été envoyé avec succès !`
  showSuccess.value = true
  
  // Réinitialiser le formulaire
  form.firstName = '';
  form.lastName = '';
  form.email = '';
  form.phone = '';
  form.message = '';
  
  // Masquer le message après 5 secondes
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}
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

// import image5 from '@/assets/image/slide/Frame 2.png';
// import image6 from '@/assets/image/slide/Frame 3 (1).png';
// import image7 from '@/assets/image/slide/Frame 4.png';
// import image8 from '@/assets/image/slide/Frame 5.png';
// import image9 from '@/assets/image/slide/Frame 6.png';
// import image10 from '@/assets/image/slide/Frame.png';

// export default {
//   data() {
//     return {
//       images: [image5, image6, image7, image8, image9, image10,],
//       currentIndex: 0,
//     };
//   },
//   methods: {
//     prevSlide() {
//       this.currentIndex =
//         this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
//     },
//     nextSlide() {
//       this.currentIndex =
//         this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
//     },
//     goToSlide(index) {
//       this.currentIndex = index;
//     },
//   },

// };

</script>