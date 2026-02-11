<template>
  <BaseFormLayout :steps="stepsConfig" route="/entreprise">
    <!-- Container principal avec meilleure largeur responsive -->
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Main Container -->
      <div class="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Information de facturation
          </h1>
          
          <!-- Affichage du pack sélectionné et prix -->
          <div v-if="selectedPack" class="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-4 max-w-md mx-auto">
            <p class="text-lg font-bold text-blue-900 mb-1">
              {{ selectedPack.pack_name }}
            </p>
            <p class="text-3xl font-extrabold text-blue-600">
              {{ selectedPack.price.toLocaleString('fr-FR') }} FCFA
            </p>
            <p class="text-sm text-gray-600 mt-2">
              14 jours gratuit + 1 an d'accès complet
            </p>
            <p class="text-xs text-gray-500 mt-1">
              Renouvellement : {{ selectedPack.renewal_price.toLocaleString('fr-FR') }} FCFA/an
            </p>
          </div>
          
          <p class="text-base sm:text-lg font-semibold text-gray-700 mb-1">
            Chaque transaction est sécurisée
          </p>
          <p class="text-sm text-gray-600">
            SG-STOCK dispose du certificat de sécurité SSL le plus élevé
          </p>
        </div>

        <hr class="my-6" />

        <!-- Payment Methods -->
        <div class="space-y-4 mb-8 max-w-2xl mx-auto">
          <!-- Carte de crédit -->
          <label
            class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition"
            :class="{ 'border-blue-600 bg-blue-50': selectedMethod === 'card' }">
            <input type="radio" v-model="selectedMethod" value="card" class="w-5 h-5 text-blue-600" />
            <span class="ml-4 font-semibold text-gray-900">Carte de crédit</span>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect width='40' height='25' rx='3' fill='%231434CB'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='10' font-weight='bold'%3E4532%3C/text%3E%3C/svg%3E"
              alt="Card" class="ml-auto w-12" />
          </label>

          <!-- Orange Money -->
          <label
            class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition"
            :class="{ 'border-blue-600 bg-blue-50': selectedMethod === 'orange' }">
            <input type="radio" v-model="selectedMethod" value="orange" class="w-5 h-5 text-blue-600" />
            <div class="ml-4 flex-1">
              <span class="font-semibold text-gray-900">Orange Money</span>
            </div>
            <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-xs">OM</span>
            </div>
          </label>

          <!-- Mobile Money -->
          <label
            class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition"
            :class="{ 'border-blue-600 bg-blue-50': selectedMethod === 'mobile' }">
            <input type="radio" v-model="selectedMethod" value="mobile" class="w-5 h-5 text-blue-600" />
            <div class="ml-4 flex-1">
              <span class="font-semibold text-gray-900">Mobile Money</span>
              <p class="text-sm text-blue-600 mt-1">Information de paiement</p>
            </div>
            <div class="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <span class="text-yellow-900 font-bold text-xs">MTN</span>
            </div>
          </label>
        </div>

        <!-- Form Fields -->
        <form @submit.prevent="handleSubmit" class="space-y-6 max-w-2xl mx-auto">
          <!-- Champs supplémentaires pour Orange et Mobile -->
          <div v-if="showInputs" class="space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Nom complet</label>
              <input 
                v-model="form.name" 
                type="text" 
                placeholder="Entrez votre nom complet"
                required
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
            </div>
            <div v-if="selectedMethod === 'orange'">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Numéro Orange Money</label>
              <input 
                v-model="form.orangeNumber" 
                type="tel" 
                placeholder="6XX XX XX XX"
                required
                pattern="[0-9]{9}"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
            </div>
            <div v-if="selectedMethod === 'mobile'">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Numéro Mobile Money</label>
              <input 
                v-model="form.mobileNumber" 
                type="tel" 
                placeholder="6XX XX XX XX"
                required
                pattern="[0-9]{9}"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
            </div>
          </div>

          <!-- Submit Button -->
          <button type="submit"
            :disabled="isSubmitting"
            class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-full transition duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-base sm:text-lg">
            {{ isSubmitting ? 'Inscription en cours...' : 'Finaliser l\'inscription' }}
          </button>
          
          <div v-if="errorMessage && !showErrorModal" class="bg-red-50 border-2 border-red-200 text-red-600 text-sm text-center p-4 rounded-lg mt-4">
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  </BaseFormLayout>
  
  <!-- Modal de chargement (Souscription en cours) -->
  <Transition name="modal">
    <div v-if="isSubmitting" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full transform transition-all">
        <!-- Animation de chargement -->
        <div class="flex justify-center mb-6">
          <div class="relative w-24 h-24">
            <!-- Cercle tournant -->
            <div class="absolute inset-0 border-8 border-blue-200 rounded-full"></div>
            <div class="absolute inset-0 border-8 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
            <!-- Icône au centre -->
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Message principal -->
        <h2 class="text-2xl font-bold text-gray-900 text-center mb-3">
          Souscription en cours...
        </h2>
        <p class="text-gray-600 text-center mb-6">
          Veuillez patienter pendant que nous créons votre espace de travail
        </p>
        
        <!-- Barre de progression animée -->
        <div class="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
          <div class="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-progress"></div>
        </div>
        
        <!-- Étapes en cours -->
        <div class="space-y-3">
          <div class="flex items-center text-sm text-gray-600">
            <div class="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
            <span>Vérification des informations...</span>
          </div>
          <div class="flex items-center text-sm text-gray-600">
            <div class="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse" style="animation-delay: 0.2s"></div>
            <span>Création de votre tenant...</span>
          </div>
          <div class="flex items-center text-sm text-gray-600">
            <div class="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse" style="animation-delay: 0.4s"></div>
            <span>Configuration de votre environnement...</span>
          </div>
        </div>
        
        <!-- Note importante -->
        <div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p class="text-xs text-blue-800 text-center">
            ⏳ Cette opération peut prendre quelques instants. Veuillez ne pas fermer cette fenêtre.
          </p>
        </div>
      </div>
    </div>
  </Transition>
  
  <!-- Modal de succès améliorée (HORS du BaseFormLayout) -->
  <Transition name="modal">
    <div v-if="showSuccessModal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
        <div class="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full transform transition-all animate-bounce-in">
          <!-- Animation de succès -->
          <div class="flex justify-center mb-6">
            <div class="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-scale-in shadow-lg">
              <svg class="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          
          <!-- Message de succès -->
          <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-4">
            🎉 Inscription réussie !
          </h2>
          <p class="text-gray-700 text-center mb-6 text-lg">
            {{ successMessage }}
          </p>
          
          <!-- Informations importantes -->
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 mb-6">
            <p class="text-sm text-gray-700 font-semibold mb-3 text-center">📧 Consultez votre email !</p>
            <p class="text-sm text-gray-600 text-center mb-4">
              Nous vous avons envoyé un email de confirmation avec :
            </p>
            <ul class="text-xs text-gray-600 space-y-2 mb-4">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Vos identifiants de connexion
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Le lien d'accès à votre application
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Les instructions pour démarrer
              </li>
            </ul>
            
            <div class="bg-white rounded-lg p-3">
              <p class="text-xs text-gray-500 mb-1 text-center">Lien d'accès :</p>
              <p class="text-blue-600 font-bold text-center break-all text-sm">
                {{ accessUrl }}
              </p>
            </div>
          </div>
          
          <!-- Bouton d'action -->
          <div class="flex justify-center">
            <button
              @click="redirectNow"
              class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition duration-200 transform hover:scale-105 shadow-lg">
              OK, j'ai compris
            </button>
          </div>
      </div>
    </div>
  </Transition>
  
  <!-- Modal d'erreur améliorée (HORS du BaseFormLayout) -->
  <Transition name="modal">
    <div v-if="showErrorModal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
        <div class="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full transform transition-all">
          <!-- Animation d'erreur -->
          <div class="flex justify-center mb-6">
            <div class="w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg">
              <svg class="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
          </div>
          
          <!-- Message d'erreur -->
          <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-4">
            ❌ Erreur
          </h2>
          <p class="text-gray-700 text-center mb-6 text-lg">
            {{ errorMessage }}
          </p>
          
          <!-- Détails de l'erreur si disponibles -->
          <div v-if="errorDetails" class="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6">
            <p class="text-sm text-red-800 font-semibold mb-2">Détails de l'erreur :</p>
            <p class="text-xs text-red-700">{{ errorDetails }}</p>
          </div>
          
          <!-- Conseils -->
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p class="text-sm text-blue-800 font-semibold mb-2">💡 Que faire ?</p>
            <ul class="text-xs text-blue-700 space-y-1">
              <li>• Vérifiez votre connexion internet</li>
              <li>• Assurez-vous d'avoir rempli tous les champs correctement</li>
              <li>• Réessayez dans quelques instants</li>
            </ul>
          </div>
          
          <!-- Bouton -->
          <button
            @click="closeErrorModal"
            class="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 rounded-xl transition duration-200 transform hover:scale-105 shadow-lg">
            Réessayer
          </button>
        </div>
      </div>
    </Transition>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import BaseFormLayout from './../components/BaseFromLayout.vue'
