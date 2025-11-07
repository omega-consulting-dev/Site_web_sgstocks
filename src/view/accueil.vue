<template>
  <!-- En-tête -->
  <!-- HEADER PRINCIPAL -->
  <header
    class="relative   w-full min-h-screen md:min-h-[600px] lg:min-h-[700px] overflow-hidden  font-[Poppins]">

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
    <div class="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 pt-20 md:pt-24 pb-12">

      <!-- LOGO CENTRÉ -->
      <div class="flex justify-center mb-6 md:mb-8">
        <img src="@/assets/image/OBJECTS.png" alt="SG-Stocks Logo" class="w-48 md:w-56 lg:w-64 h-auto object-contain" />
      </div>

      <!-- TITRE PRINCIPAL -->
      <h1
        class="text-white text-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 md:mb-6 leading-tight">
        Simplifiez votre comptabilité
        <br class="hidden sm:block" />
        <span class="block mt-2">avec leaGcom</span>
      </h1>

      <!-- SECTION DESCRIPTION + IMAGE -->
      <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-8 md:mb-12">

        <!-- DESCRIPTION (Gauche sur desktop, haut sur mobile) -->
        <div class="flex-1 text-center lg:text-left max-w-xl">
          <p class="text-white text-sm md:text-base lg:text-lg leading-relaxed opacity-95">
            Faites un suivi de votre stock, en contrôlant vos dépenses
            et ressortez votre compte de résultat, vos charges, vos
            produits, et votre bénéfice
          </p>
        </div>

        <!-- IMAGE INTERFACE (Droite sur desktop, bas sur mobile) -->
        <div class="flex-shrink-0 relative text-end">


          <img src="@/assets/image/interface.png" alt="Aperçu des interfaces"
            class="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto drop-shadow-2xl rounded-lg" />
        </div>
      </div>


      <!-- CTA -->
      <!-- Texte du lien à gauche -->
      <div class="flex w-10/15 text-center md:text-left">
        <a href="#" class="inline-block group">
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

  <section class="group overflow-y-hidden  w-full flex justify-between  gap-40 h-[800px] bg-[#33268F] font-[Poppins] ">

    <!-- Dégradé positionné  en haut a gauche-->
    <div class="w-[200px] h-[500px] relative overflow-hidden ">
      <div class="absolute top-0 left-0 w-1/2 h-1/2 blur-[80px]   bg-[#FE7098] rounded-full"></div>
    </div>
    <div class="w-full flex flex-col ">
      <h2 class=" w-full text-2xl md:text-2xl  text-center flex justify-center font-bold mb-10 text-white">Nos
        Differents
        Plan</h2>
      <div class="flex flex-col gap-2 w-full h-[800px]">

        <div class="w-full flex justify-between gap-6 ">

          <!-- <Paiement v-for="(plan, index) in planDb" :key="index" :plan="plan" /> -->
          <Paiement v-for="(plan, index) in planDb" :key="index" :plan="plan" />
        </div>

        <div class="w-full h-[150px] flex justify-between">

          <div class="flex justify-start hover:scale-105 w-[100px] h-[100px] ">
            <img src="./../assets/image/carre .png" alt="">
          </div>
          <div class="w-[200px] h-[200px] relative overflow-hidden rounded-full">
            <!-- Dégradé blanc sans bordures visibles -->
            <div class="absolute bg-white h-1/2 w-[150px] blur-[80px] left-0 top-0 right-0 rounded-full"></div>
          </div>

        </div>

      </div>
    </div>
    <!-- Dégradé inversé en haut à droite -->
    <div class="w-[500px] h-[800px] relative overflow-hidden">

      <div class="absolute top-0 right-0 w-1/2 h-1/2 blur-[80px] bg-[#0802B7] rounded-full"></div>
    </div>

  </section>

</template>



<script setup>
import { ref } from 'vue'
// import Paiement from './../components/paiement.vue'
import Paiement from './../components/paiementessaie.vue'

const planDb = ref([

  { 'classe': 'Demarage simple', "economie": "4 550", "pi": "19,450", "pf": "15000",    features: [
      'Suivre les revenus et les dépenses',
      'Envoyez un nombre limité de factures',
      'Pour un seul point de vente',
      'pour 03 utilisateur admin max',
      'Gestion 01 magasin',
      'Stocks, produits, services',
      'gestion des depenses',
      'Suivre vos statistiques',
      '3Go d\'espace pour vos donnee'
    ], },
  { 'classe': 'Proffesionnel', "economie": "10 000", "pi": "50,000", "pf": "40000",   features: [
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
  { 'classe': ' Avancé', "economie": "20 000", "pi": "80,000", "pf": "60000",   features: [
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
    } ]);

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