import { createRouter, createWebHistory } from "vue-router"
import AccueilFinale from "@/view/AccueilFinale.vue"


import ConnexionCompte from "@/view/ConnexionCompte.vue"
import CreationCompte from "@/view/CreationCompte.vue"
import CreateEntreprise from '@/view/creationEntreprise.vue'
import Paiement from '@/view/Paiement.vue'

const routes = [

   
    { path: '/', name: 'rout-AccueilFinale', component: AccueilFinale },  
    { path: '/connexion', name: 'rout-connexion', component: ConnexionCompte },
    { path: '/CreationCompte', name: 'rout-inscription', component: CreationCompte },
    { path: '/entreprise', name: 'rout-entreprise', component: CreateEntreprise },
    { path: '/Paiement', name: 'rout-Paiement', component: Paiement }


]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router 