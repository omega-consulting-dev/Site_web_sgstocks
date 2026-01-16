<template>
    <!-- Le wrapper avec le dégradé (agit comme bordure) -->


    <main class="relative overflow-hidden flex flex-col text-black
       w-[270px] sm:w-[280px] md:w-[300px] lg:w-[320px] min-h-full md:h-[640px]
       font-[Poppins] bg-white rounded-[10px] border-[2px] shadow-lg border-r-[#153ABF] border-t-[#153ABF] border-b-[#153ABF] border-l-[#2B59FF]
       hover:bg-[#000B6B] hover:shadow-2xl hover:-translate-y-8
       transition-all duration-700 group  ">
        <!-- Dégradé en bas, visible uniquement au hover -->


        <!-- Contenu avec padding -->
        <div class="p-6 flex flex-col h-full  ">

            <!-- Badges en haut -->
            <div class="flex flex-col gap-1 mb-3">
                <!-- Badge Populaire (conditionnel) -->
                <div v-show="plan.classe == 'Proffesionnel'" class="flex flex-col gap-[5px] top-4 mb-1">
                    <button
                        class="text-[13px] px-3 py-1 rounded-[5px] font-bold bg-[#A9B2FF] text-[#000B6B] w-fit group-hover:text-white">
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
                <div class="flex items-center gap-1 text-[11px] mb-3 transition-colors duration-300 
                        
                        
                        group-hover:text-white">
                    <span>Economisez jusqu'à</span>
                    <span class="font-semibold">{{ plan.economie }}</span>
                    <span>FCFA/mois</span>
                </div>

                <!-- Ligne de séparation -->
                    <hr class="w-full border-gray-300 transition-colors duration-300 group-hover:border-gray-500" />

                <!-- Prix Initial Barré -->
                <div class="flex items-baseline gap-1 mb-2">
                    <span class="text-[22px] font-semibold text-gray-400 line-through group-hover:text-white">{{ plan.pi
                        }}</span>
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
                    <hr class="w-full border-gray-300 transition-colors duration-300 group-hover:border-gray-700" />
                </div>
            </div>

            <!-- 🔥 IMPORTANT: Cette liste affiche seulement 4 items sur mobile -->
            <ul class="flex flex-col gap-2 w-full max-w-xs">
                <li v-for="(feature, idx) in visibleFeatures" :key="idx"
                    class="flex items-start justify-between gap-2 text-[10px] text-gray-700 group-hover:text-gray-300">
                    <div class="flex gap-2 md:gap-3 items-start flex-1">
                        <button
                            class="w-4 h-4 md:w-[18px] md:h-[18px] bg-black rounded-full group:hover:bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-3 h-3 md:w-4 md:h-4 text-white ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </button>
                        <span class="leading-tight">{{ feature }}</span>
                    </div>

                    <span v-if="plan.comingSoon && plan.comingSoon.includes(feature)"
                        class="bg-[#C9FAD6] text-[#1AA703] text-[7px] sm:text-[8px] py-[2px] px-1.5 rounded flex-shrink-0">
                        Coming Soon
                    </span>
                </li>
            </ul>

            <!-- 🔥 BOUTON VOIR PLUS - visible uniquement sur mobile -->
            <button v-if="plan.features.length > mobileFeatureLimit" @click="toggleShowMore"
                class="md:hidden text-[#153ABF] group-hover:text-white font-semibold text-xs flex items-center gap-1 hover:gap-2 transition-all mt-2">
                {{ showMore ? 'Voir moins' : `Voir plus (${plan.features.length - mobileFeatureLimit}+)` }}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="w-3 h-3 transition-transform" :class="{ 'rotate-180': showMore }">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            <!-- Bouton et footer -->
            <div class="flex flex-col items-center gap-2  mt-2">
                <button @click="handleTrialClick" class="w-full bg-[#F9D783] text-[#000B6B] rounded-md py-[5px] md:py-[6px] px-4
                       text-[12px] md:text-[14px] font-semibold group-hover:bg-[#f5d06c] transition-colors mt-6">
                    Essai gratuit pendant 14 jours
                </button>

                <p
                    class="text-center text-[11px] text-gray-500 transition-colors duration-300 group-hover:text-gray-300">
                    Carte de crédit non requise
                </p>
            </div>

        </div>
    </main>

</template>
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    plan: {
        type: Object,
        required: true
    }
})

const handleTrialClick = () => {
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