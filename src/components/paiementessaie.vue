<template>
    <!-- Le wrapper avec le dégradé (agit comme bordure) -->

 
        <main class="relative overflow-hidden flex flex-col text-black
       w-[270px] sm:w-[280px] md:w-[300px] lg:w-[320px] min-h-[600px] h-[680px]
       font-[Poppins] bg-white rounded-[10px] border-[2px] shadow-lg border-r-[#153ABF] border-t-[#153ABF] border-b-[#153ABF] border-l-[#2B59FF]
       hover:bg-[#000B6B] hover:shadow-2xl hover:-translate-y-4
       transition-all duration-500 group  ">
            <!-- Dégradé en bas, visible uniquement au hover -->


            <!-- Contenu avec padding -->
            <div class="p-6 flex flex-col h-full  ">

                <!-- Badges en haut -->
                <div class="flex flex-col gap-1 mb-3">
                    <!-- Badge Populaire (conditionnel) -->
                    <div v-show="plan.classe == 'Proffesionnel'" class="flex flex-col gap-[5px] top-4 mb-1">
                        <button class="text-[13px] px-3 py-1 rounded-[5px] font-bold bg-[#A9B2FF] text-[#000B6B] w-fit group-hover:text-white">
                            Populaire
                        </button>
                        <!-- Badge Classe -->

                    </div>
                    <button
                        class="text-[13px] w-fit px-3 py-1 rounded-[5px] font-bold bg-[#e6e6e6] text-[#000000d7] transition-colors duration-300  group-hover:bg-gray-200 group-hover:text-[#000B6B]">
                        {{ plan.classe }}
                    </button>



                </div>

                <!-- Section Prix -->
                <div class="flex flex-col items-center mb-6">

                    <!-- Message d'économie -->
                    <div
                        class="flex items-center gap-1 text-[11px] mb-3 transition-colors duration-300 
                        
                        
                        group-hover:text-white">
                        <span>Economisez jusqu'à</span>
                        <span class="font-semibold">{{ plan.economie }}</span>
                        <span>FCFA/mois</span>
                    </div>

                    <!-- Ligne de séparation -->
                    <hr class="w-[180px] border-gray-300 mb-4 transition-colors duration-300 group-hover:border-gray-500">

                    <!-- Prix Initial Barré -->
                    <div class="flex items-baseline gap-1 mb-2">
                        <span class="text-[22px] font-semibold text-gray-400 line-through group-hover:text-white">{{ plan.pi }}</span>
                        <span class="text-[11px] text-gray-400 group-hover:text-white">FCFA</span>
                    </div>

                    <!-- Prix Final -->
                    <div class="flex justify-start items-center font-semibold w-fit h-fit  font-sans  gap-1 ml-4 ">
                        <h2 class="text-black  text-[30px]  group-hover:text-white">{{ plan.pf }}</h2>
                        <div class="flex justify-end items-end gap-0 font-semibold mt-1 group-hover:text-white ">
                            <span class=" text-[15px]">FCFA</span>
                            <div class="flex justify-end items-end  gap-0">
                                <span class=" text-[20px] ">/</span>
                                <span class=" text-[15px] mr-2">mois</span>

                            </div>
                        </div>

                    </div>

                    <!-- Badge Limité -->
                    <div class="mt-4 w-full">
                        <p class="text-[11px] text-gray-600 mb-2 transition-colors duration-300 
                        
                        group-hover:text-gray-300">
                            Limité
                        </p>
                        <hr class="w-full border-gray-300 transition-colors duration-300 group-hover:border-gray-500" />
                    </div>
                </div>

                <!-- Liste des fonctionnalités -->
                <ul class="flex flex-col gap-3 mb-4 flex-1">
                    <li v-for="(feature, idx) in plan.features" :key="idx"
                        class="flex items-start gap-3 text-[12px] text-black transition-colors duration-300 group-hover:text-white">

                        <!-- Icône de check -->
                        <div
                            class="flex-shrink-0 w-[20px] h-[20px] bg-black rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                stroke="currentColor"
                                class="w-3 h-3 text-white transition-colors duration-300 group-hover:text-black">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>

                        <!-- Texte de la fonctionnalité -->
                        <span class="flex-1">{{ feature }}</span>

                        <!-- Badge Coming Soon -->
                        <span v-if="plan.comingSoon && plan.comingSoon.includes(feature)"
                            class="flex-shrink-0 bg-[#C9FAD6] text-[#1AA703] text-[9px] px-2 py-1 rounded whitespace-nowrap">
                            Coming Soon
                        </span>
                    </li>
                </ul>

                <!-- Bouton et footer -->
                <div class="flex flex-col items-center gap-2 mt-auto">
                    <button class="w-full bg-[#F9D783] text-[#000B6B] rounded-md py-[6px] px-4
                       text-[14px] font-semibold group-hover:bg-[#f5d06c] transition-colors">
                        Essai gratuit pendant 14 jours
                    </button>

                    <p class="text-center text-[11px] text-gray-500 transition-colors duration-300 group-hover:text-gray-300">
                        Carte de crédit non requise
                    </p>
                </div>

            </div>
        </main>
  
</template>

<script setup>
defineProps({
    plan: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
/* Si besoin, tu peux ajouter des styles spécifiques ici */
</style>