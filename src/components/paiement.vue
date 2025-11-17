<template>

    <!-- Le wrapper avec le dégradé (agit comme bordure) -->
    <section class=" relative bg-gradient-to-r from-[#153ABF] via-[#153ABF] to-[#2B59FF] 
                rounded-[10px] p-[2px]  hover:-translate-y-4 transition-all duration-500">

        <!-- Le contenu principal (avec un petit espace pour voir le dégradé) -->
        <main class="group overflow-hidden flex flex-col gap-5 
               w-[265px] h-fit font-[Poppins] bg-white 
               rounded-[10px]  shadow-blue-200
               hover:bg-[#000B6B] hover:text-white hover:shadow-2xl 
               hover:-translate-y-4 transition-all duration-500">

            <!-- entete -->
            <div class="flex  flex-col h-full p-6">

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

                <div class=" flex flex-col items-center  mb-4">

                    <!-- message de bienvenue et  trait et prix  initial  -->
                    <div class="flex flex-col gap-5 ">
                        <!-- message de bienvenue et  trait  -->
                        <div class="flex flex-col  justify-center items-center gap-2 ">
                            <!-- message de bienvenue -->
                            <div class="flex text-[10px] items-center gap-1 w-[250px] h-5">

                                <h2 class="">Economisez jusqu'a </h2>
                                <h2 class="">{{ plan.economie }}</h2>
                                <span class="mt-[3px]">FCFA/mois</span>
                            </div>
                            <!-- trait horizontal -->
                            <hr class="w-[180px] text-gray-400 flex text-center">
                        </div>
                        <!-- prix initial -->
                        <div class="flex justify-center items-center mt-0 ">
                            <h2 class="text-[#362d2d8f] text-[20px] font-semibold ">{{ plan.pi }}</h2>
                            <span class=" text-[10px] text-[#8F8F8F]  font-semiblod  flex mt-4 justify-end">FCFA</span>
                            <hr class="w-[35px] text-gray-400 flex text-center left-7">

                        </div>
                    </div>

                    <!-- prix officiel  et limite-->

                    <div class="flex flex-col  ">

                        <!-- prix officiel -->
                        <div class="flex justify-start items-center font-semibold w-fit h-fit  font-sans  gap-1 ml-4 ">
                            <h2 class="text-black  text-[30px]  ">{{ plan.pf }}</h2>
                            <div class="flex justify-end items-end gap-0 font-semibold mt-1  ">
                                <span class=" text-[15px]">FCFA</span>
                                <div class="flex justify-end items-end  gap-0">
                                    <span class=" text-[20px] ">/</span>
                                    <span class=" text-[15px] mr-2">mois</span>

                                </div>
                            </div>

                        </div>
                        <!-- limite-- -->

                        <div class="flex flex-col gap-3  my-3">
                            <h2 class=" font-serif text-[10px]">Limité</h2>
                            <div class="flex w-[300px] mx-4">
                                <hr class="w-[200px] text-gray-400 flex justify-center text-center mr-4">

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <!-- corps  -->
            <main class=" flex flex-col justify-center items-center w-full text-[10px] gap-4 ">

                <ul class="flex flex-col gap-2  w-fit ">
                    <li v-for="(feature, idx) in plan.features" :key="idx" class="flex ">
                        <div class="flex   gap-3 ">
                            <button class="w-[18px] h-[18px] bg-black rounded-full hover:bg-white flex justify-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="size-4  text-white text-center font-bold hover:text-black">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>

                            </button>
                            {{ feature }}
                        </div>
                        <!-- Badge Coming Soon -->
                        <span v-if="plan.comingSoon && plan.comingSoon.includes(feature)"
                            class=" bg-[#C9FAD6] text-[#1AA703]text-[8px]  py-[2px]  px-[2px] w-fit h-fit  rounded flex-shrink-0 mx-0 right-4 ">
                            Coming Soon
                        </span>
                    </li>
                </ul>
                <!-- Bouton -->
                <div class="flex flex-col justify-center items-center gap-2">
                    <button class=" bg-[#F9D783] text-[#000B6B]  rounded-[2px] w-[200px] px-3 py-[3px]
                      font-semibold">
                        Essaie gratuit pendant 14jours
                    </button>

                    <p class="text-center text-xs opacity-70">Cartes de credit non requis</p>
                </div>




            </main>
        </main>

    </section>

</template>

<script setup>

import { ref } from 'vue'
defineProps({
    plan: Object
})
</script>