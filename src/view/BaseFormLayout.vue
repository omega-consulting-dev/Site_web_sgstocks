




<!-- ========================================
     EXEMPLE 2: CreerEntreprise.vue
     Deuxième page avec design identique
     ======================================== -->

<template>
  <BaseFormLayout
    title="Plus que 3 étapes pour Passer commande"
    :steps="stepsConfig"
    @previous="goBack"
  >
    <FormCard
      title="Informations Entreprise"
      description="Renseignez les informations de votre entreprise."
      @submit="handleCreerEntreprise"
    >
      <FormField
        label="Nom de l'entreprise"
        v-model="formData.nomEntreprise"
        type="text"
      />
      <FormField
        label="Secteur d'activité"
        v-model="formData.secteur"
        type="text"
      />
      <FormField
        label="Numéro SIRET"
        v-model="formData.siret"
        type="text"
      />
      <FormField
        label="Téléphone"
        v-model="formData.telephone"
        type="tel"
      />
    </FormCard>
  </BaseFormLayout>
</template>

<script setup>
import { ref } from 'vue'
import FormCard from '@/components/FormCard.vue'
import FormField from '@/components/FormField.vue'

const stepsConfig = ref([
  { number: 1, label: 'Compte', active: false },
  { number: 2, label: 'Entreprise', active: true },
  { number: 3, label: 'Paiement', active: false }
])

const formData = ref({
  nomEntreprise: '',
  secteur: '',
  siret: '',
  telephone: ''
})

const handleCreerEntreprise = () => {
  console.log('Création entreprise:', formData.value)
}

const goBack = () => {
  console.log('Retour')
}
</script>