<template>
    <!-- Carte de tarification -->
    <main class="relative overflow-visible flex flex-col text-black
       w-[300px] sm:w-[290px] md:w-[320px] lg:w-[400px] h-auto
       font-[Poppins] bg-white rounded-[10px] border-[2px] shadow-lg border-r-[#153ABF] border-t-[#153ABF] border-b-[#153ABF] border-l-[#2B59FF]
       hover:bg-[#000B6B] hover:shadow-2xl hover:-translate-y-8
       transition-all duration-700 group">

        <!-- Contenu avec padding -->
        <div class="p-6 flex flex-col">

            <!-- Badges en haut -->
            <div class="flex flex-col gap-1 mb-3">
                <!-- Badge Populaire (conditionnel) -->
                <div v-show="plan.classe == 'Proffesionnel'" class="flex flex-col gap-[5px] top-4 mb-1">
                    <!-- Badge Classe -->
                </div>
                <button
                    class="text-[13px] w-fit px-3 py-1 rounded-[5px] font-bold bg-[#e6e6e6] text-[#000000d7] transition-colors duration-300 group-hover:bg-gray-200 group-hover:text-[#000B6B]">
                    {{ plan.classe }}
                </button>
            </div>

            <!-- Section Prix -->
            <div class="flex flex-col items-center mb-6">

                <!-- Message d'économie -->
                <div class="flex items-center gap-1.5 text-[13px] mb-4 
                           text-gray-600 group-hover:text-gray-200
                           transition-colors duration-300">
                    <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                    </svg>
                    <span class="font-medium ">Abonnement Annuel</span>
                    <span class="font-semibold">FCFA/an</span>
                </div>

                <!-- Ligne de séparation -->
                <hr class="w-full border-gray-300 transition-colors duration-300 group-hover:border-gray-500" />

                <!-- Prix Final -->
                <div class="flex items-center justify-center gap-1.5 w-full mb-1
                           transform group-hover:scale-105 transition-transform duration-300">
                    <h2 class="text-[25px] md:text-[32px] font-bold text-gray-600 
                              group-hover:text-white transition-colors duration-300
                              leading-none">
                        {{ plan.pf }}
                    </h2>
                    <div class="flex flex-col items-start justify-end mb-1">
                        <span class="text-[14px] font-semibold text-gray-700 
                                   group-hover:text-gray-200 transition-colors duration-300">
                            FCFA
                        </span>
                        <div class="flex items-center gap-0.5">
                            <span class="text-[16px] text-gray-600 
                                       group-hover:text-gray-300 transition-colors duration-300">
                                /
                            </span>
                            <span class="text-[13px] text-gray-600 
                                       group-hover:text-gray-300 transition-colors duration-300">
                                an
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Badge Limité -->
                <div class="mt-4 w-full">
                    <p class="text-[13px] text-gray-500 mb-2 transition-colors duration-300 
                        
                        group-hover:text-gray-300"> {{ plan.text1 }} </p>
                    <hr class="w-full border-gray-300 transition-colors duration-300 group-hover:border-gray-700" />
                </div>
            </div>

           <!-- Liste des fonctionnalités améliorée -->
            <ul class="flex flex-col gap-3 w-full max-w-xs mb-4">
                <li v-for="(feature, idx) in visibleFeatures" :key="idx"
                    class="flex items-start justify-between gap-2 
                           transform group-hover:translate-x-1 transition-all duration-300"
                    :style="{ transitionDelay: `${idx * 30}ms` }">
                    
                    <div class="flex gap-3 items-start flex-1">
                        <!-- Cercle avec coche animé -->
                        <div class="w-5 h-5 bg-gradient-to-br from-gray-800 to-gray-900
                                   group-hover:from-white group-hover:to-gray-100
                                   rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                                   shadow-sm group-hover:shadow-md
                                   transition-all duration-300
                                   group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                 stroke-width="3" stroke="currentColor" 
                                 class="w-3 h-3 text-white group-hover:text-[#153ABF] 
                                       transition-colors duration-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>

                        <!-- Texte de la feature -->
                        <span :class="feature.toLowerCase().includes('point de vente')
                            ? 'text-gray-900 font-bold text-[13px] md:text-[15px] leading-tight group-hover:text-white transition-colors duration-300'
                            : 'text-gray-700 text-[15px] leading-tight group-hover:text-gray-200 transition-colors duration-300'">
                            {{ feature }}
                        </span>
                    </div>

                    <!-- Badge "Nouveau" -->
                    <span v-if="plan.comingSoon && plan.comingSoon.includes(feature)"
                        class="bg-gradient-to-r from-[#C9FAD6] to-[#B5F5C8] 
                               text-[#1AA703] text-[12px] sm:text-[9px] 
                               py-1 px-3 rounded-full flex-shrink-0 font-semibold shadow-sm
                               group-hover:shadow-md group-hover:scale-105
                               transition-all duration-300">
                        ✨ Nouveau
                    </span>
                </li>
            </ul>
            <!-- 🔥 BOUTON VOIR PLUS - visible uniquement sur mobile -->
            <button v-if="plan.features.length > mobileFeatureLimit" @click="toggleShowMore"
                class="md:hidden text-[#153ABF] group-hover:text-white font-semibold text-xs flex items-center gap-1 hover:gap-2 transition-all mt-2 group-hover:text-">
                {{ showMore ? 'Voir moins' : `Voir plus (${plan.features.length - mobileFeatureLimit}+)` }}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="w-3 h-3 transition-transform" :class="{ 'rotate-180': showMore }">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            <!-- Bouton amélioré -->
            <div class="flex flex-col items-center gap-3 mt-6">
                <button @click="handleTrialClick" class="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-xl py-4 px-6
                             text-sm sm:text-base font-bold shadow-lg
                             hover:from-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:scale-105
                             transition-all duration-300">
                    ✨ Essai gratuit pendant 14 jours
                </button>
                <p class="text-center text-[11px] text-gray-500 transition-colors duration-300 group-hover:text-gray-300">
                    Carte de crédit requise
                </p>
            </div>

        </div>
    </main>

</template>
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()


import connexion from './../view/ConnexionCompte.vue'
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

const showMore = ref(false)
const mobileFeatureLimit = 4
const windowWidth = ref(0)

const updateWidth = () => {
    if (typeof window !== 'undefined') {
        windowWidth.value = window.innerWidth
    }
}

const toggleShowMore = () => {
    showMore.value = !showMore.value
}

const isMobile = computed(() => windowWidth.value < 768)

// 🔥 LOGIQUE PRINCIPALE: Limite à 4 features sur mobile
const visibleFeatures = computed(() => {
    if (isMobile.value && !showMore.value) {
        return props.plan.features.slice(0, mobileFeatureLimit)
    }
    return props.plan.features
})

onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
})

onBeforeUnmount(() => {
    if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateWidth)
    }
})
</script>

<style scoped>
ul li {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.group:hover button:not(.bg-\[#F9D783\]) {
    transform: scale(1.05);
    transition: transform 0.2s ease;
}
</style>