import FormCard from './../components/FormCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const stepsConfig = ref([
  { number: 1, label: 'Compte', active: false },
  { number: 2, label: 'Entreprise', active: false },
  { number: 3, label: 'Paiement', active: true },
])

const selectedMethod = ref('mobile')

const form = ref({
  name: '',
  orangeNumber: '',
  mobileNumber: '',
})

const userData = ref(null)
const companyData = ref(null)
const selectedPack = ref(null)  // Pack sélectionné
const isSubmitting = ref(false)
const errorMessage = ref('')
const errorDetails = ref('')
const successMessage = ref('')
const accessUrl = ref('')
const showSuccessModal = ref(false)
const showErrorModal = ref(false)
const showInputs = ref(true)
const countdown = ref(10)
let redirectTimer = null
let countdownInterval = null

const API_URL = 'http://api.sg-stocks.com/api/v1/auth'

// Charger les données des étapes précédentes
onMounted(() => {
  const storedUser = localStorage.getItem('registration_user')
  const storedCompany = localStorage.getItem('registration_company')
  const storedPack = localStorage.getItem('selected_pack')
  
  if (!storedUser || !storedCompany) {
    router.push('/')
    return
  }
  
  userData.value = JSON.parse(storedUser)
  companyData.value = JSON.parse(storedCompany)
  
  if (storedPack) {
    selectedPack.value = JSON.parse(storedPack)
  } else {
    alert('Veuillez d\'abord sélectionner un pack sur la page d\'accueil')
    router.push('/')
    return
  }
})

