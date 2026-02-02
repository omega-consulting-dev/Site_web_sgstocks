<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex flex-col font-poppins relative overflow-hidden">
    <!-- Déco subtile responsive -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -left-16 top-16 w-48 h-48 md:-left-32 md:w-64 md:h-64 bg-gradient-to-br from-rose-400/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute -right-20 bottom-16 w-52 h-52 md:-right-40 md:w-72 md:h-72 bg-gradient-to-bl from-purple-400/10 to-indigo-500/10 rounded-full blur-3xl animate-float-medium" style="animation-delay: 1.5s;"></div>
      <div class="absolute top-1/3 right-4 w-24 h-24 md:right-10 md:w-32 md:h-32 bg-white/5 rounded-2xl blur-xl animate-pulse-slow"></div>
    </div>

    <!-- Header compact FULLY RESPONSIVE -->
    <header class="relative z-20 px-4 sm:px-6 md:px-10 py-4 sm:py-5 flex items-center justify-between border-b border-white/10 bg-white/3 backdrop-blur-md">
      
      <!-- Bouton Précédent MOBILE-FIRST -->
      <button 
        @click="precedent"
        class="group p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 active:scale-95 transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-white font-medium text-xs sm:text-sm shadow-xl hover:shadow-2xl shadow-purple-500/25"
        :class="{ 'opacity-50 cursor-not-allowed': !props.route }"
      >
        <svg class="w-4 h-4 sm:w-4.5 sm:h-4.5 rotate-180 transition-transform group-hover:-translate-x-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span class="hidden xs:inline sm:inline whitespace-nowrap">Précédent</span>
      </button>

      <!-- Logo responsive -->
      <div class="flex items-center flex-shrink-0">
        <div class="relative p-2.5 sm:p-3 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm shadow-xl shadow-purple-500/25">
          <img src="./../assets/image/OBJECTS.png" alt="SG-Stock" class="w-auto h-8 sm:h-10 md:h-12 drop-shadow-2xl mx-auto block">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-2xl blur-sm opacity-0 hover:opacity-100 transition-opacity"></div>
        </div>
      </div>

      <!-- Espace symétrie responsive -->
      <div class="w-8 sm:w-10 md:w-16 hidden sm:block"></div>
    </header>

    <!-- Séparateur responsive -->
    <div class="relative z-10 mx-4 sm:mx-6 md:mx-10 h-px bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 shadow-sm"></div>

    <!-- Contenu principal MOBILE-FIRST -->
    <main class="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 relative z-10">
      
      <div class="w-full max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        
        <!-- Titre responsive -->
        <div class="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-20 max-w-2xl sm:max-w-4xl mx-auto">
          <h1 class="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent leading-tight mb-6 sm:mb-8 drop-shadow-2xl px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 rounded-2xl inline-block backdrop-blur-sm border border-white/10 shadow-purple-500/20">
            3 étapes simples pour<br class="hidden sm:block md:hidden lg:block"><span class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-black drop-shadow-2xl">Obtenir votre Application</span>
          </h1>
          
          <!-- Progression MOBILE-OPTIMIZED -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3 md:gap-5 lg:gap-6 max-w-4xl mx-auto px-2 sm:px-4">
            <div v-for="(step, index) in steps" :key="index" class="flex items-center gap-3 sm:gap-4 w-full sm:w-auto sm:flex-1 min-w-0 group">
              
              <div class="relative flex-shrink-0">
                <div :class="[
                  'w-12 h-12 sm:w-14 md:w-14 lg:w-16 rounded-2xl flex items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg font-bold shadow-2xl transition-all duration-400 flex-shrink-0',
                  step.active 
                    ? 'bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 text-white shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105' 
                    : 'bg-white/20 border-2 border-white/30 text-white/80 hover:bg-white/30 hover:border-white/50 hover:scale-105'
                ]">
                  {{ step.number }}
                </div>
                <div v-if="step.active" class="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-xl -z-10 animate-ping opacity-60"></div>
              </div>
              
              <span :class="[
                'font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-center flex-1 transition-all sm:whitespace-nowrap group-hover:translate-x-1',
                step.active 
                  ? 'text-white drop-shadow-lg bg-gradient-to-r from-purple-100 via-white to-pink-100 bg-clip-text text-transparent' 
                  : 'text-white/80 hover:text-white/95'
              ]">
                {{ step.label }}
              </span>
              
              <!-- Flèche responsive -->
              <svg v-if="index < steps.length - 1" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/50 group-hover:text-white/70 flex-shrink-0 transition-all ml-auto hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <!-- Sections principales RESPONSIVE -->
        <div class="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 xl:gap-20 items-stretch w-full">
          
          <!-- Section promesse MOBILE -->
          <section class="lg:w-80 xl:w-96 order-2 lg:order-1 flex-shrink-0 w-full lg:w-auto">
            <div class="group relative bg-white/5 hover:bg-white/8 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl hover:shadow-3xl active:shadow-2xl transition-all duration-500 hover:-translate-y-2 max-h-[450px] sm:max-h-[500px] overflow-hidden shadow-purple-500/20">
              
              <div class="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-rose-400/20 to-pink-500/20 rounded-2xl blur-xl -rotate-12 opacity-60 group-hover:opacity-80 transition-all"></div>
              
              <h3 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent mb-6 sm:mb-8 drop-shadow-2xl leading-tight z-10 relative">
                {{ rightSectionTitle }}
              </h3>
              
              <div class="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90 font-medium relative z-10">
                <p v-for="(text, index) in rightSectionTexts" :key="index" class="group-hover:scale-[1.02] hover:scale-[1.02] transition-all duration-300 py-1 px-2 rounded-lg sm:rounded-xl hover:bg-white/5" v-html="text"></p>
              </div>
              
              <!-- CTA responsive -->
              <div class="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 relative z-10">
                <button class="w-full group/btn relative bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:from-purple-700 hover:via-pink-600 hover:to-rose-600 text-white font-bold py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl hover:shadow-pink-500/50 active:scale-[0.97] active:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-0.5 text-sm sm:text-lg font-semibold shadow-purple-500/30">
                  <div class="absolute inset-0 bg-white/20 skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  <span class="relative flex items-center justify-center gap-2">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                    Commencer maintenant
                  </span>
                </button>
              </div>
            </div>
          </section>

          <!-- Zone formulaire RESPONSIVE -->
          <section class="flex-1 order-1 lg:order-2 min-h-[350px] sm:min-h-[400px]">
            <div class="bg-white/5 hover:bg-white/8 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full shadow-purple-500/20">
              <slot></slot>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  steps: {
    type: Array,
    required: true,
    default: () => [
      { number: 1, label: 'Compte', active: true },
      { number: 2, label: 'Entreprise', active: false },
      { number: 3, label: 'Paiement', active: false }
    ]
  },
  rightSectionTitle: {
    type: String,
    default: 'Faites vos premiers\npas avec SG-Stock'
  },
  rightSectionTexts: {
    type: Array,
    default: () => [
      '<span class="font-bold text-purple-200 drop-shadow-md">Accès complet immédiat</span> à votre solution.',
      'Ajoutez des utilisateurs ou annulez quand vous voulez.',
      '<span class="font-bold text-purple-200 drop-shadow-md">Sans engagement</span>, sans frais cachés.'
    ]
  },
  route: {
    type: String,
    required: false,
    default: null
  }
})

const precedent = () => {
  if (props.route) {
    router.push(props.route)
  }
}
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(1deg); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-1deg); }
}

@keyframes ping {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 0.3; }
}

.animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
.animate-float-medium { animation: float-medium 8s ease-in-out infinite; }
.animate-ping { animation: ping 3s ease-in-out infinite; }

.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.3);
}

@supports not (backdrop-filter: blur(20px)) {
  [class*="backdrop-blur"] {
    background: rgba(255, 255, 255, 0.06);
  }
}

*:focus-visible {
  outline: 2px solid #a78bfa;
  outline-offset: 2px;
}

/* Breakpoints personnalisés */
@media (min-width: 475px) { .xs\:inline { display: inline !important; } }
</style>
