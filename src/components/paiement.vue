<template>
    <!-- Carte de tarification améliorée avec hauteur auto -->
    <main class="relative overflow-visible flex flex-col text-black
       w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[380px] 
       h-auto
       font-[Poppins] bg-white rounded-2xl shadow-xl 
       border-2 border-indigo-200
       hover:border-indigo-400 hover:shadow-2xl hover:-translate-y-2
       transition-all duration-300 group">

            <!-- Contenu avec padding optimisé -->
            <div class="p-5 sm:p-6 lg:p-8 flex flex-col">

                <!-- Badges en haut -->
                <div class="flex flex-col gap-2 mb-4">
                    <!-- Badge Populaire (conditionnel) -->
                    <div v-show="plan.classe == 'PACK 2'" class="flex justify-center mb-1">
                        <span class="text-xs sm:text-sm px-4 py-1.5 rounded-full font-bold 
                                   bg-gradient-to-r from-purple-500 to-indigo-500 text-white 
                                   shadow-md animate-pulse">
                            ⭐ Plus Populaire
                        </span>
                    </div>
                    
                    <!-- Badge Classe -->
                    <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 
                              group-hover:text-indigo-700 transition-colors duration-300">
                        {{ plan.classe }}
                    </h3>
                </div>

                <!-- Section Prix améliorée -->
                <div class="flex flex-col items-center mb-6 pb-6 border-b-2 border-gray-200">
                    
                    <!-- Prix Initial Barré -->
                    <div class="flex items-baseline gap-1 mb-2 text-gray-400">
                        <span class="text-lg sm:text-xl font-semibold line-through">{{ plan.pi }}</span>
                        <span class="text-xs">FCFA</span>
                    </div>

                    <!-- Prix Final mis en évidence -->
                    <div class="flex items-baseline gap-1 mb-3">
                        <span class="text-4xl sm:text-5xl lg:text-6xl font-extrabold 
                                   bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent
                                   group-hover:from-purple-600 group-hover:to-indigo-600 transition-all">
                            {{ plan.pf }}
                        </span>
                        <div class="flex flex-col text-gray-600">
                            <span class="text-sm font-semibold">FCFA</span>
                            <span class="text-xs">/mois</span>
                        </div>
                    </div>

                    <!-- Message d'économie -->
                    <div class="text-center px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                        <p class="text-xs sm:text-sm text-green-700">
                            <span class="font-semibold">Économisez {{ plan.economie }} FCFA</span>
                            <span class="block text-xs">par rapport au prix annuel</span>
                        </p>
                    </div>
                </div>

                <!-- Liste des fonctionnalités sans scroll - hauteur auto -->
                <div class="mb-6 pr-2">
                    <ul class="flex flex-col gap-3">
                        <li v-for="(feature, idx) in plan.features" :key="idx"
                            class="flex items-start gap-3 text-xs sm:text-sm text-gray-700 
                                 group-hover:text-gray-900 transition-colors">

                            <!-- Icône de check améliorée -->
                            <div class="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 
                                      rounded-full flex items-center justify-center shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                     stroke-width="3" stroke="currentColor" class="w-3 h-3 text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>

                            <!-- Texte de la fonctionnalité -->
                            <span class="flex-1 leading-relaxed">{{ feature }}</span>

                            <!-- Badge Nouveau -->
                            <span v-if="plan.comingSoon && plan.comingSoon.includes(feature)"
                                class="flex-shrink-0 bg-gradient-to-r from-cyan-400 to-blue-500 
                                     text-white text-[10px] px-2 py-0.5 rounded-full font-semibold 
                                     shadow-sm whitespace-nowrap">
                                Nouveau
                            </span>
                        </li>
                    </ul>
                </div>

                <!-- Bouton CTA ultra-visible - Section bouton complète -->
                <div class="flex flex-col gap-3 pt-6 border-t-2 border-gray-200 mt-6">
                    <!-- Badge "14 jours gratuit" au-dessus du bouton -->
                    <div class="bg-gradient-to-r from-green-400 to-emerald-500 text-white 
                              text-center py-2 px-4 rounded-lg font-bold text-sm shadow-md">
                        🎁 14 jours d'essai GRATUIT
                    </div>
                    
                    <!-- Bouton principal TRÈS visible -->
                    <button @click="handleTrialClick" 
                            class="relative w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700
                                 text-white rounded-2xl py-5 px-6
                                 text-base sm:text-lg lg:text-xl font-black uppercase
                                 shadow-2xl
                                 hover:from-purple-600 hover:via-indigo-600 hover:to-purple-700
                                 hover:shadow-[0_10px_40px_rgba(99,102,241,0.6)]
                                 hover:scale-105 hover:-translate-y-1
                                 active:scale-95
                                 transition-all duration-300
                                 border-4 border-white
                                 overflow-hidden group">
                        
                        <!-- Effet de brillance animé -->
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                  -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        <!-- Contenu du bouton -->
                        <span class="relative z-10 flex items-center justify-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                 stroke-width="3" stroke="currentColor" class="w-6 h-6 animate-bounce">
                                <path stroke-linecap="round" stroke-linejoin="round" 
                                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                            <span>Commencer Maintenant</span>
                        </span>
                    </button>

                    <!-- Texte rassurant plus visible -->
                    <div class="text-center space-y-1">
                        <p class="text-xs sm:text-sm text-gray-600 font-semibold flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                 stroke-width="2" stroke="currentColor" class="w-4 h-4 text-green-600">
                                <path stroke-linecap="round" stroke-linejoin="round" 
                                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Aucune carte de crédit requise
                        </p>
                        <p class="text-xs text-gray-500">
                            Annulez à tout moment
                        </p>
                    </div>
                </div>

            </div>
        </main>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    plan: {
        type: Object,
        required: true
    }
})

const handleTrialClick = () => {
    const packData = {
        pack_id: props.plan.pack_id || 1,
        pack_name: props.plan.classe,
        plan_backend: props.plan.plan_backend,
        price: props.plan.price,
        renewal_price: props.plan.renewal_price,
        selected_at: new Date().toISOString()
    }
    
    localStorage.setItem('selected_pack', JSON.stringify(packData))
    router.push('/connexion')
}
</script>

<style scoped>
/* Scrollbar personnalisée pour la liste des fonctionnalités */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #a855f7, #6366f1);
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #9333ea, #4f46e5);
}

/* Animation pour le badge populaire */
@keyframes pulse-glow {
    0%, 100% {
        box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
    }
    50% {
        box-shadow: 0 0 20px rgba(168, 85, 247, 0.8);
    }
}

.animate-pulse {
    animation: pulse-glow 2s ease-in-out infinite;
}
</style>