watch(selectedMethod, (newVal) => {
  showInputs.value = (newVal === 'orange' || newVal === 'mobile')
})

const handleSubmit = async () => {
  if (isSubmitting.value) return
  
  errorMessage.value = ''
  
  if (!userData.value || !companyData.value) {
    errorMessage.value = 'Données manquantes. Veuillez recommencer l\'inscription.'
    router.push('/')
    return
  }
  
  if (!userData.value.email || !userData.value.first_name || !userData.value.last_name || !userData.value.password) {
    errorMessage.value = 'Informations utilisateur incomplètes. Veuillez recommencer.'
    router.push('/CreationCompte')
    return
  }
  
  if (!companyData.value.name || companyData.value.name.trim().length < 2) {
    errorMessage.value = 'Nom d\'entreprise invalide. Veuillez recommencer.'
    router.push('/entreprise')
    return
  }
  
  if (!companyData.value.subdomain || companyData.value.subdomain.trim().length < 3) {
    errorMessage.value = 'Sous-domaine manquant ou invalide. Veuillez compléter les informations de l\'entreprise.'
    router.push('/entreprise')
    return
  }
  
  if (!selectedMethod.value) {
    errorMessage.value = 'Veuillez sélectionner une méthode de paiement'
    return
  }
  
  if (selectedMethod.value === 'card') {
    errorMessage.value = 'Le paiement par carte n\'est pas encore disponible'
    return
  }
  
  if (showInputs.value && !form.value.name) {
    errorMessage.value = 'Veuillez entrer votre nom complet'
    return
  }
  
  if (showInputs.value && form.value.name.trim().length < 3) {
    errorMessage.value = 'Le nom doit contenir au moins 3 caractères'
    return
  }
  
  if (selectedMethod.value === 'orange' && !form.value.orangeNumber) {
    errorMessage.value = 'Veuillez entrer votre numéro Orange Money'
    return
  }
  
  if (selectedMethod.value === 'orange' && form.value.orangeNumber.length < 9) {
    errorMessage.value = 'Le numéro Orange Money doit contenir 9 chiffres'
    return
  }
  
  if (selectedMethod.value === 'orange') {
    const orangeNumber = form.value.orangeNumber.replace(/\s/g, '')
    
    if (!orangeNumber.startsWith('6')) {
      errorMessage.value = 'Le numéro doit commencer par 6'
      return
    }
    
    if (orangeNumber.length !== 9) {
      errorMessage.value = 'Le numéro doit contenir exactement 9 chiffres'
      return
    }
  }
  
  if (selectedMethod.value === 'mobile' && !form.value.mobileNumber) {
    errorMessage.value = 'Veuillez entrer votre numéro Mobile Money'
    return
  }
  
  if (selectedMethod.value === 'mobile' && form.value.mobileNumber.length < 9) {
    errorMessage.value = 'Le numéro Mobile Money doit contenir 9 chiffres'
    return
  }
  
  if (selectedMethod.value === 'mobile') {
    const mobileNumber = form.value.mobileNumber.replace(/\s/g, '')
    
    if (!mobileNumber.startsWith('6')) {
      errorMessage.value = 'Le numéro doit commencer par 6'
      return
    }
    
    if (mobileNumber.length !== 9) {
      errorMessage.value = 'Le numéro doit contenir exactement 9 chiffres'
      return
    }
  }
  
  isSubmitting.value = true
  errorMessage.value = ''
  
  try {
    const payload = {
      user: userData.value,
      company: {
        ...companyData.value,
        plan: selectedPack.value?.plan_backend || 'starter'
      },
      subscription: {
        pack_id: selectedPack.value?.pack_id || 1,
        pack_name: selectedPack.value?.pack_name || 'PACK 1',
        payment_method: selectedMethod.value,
        payment_details: {
          name: form.value.name,
          phone: selectedMethod.value === 'orange' ? form.value.orangeNumber : form.value.mobileNumber,
          amount: selectedPack.value?.price || 229900
        }
      }
    }
    
    const response = await fetch(`${API_URL}/register-tenant/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    
    const data = await response.json()
    
    if (response.ok) {
      localStorage.removeItem('registration_user')
      localStorage.removeItem('registration_company')
      localStorage.removeItem('selected_pack')
      
      successMessage.value = `Félicitations ! Votre entreprise "${data.data.company.name}" a été créée avec succès.`
      accessUrl.value = data.data.access_url || `http://${companyData.value.subdomain}.localhost:5174`
      showSuccessModal.value = true
    } else {
      errorMessage.value = data.errors 
        ? Object.values(data.errors).flat().join(', ') 
        : (data.error || 'Une erreur est survenue lors de l\'inscription')
      
      errorDetails.value = data.message || ''
      showErrorModal.value = true
    }
  } catch (error) {
    errorMessage.value = 'Erreur de connexion au serveur. Vérifiez votre connexion internet.'
    errorDetails.value = error.message || 'Impossible de contacter le serveur'
    showErrorModal.value = true
  } finally {
    isSubmitting.value = false
  }
}

