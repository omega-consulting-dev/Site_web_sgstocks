<!-- ========================================
     EXEMPLE D'UTILISATION: CreationCompte.vue
     Page de création de compte utilisant les composants
     ======================================== -->

<template>
    <RouterView/>
  <BaseFormLayout

    :steps="stepsConfig"
    route="/connexion"
    @submit="precedentConexion"
  >
    <FormCard
      title="Création du compte"
      description="Avoir un compte SG-Stock vous permet d'accéder a tous nos produits et services."
      @submit="handleCreerCompte"
    >
      <FormField
        label="Adresse e-mail"
        v-model="formData.email"
        type="email"
      />
      <FormField
        label="Nom"
        v-model="formData.nom"
        type="text"
      />
      <FormField
        label="Prénom"
        v-model="formData.prenom"
        type="text"
      />
      <FormField
        label="Mot de passe"
        v-model="formData.motDePasse"
        type="password"
      />
      <FormField
        label="Confirmez le Mot de passe"
        v-model="formData.confirmMotDePasse"
        type="password"
      />
      
      <div v-if="errorMessage" class="text-red-600 text-sm mt-2">
        {{ errorMessage }}
      </div>
    </FormCard>
  </BaseFormLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BaseFormLayout from './../components/BaseFromLayout.vue'
import FormCard from './../components/FormCard.vue'
import FormField from './../components/FormField.vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const stepsConfig = ref([
  { number: 1, label: 'Compte', active: true },
  { number: 2, label: 'Entreprise', active: false },
  { number: 3, label: 'Paiement', active: false }
])

const formData = ref({
  email: '',
  nom: '',
  prenom: '',
  motDePasse: '',
  confirmMotDePasse: ''
})

const errorMessage = ref('')

// Pré-remplir l'email depuis le query param
onMounted(() => {
  if (route.query.email) {
    formData.value.email = route.query.email
  }
})

const handleCreerCompte = () => {
  // Réinitialiser le message d'erreur
  errorMessage.value = ''
  
  // Validation des champs requis
  if (!formData.value.email || !formData.value.nom || !formData.value.prenom || !formData.value.motDePasse || !formData.value.confirmMotDePasse) {
    errorMessage.value = 'Tous les champs sont requis'
    return
  }
  
  // Validation du format email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})?$/
  if (!emailRegex.test(formData.value.email)) {
    errorMessage.value = 'Format d\'email invalide'
    return
  }
  
  // Validation nom et prénom (au moins 2 caractères)
  if (formData.value.nom.trim().length < 2) {
    errorMessage.value = 'Le nom doit contenir au moins 2 caractères'
    return
  }
  
  if (formData.value.prenom.trim().length < 2) {
    errorMessage.value = 'Le prénom doit contenir au moins 2 caractères'
    return
  }
  
  // Validation des mots de passe
  if (formData.value.motDePasse !== formData.value.confirmMotDePasse) {
    errorMessage.value = 'Les mots de passe ne correspondent pas'
    return
  }
  
  if (formData.value.motDePasse.length < 6) {
    errorMessage.value = 'Le mot de passe doit contenir au moins 6 caractères'
    return
  }
  
  // Stocker les données dans localStorage pour les étapes suivantes
  localStorage.setItem('registration_user', JSON.stringify({
    email: formData.value.email,
    first_name: formData.value.prenom,
    last_name: formData.value.nom,
    password: formData.value.motDePasse,
    password_confirm: formData.value.confirmMotDePasse
  }))
  
  router.push('/entreprise')
}

const precedentConexion = () => {
  router.push('/connexion')
}
</script>