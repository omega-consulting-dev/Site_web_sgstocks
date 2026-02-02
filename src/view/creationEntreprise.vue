<!-- ========================================
     EXEMPLE D'UTILISATION: creationEntreprise.vue
     Page de création de compte utilisant les composants
     ======================================== -->

<template>
  <BaseFormLayout :steps="stepsConfig" route="/connexion"
    @submit="precedentEntreprise" >
  
    <!-- Contenu du formulaire avec design PREMIUM -->
    <div class="group relative bg-white/60 hover:bg-white/80 backdrop-blur-xl border border-white/40 hover:border-white/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 overflow-hidden max-w-lg w-full mx-auto">
      
      <!-- Déco subtile -->
      <div class="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl blur-xl -rotate-12 opacity-40 group-hover:opacity-60 transition-all"></div>

      <!-- Header utilisateur PRO -->
      <div class="text-center mb-6 sm:mb-8 pb-6 border-b border-white/20">
        <div class="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-2xl border border-blue-200/50 backdrop-blur-sm mb-3 mx-auto max-w-sm">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6.47 4.72a6 6 0 001.18-.38l1.66 1.66a1 1 0 001.41 0l1.41-1.41a1 1 0 000-1.41l-1.66-1.66a6 6 0 00-.38-1.18A5.92 5.92 0 0020 10a6 6 0 00-12 0 5.92 5.92 0 00.38 1.18zM10 11a3 3 0 100-6 3 3 0 000 6z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-lg sm:text-xl font-black text-gray-900 leading-tight">
              Compte <span class="text-blue-600 font-normal">Connecté</span>
            </h1>
            <p class="text-sm sm:text-base text-gray-700 font-medium">{{ userDisplay.name }}</p>
            <p class="text-xs text-gray-500 font-mono tracking-wider">{{ userDisplay.email }}</p>
          </div>
        </div>
      </div>

      <!-- Titre principal -->
      <h2 class="text-2xl sm:text-2.5xl lg:text-3xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-1 sm:mb-2 text-center leading-tight">
        Informations entreprise
      </h2>
      
      <!-- AFFICHAGE DU PACK SÉLECTIONNÉ -->
      <div v-if="selectedPackInfo" class="mb-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl">
        <p class="text-sm font-bold text-green-700 text-center">
          ✅ Pack sélectionné : {{ selectedPackInfo.pack_name }} ({{ selectedPackInfo.plan_backend }}) - {{ selectedPackInfo.price.toLocaleString() }} FCFA
        </p>
      </div>
      <div v-else class="mb-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl">
        <p class="text-sm font-bold text-red-700 text-center">
          ⚠️ AUCUN PACK SÉLECTIONNÉ - Vous serez redirigé vers l'accueil
        </p>
      </div>
      
      <p class="text-gray-600 text-sm sm:text-base text-center mb-8 lg:mb-10 font-medium opacity-90 leading-relaxed max-w-md mx-auto">
        Complétez les informations de votre entreprise pour finaliser votre inscription
      </p>

      <!-- Formulaire optimisé -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        
        <!-- Nom Entreprise -->
        <div class="relative">
          <label class="block text-sm font-bold text-gray-900 mb-2.5 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text">
            Nom de l'entreprise <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="form.nomEntreprise" 
            type="text" 
            placeholder="SG-Stock Cameroun SARL"
            required
            @input="generateSubdomain"
            class="w-full px-5 py-4 text-sm lg:text-base border-2 border-gray-200/60 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md focus:shadow-xl transition-all duration-300 font-medium peer"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl pointer-events-none opacity-0 peer-focus:opacity-100 blur-xl transition-all -inset-1"></div>
        </div>

        <!-- Sous-domaine -->
        <div class="relative">
          <label class="block text-sm font-bold text-gray-900 mb-2.5 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text">
            Sous-domaine de connexion <span class="text-red-500">*</span>
          </label>
          <div class="text-xs text-gray-500 mb-3 leading-relaxed bg-blue-50/50 p-3 rounded-xl backdrop-blur-sm border border-blue-100">
            ⚠️ <strong>Important :</strong> Ce sous-domaine sera utilisé pour accéder à votre espace SG-Stock.
            <br>Exemple : <strong class="text-blue-600">{{ form.subdomain || 'votre-entreprise' }}.sgstocks.com</strong>
          </div>
          <div class="flex items-center gap-2 bg-gray-50/50 border-2 border-gray-200/50 rounded-2xl p-1 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100/30 transition-all backdrop-blur-sm hover:shadow-md">
            <input 
              v-model="form.subdomain" 
              type="text" 
              placeholder="mon-entreprise"
              required
              pattern="[a-z0-9_\-]+"
              minlength="3"
              maxlength="20"
              @input="validateSubdomain"
              @keypress="preventInvalidChars"
              class="flex-1 px-5 py-4 text-sm lg:text-base border-0 rounded-l-2xl focus:outline-none bg-white/80 backdrop-blur-sm font-medium lowercase"
            />
            <span class="px-4 text-sm font-semibold text-gray-500">.sgstocks.com</span>
          </div>
          <p v-if="subdomainError" class="text-xs text-red-500 mt-2 font-medium">{{ subdomainError }}</p>
          <p v-else-if="form.subdomain" class="text-xs text-green-600 mt-2 font-medium">✓ Sous-domaine disponible</p>
        </div>

        <!-- Adresse professionnelle -->
        <div>
          <label class="block text-sm font-bold text-gray-900 mb-2.5 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text">
            Adresse professionnelle <span class="text-red-500">*</span>
          </label>
          <div class="text-xs text-gray-500 mb-3 leading-relaxed bg-gray-50/50 p-3 rounded-xl backdrop-blur-sm border border-gray-100">
            Utilisez votre adresse Google Maps ou code postal pour plus de précision
          </div>
          <input 
            v-model="form.adresseProfessionnelle" 
            type="text" 
            placeholder="Douala, Bonapriso, Rue 1505"
            required
            class="w-full px-5 py-4 text-sm lg:text-base border-2 border-gray-200/60 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md focus:shadow-xl transition-all duration-300 font-medium peer"
          />
        </div>

        <!-- Téléphone Cameroon -->
        <div>
          <label class="block text-sm font-bold text-gray-900 mb-2.5 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text">
            Numéro mobile <span class="text-red-500">*</span>
          </label>
          <p class="text-xs text-gray-500 mb-4 leading-relaxed max-w-none">
            En indiquant votre numéro, recevez des conseils gratuits SG-Stock et informations importantes
          </p>
          <div class="bg-gray-50/50 border-2 border-gray-200/50 rounded-2xl p-1 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100/30 transition-all backdrop-blur-sm hover:shadow-md">
            <div class="flex">
              <div class="flex items-center bg-white/60 border-r border-gray-200 px-4 py-4 rounded-l-2xl min-w-[80px]">
                <svg class="w-4 h-4 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-sm font-semibold text-gray-700">+237</span>
              </div>
              <input 
                v-model="form.numeroMobile" 
                type="tel" 
                placeholder="688 08 08 76"
                required
                pattern="[0-9]{8,}"
                class="flex-1 px-5 py-4 text-sm lg:text-base border-0 rounded-r-2xl focus:outline-none bg-white/80 backdrop-blur-sm font-medium"
              />
            </div>
          </div>
        </div>

        <!-- Bouton ULTRA-PREMIUM -->
        <button
          @click="handleSubmit"
          type="button"
          class="group/btn w-full relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 text-white font-bold py-4.5 px-8 rounded-2xl shadow-2xl hover:shadow-3xl active:scale-[0.98] transition-all duration-400 overflow-hidden transform hover:-translate-y-0.5 text-lg lg:text-xl font-black border-0 focus:outline-none focus:ring-4 focus:ring-blue-500/30 text-center leading-none"
        >
          <!-- Shimmer magique -->
          <div class="absolute inset-0 bg-gradient-to-r from-white/30 via-white/50 to-transparent skew-x-12 -translate-x-[150%] group-hover/btn:translate-x-[500%] transition-transform duration-1000 h-full"></div>
          <span class="relative flex items-center justify-center gap-3">
            <svg class="w-5 h-5 shrink-0 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12"></path>
            </svg>
            Passez à la facturation
          </span>
        </button>
        
        <div v-if="errorMessage" class="text-red-600 text-sm text-center mt-2">
          {{ errorMessage }}
        </div>
      </form>
    </div>


    
  </BaseFormLayout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import BaseFormLayout from './../components/BaseFromLayout.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const stepsConfig = ref([
  { number: 1, label: 'Compte', active: false },
  { number: 2, label: 'Entreprise', active: true },
  { number: 3, label: 'Paiement', active: false }
])