const startCountdown = () => {
  countdown.value = 10
  
  countdownInterval = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(countdownInterval)
      redirectNow()
    }
  }, 1000)
}

const cancelRedirect = () => {
  if (redirectTimer) clearTimeout(redirectTimer)
  if (countdownInterval) clearInterval(countdownInterval)
  showSuccessModal.value = false
  router.push('/')  // Rediriger vers la page d'accueil
}

const redirectNow = () => {
  if (redirectTimer) clearTimeout(redirectTimer)
  if (countdownInterval) clearInterval(countdownInterval)
  showSuccessModal.value = false
  router.push('/')  // Rediriger vers la page d'accueil
}

const closeErrorModal = () => {
  showErrorModal.value = false
  errorMessage.value = ''
  errorDetails.value = ''
}

const precedentEntreprise = () => {
  router.push('/entreprise')
}
</script>

<style scoped>
/* Animations pour les modales */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* Animation bounce-in */
@keyframes bounce-in {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-bounce-in {
  animation: bounce-in 0.6s ease-out;
}

/* Animation scale-in pour l'icône */
@keyframes scale-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-scale-in {
  animation: scale-in 0.5s ease-out 0.2s backwards;
}

/* Animation de la barre de progression */
@keyframes progress {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.animate-progress {
  animation: progress 3s ease-in-out infinite;
}
</style>
