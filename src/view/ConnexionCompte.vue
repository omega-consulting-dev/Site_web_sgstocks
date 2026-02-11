<!-- ========================================
     EXEMPLE D'UTILISATION: CreationCompte.vue
     Page de création de compte utilisant les composants
     ======================================== -->

<template>
    <RouterView/>
    <BaseFormLayout :steps="stepsConfig"    route="/" @submit="precedentAccueil">
        <FormCard title="Vos Compte SG-STOCK" description="Grace a l’authentification,  je rentre dans un                     
              environnement securisé." 
              @submit="handleConnexionCompte">
        <FormField label="Saisir votre e-mail pour vous connecter ou créer un compte" v-model="formData.email"
                type="email" />
        
        <div v-if="checking" class="text-blue-600 text-sm mt-2">
            Vérification de l'email...
        </div>
        <div v-if="errorMessage" class="text-red-600 text-sm mt-2">
            {{ errorMessage }}
        </div>
        
        <!-- Lien d'inscription -->
        <div class="text-center mt-6">
            <p class="text-gray-600 text-sm">
                Pas encore de compte ?
                <router-link 
                    to="/CreationCompte" 
                    class="font-bold text-purple-600 hover:text-purple-700 underline decoration-2 underline-offset-2 transition-colors"
                >
                    Inscrivez-vous
                </router-link>
            </p>
        </div>

        </FormCard>
    </BaseFormLayout>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BaseFormLayout from './../components/BaseFromLayout.vue'
import FormCard from './../components/FormCard.vue'
import FormField from './../components/FormField.vue'

const router = useRouter()

const stepsConfig = ref([
    { number: 1, label: 'Compte', active: true },
    { number: 2, label: 'Entreprise', active: false },
    { number: 3, label: 'Paiement', active: false }
])

const formData = ref({
    email: '',
})

const checking = ref(false)
const errorMessage = ref('')
const API_URL = 'http://api.sg-stocks.com/api/v1/auth'

const handleConnexionCompte = async () => {
    if (!formData.value.email) {
        errorMessage.value = 'Veuillez saisir votre email'
        return
    }
    
    checking.value = true
    errorMessage.value = ''
    
    try {
        const response = await fetch(`${API_URL}/check-email/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: formData.value.email
            })
        })
        
        const data = await response.json()
        
        if (response.ok) {
            if (data.exists) {
                errorMessage.value = 'Cet email existe déjà. Veuillez vous connecter.'
            } else {
                router.push({
                    path: '/CreationCompte',
                    query: { email: formData.value.email }
                })
            }
        } else {
            errorMessage.value = data.error || 'Erreur lors de la vérification'
        }
    } catch (error) {
        errorMessage.value = 'Erreur de connexion au serveur'
        console.error('Erreur:', error)
    } finally {
        checking.value = false
    }
}
const precedentAccueil = () =>{
    router.push('/')
}

</script>