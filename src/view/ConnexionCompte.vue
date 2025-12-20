<!-- ========================================
     EXEMPLE D'UTILISATION: CreationCompte.vue
     Page de création de compte utilisant les composants
     ======================================== -->

<template>
    <RouterView/>
    <BaseFormLayout :steps="stepsConfig"    route="/" @submit="precedentAccueil">
        <FormCard title="Vos Compte SG-STOCK" description="Grace a l’authentification,  je rentre dans un                     
              environnement securisé." 
              route="/CreationCompte"
               @submit="handleConnexionCompte">
        <FormField label="Saisir votre e-mail pour vous connecter ou créer un compte" v-model="formData.email"
                type="email" />

        </FormCard>
    </BaseFormLayout>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // Import du router
import BaseFormLayout from './../components/BaseFromLayout.vue'
import FormCard from './../components/FormCard.vue'
import FormField from './../components/FormField.vue'


const router = useRouter() // Initialisation du router

const stepsConfig = ref([
    { number: 1, label: 'Compte', active: true },
    { number: 2, label: 'Entreprise', active: false },
    { number: 3, label: 'Paiement', active: false }
])

const formData = ref({
    email: '',
})

const handleConnexionCompte = () => {
    console.log('Création du compte:', formData.value)
    // Redirection vers la page de création de compte
    router.push('/CreationCompte')
}
const precedentAccueil = () =>{
    router.push('/')
}

</script>