const form = ref({
  nomEntreprise: '',
  subdomain: '',
  adresseProfessionnelle: '',
  numeroMobile: ''
})

const userData = ref(null)
const errorMessage = ref('')
const subdomainError = ref('')

// Générer automatiquement le sous-domaine à partir du nom d'entreprise
const generateSubdomain = () => {
  if (!form.value.subdomain || form.value.subdomain === '') {
    const subdomain = form.value.nomEntreprise
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Enlever les accents
      .replace(/[^a-z0-9\s_-]/g, '') // Garder uniquement lettres, chiffres, espaces, underscore et tirets
      .replace(/\s+/g, '-') // Remplacer espaces par tirets
      .replace(/[-_]+/g, '-') // Remplacer tirets/underscores multiples par un seul tiret
      .replace(/^[-_]|[-_]$/g, '') // Enlever tirets/underscores au début/fin
      .substring(0, 20)
    
    form.value.subdomain = subdomain
  }
}

// Bloquer la saisie de caractères invalides
const preventInvalidChars = (event) => {
  const char = event.key
  const currentValue = form.value.subdomain || ''
  
  // Bloquer les espaces
  if (char === ' ') {
    event.preventDefault()
    subdomainError.value = 'Les espaces ne sont pas autorisés'
    setTimeout(() => {
      if (subdomainError.value === 'Les espaces ne sont pas autorisés') {
        subdomainError.value = ''
      }
    }, 2000)
    return
  }
  
  // Bloquer les caractères spéciaux sauf underscore et tiret
  const validChars = /^[a-z0-9_-]$/i
  if (!validChars.test(char) && char !== 'Backspace' && char !== 'Delete' && char !== 'ArrowLeft' && char !== 'ArrowRight') {
    event.preventDefault()
    subdomainError.value = 'Caractères autorisés : lettres, chiffres, _ et -'
    setTimeout(() => {
      if (subdomainError.value === 'Caractères autorisés : lettres, chiffres, _ et -') {
        subdomainError.value = ''
      }
    }, 2000)
  }
}

