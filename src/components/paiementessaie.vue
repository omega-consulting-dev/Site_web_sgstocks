<template>
    <!-- Le wrapper avec le dégradé (agit comme bordure) -->
    <section class="relative bg-gradient-to-r from-[#153ABF] via-[#153ABF] to-[#2B59FF] 
                 rounded-[10px] p-[2px] hover:-translate-y-4 transition-all duration-500 group">

        <!-- Le contenu principal -->
        <main class="group relative overflow-hidden flex flex-col text-black
               w-[270px] sm:w-[280px] md:w-[300px] lg:w-[320px] min-h-[600px] 
               font-[Poppins] bg-white rounded-[10px] shadow-lg
               hover:bg-[#000B6B] hover:shadow-2xl 
               transition-all duration-500 hover:-translate-y-4">

            <!-- Contenu avec padding -->
            <div class=" p-6 flex flex-col h-full">

                <!-- Badges en haut -->
                <div class="flex flex-col gap-2 mb-4">
                    <!-- Badge Populaire (conditionnel) -->
                    <div v-if="plan.classe == 'Proffesionnel'" class="flex">
                        <button class="text-[13px] px-3 py-1 rounded-[5px] font-bold bg-[#A9B2FF] text-[#000B6B]">
                            Populaire
                        </button>
                    </div>

                    <!-- Badge Classe -->
                    <button class="text-[13px] w-fit px-3 py-1 rounded-[5px] font-bold bg-[#e6e6e6] text-[#000000d7]
                                 group-hover:bg-white group-hover:text-[#000B6B] transition-colors">
                        {{ plan.classe }}
                    </button>
                </div>

                <!-- Section Prix -->
                <div class="flex flex-col items-center mb-6">

                    <!-- Message d'économie -->
                    <div class="flex items-center gap-1 text-[11px] mb-3 group-hover:text-white transition-colors">
                        <span>Economisez jusqu'à</span>
                        <span class="font-semibold">{{ plan.economie }}</span>
                        <span>FCFA/mois</span>
                    </div>

                    <!-- Ligne de séparation -->
                    <hr class="w-[180px] border-gray-300 mb-4 group-hover:border-gray-500">

                    <!-- Prix Initial Barré -->
                    <div class="flex items-baseline gap-1 mb-2">
                        <span class="text-[22px] font-semibold text-gray-400 line-through">{{ plan.pi }}</span>
                        <span class="text-[11px] text-gray-400">FCFA</span>
                    </div>

                    <!-- Prix Final -->
                    <div class="flex items-baseline gap-1">
                        <span class="text-[40px] font-bold text-black group-hover:text-white transition-colors">
                            {{ plan.pf }}
                        </span>
                        <div class="flex flex-col text-black group-hover:text-white transition-colors">
                            <span class="text-[14px] font-semibold">FCFA</span>
                            <span class="text-[12px]">/mois</span>
                        </div>
                    </div>

                    <!-- Badge Limité -->
                    <div class="mt-4 w-full">
                        <p class="text-[11px] text-gray-600 mb-2 group-hover:text-gray-300 transition-colors">
                            Limité
                        </p>
                        <hr class="w-full border-gray-300 group-hover:border-gray-500">
                    </div>
                </div>

                <!-- Liste des fonctionnalités -->
                <ul class="flex flex-col gap-3 mb-6 flex-1">
                    <li v-for="(feature, idx) in plan.features" :key="idx"
                        class="flex items-start gap-3 text-[12px] text-black group-hover:text-white transition-colors">

                        <!-- Icône de check -->
                        <div class="flex-shrink-0 w-[20px] h-[20px] bg-black group-hover:bg-white 
                                  rounded-full flex items-center justify-center transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                stroke="currentColor"
                                class="w-3 h-3 text-white group-hover:text-black transition-colors">
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
                <div class="flex flex-col items-center gap-3 mt-auto">
                    <button class="w-full bg-[#F9D783] text-[#000B6B] rounded-md py-3 px-4
                                 text-[14px] font-semibold hover:bg-[#f5d06c] transition-colors">
                        Essai gratuit pendant 14 jours
                    </button>

                    <p class="text-center text-[11px] text-gray-500 group-hover:text-gray-300 transition-colors">
                        Carte de crédit non requise
                    </p>
                </div>

            </div>
        </main>
    </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    plan: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
/* Amélioration du line-through sur le prix initial */
.line-through {
    text-decoration-thickness: 2px;
}
</style>