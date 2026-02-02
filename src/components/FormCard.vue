<template>
  <div class="group relative bg-white/60 hover:bg-white/80 backdrop-blur-xl border border-white/40 hover:border-white/60 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl hover:shadow-2xl active:shadow-xl transition-all duration-400 overflow-hidden max-w-md mx-auto w-full h-full">
    
    <!-- Déco subtile glassmorphism -->
    <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 -skew-x-12 -translate-x-1/4 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
    <div class="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-400/10 to-rose-400/10 rounded-2xl blur-xl -rotate-12 opacity-30"></div>

    <!-- Contenu principal -->
    <div class="relative z-10">
      <!-- Titre professionnel -->
      <h2 class="text-xl sm:text-2xl md:text-2.5xl lg:text-3xl font-black bg-gradient-to-r from-gray-900 via-purple-900 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight drop-shadow-lg">
        {{ title }}
      </h2>
      
      <!-- Description conviviale -->
      <p v-if="description" class="text-gray-600 sm:text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-none font-medium opacity-90">
        {{ description }}
      </p>

      <!-- SLOT responsive -->
      <div class="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
        <slot></slot>
      </div>

      <!-- Bouton PRO ultra-convivial -->
      <button 
        @click="handleContinue"
        class="group/btn w-full relative bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:from-purple-700 hover:via-pink-600 hover:to-rose-600 active:scale-[0.98] text-white font-bold py-4 sm:py-4.5 px-6 sm:px-8 rounded-2xl shadow-2xl hover:shadow-3xl hover:shadow-pink-500/40 transition-all duration-400 overflow-hidden transform hover:-translate-y-0.5 text-sm sm:text-base lg:text-lg font-semibold border-0 focus:outline-none focus:ring-4 focus:ring-purple-500/30"
      >
        <!-- Effet shimmer magique -->
        <div class="absolute inset-0 bg-gradient-to-r from-white/30 via-white/50 to-transparent skew-x-12 -translate-x-[200%] group-hover/btn:translate-x-[400%] transition-transform duration-1000 h-full"></div>
        
        <span class="relative flex items-center justify-center gap-2.5 sm:gap-3">
          <svg class="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
          {{ buttonText }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const emit = defineEmits(['submit'])

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: 'Continuer'
  },
  route: {
    type: String,
    required: false,
    default: null
  }
})

const handleContinue = () => {
  // Émet l'événement submit pour permettre la validation parent
  emit('submit')
  
  // Navigation automatique seulement si route est définie ET qu'aucun listener @submit n'est présent
  // Si un listener @submit existe, c'est à lui de gérer la navigation après validation
  if (props.route && !emit.submit) {
    router.push(props.route)
  }
}
</script>

<style scoped>
/* Animations fluides pro */
@keyframes shimmer {
  0% { transform: translateX(-200%) skew-x-12; }
  100% { transform: translateX(400%) skew-x-12; }
}

/* Focus visible accessibilité */
button:focus-visible {
  outline: 3px solid #a78bfa;
  outline-offset: 2px;
}

/* Support backdrop-filter */
@supports not (backdrop-filter: blur(20px)) {
  .backdrop-blur-xl {
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}

/* Scrollbar subtile pour champs */
.overflow-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-auto::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.overflow-auto::-webkit-scrollbar-thumb {
  background: rgba(147, 51, 234, 0.3);
  border-radius: 10px;
}

.overflow-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(147, 51, 234, 0.5);
}
</style>