// Valider le sous-domaine en temps réel
const validateSubdomain = () => {
  let subdomain = form.value.subdomain.toLowerCase()
  
  // Enlever tous les espaces
  subdomain = subdomain.replace(/\s+/g, '')
  form.value.subdomain = subdomain
  
  subdomainError.value = ''
  
  if (subdomain.length < 3) {
    subdomainError.value = 'Le sous-domaine doit contenir au moins 3 caractères'
  } else if (!/^[a-z0-9_-]+$/.test(subdomain)) {
    subdomainError.value = 'Uniquement lettres minuscules, chiffres, tiret (-) et underscore (_)'
  } else if (subdomain.startsWith('-') || subdomain.endsWith('-') || subdomain.startsWith('_') || subdomain.endsWith('_')) {
    subdomainError.value = 'Le sous-domaine ne peut pas commencer ou finir par - ou _'
  } else if (/\s/.test(subdomain)) {
    subdomainError.value = 'Les espaces ne sont pas autorisés'
  }
}

// Charger les données utilisateur
const selectedPackInfo = ref(null)

onMounted(() => {
  const pack = localStorage.getItem('selected_pack')
  
  if (pack) {
    selectedPackInfo.value = JSON.parse(pack)
  }
  
  const storedUser = localStorage.getItem('registration_user')
  if (!storedUser) {
    router.push('/connexion')
    return
  }
  userData.value = JSON.parse(storedUser)
})

const userDisplay = computed(() => {
  if (!userData.value) return { name: '', email: '' }
  return {
    name: `${userData.value.first_name} ${userData.value.last_name}`,
    email: userData.value.email
  }
})

const handleSubmit = () => {
  // Réinitialiser le message d'erreur
  errorMessage.value = ''
  
  // Valider le sous-domaine
  validateSubdomain()
  if (subdomainError.value) {
    errorMessage.value = subdomainError.value
    return
  }
  
  // Validation du nom de l'entreprise
  if (!form.value.nomEntreprise || form.value.nomEntreprise.trim().length < 2) {
    errorMessage.value = 'Le nom de l\'entreprise est requis (minimum 2 caractères)'
    return
  }
  
  // Validation du sous-domaine
  if (!form.value.subdomain || form.value.subdomain.trim().length < 3) {
    errorMessage.value = 'Le sous-domaine est requis (minimum 3 caractères)'
    return
  }
  
  // Validation de l'adresse professionnelle (requise)
  if (!form.value.adresseProfessionnelle || form.value.adresseProfessionnelle.trim().length < 5) {
    errorMessage.value = 'L\'adresse professionnelle est requise (minimum 5 caractères)'
    return
  }
  
  // Validation du numéro de téléphone (requis)
  if (!form.value.numeroMobile) {
    errorMessage.value = 'Le numéro de téléphone est requis'
    return
  }
  
  if (form.value.numeroMobile.length < 8) {
    errorMessage.value = 'Le numéro de téléphone doit contenir au moins 8 chiffres'
    return
  }
  
  // Validation que le numéro contient seulement des chiffres
  if (!/^\d+$/.test(form.value.numeroMobile)) {
    errorMessage.value = 'Le numéro de téléphone doit contenir uniquement des chiffres'
    return
  }
  
  // Stocker les données de l'entreprise
  localStorage.setItem('registration_company', JSON.stringify({
    name: form.value.nomEntreprise.trim(),
    subdomain: form.value.subdomain.trim(),
    address: form.value.adresseProfessionnelle.trim(),
    phone: `+237${form.value.numeroMobile}`
  }))
  
  router.push('/paiement')
}

const precedentEntreprise = () => {
  router.push('/CreationCompte')
}
</script>

