import { createRouter, createWebHistory } from "vue-router"
import AccueilFinale from "@/view/AccueilFinale.vue"
import accueil from "@/view/accueil.vue"

const routes =[

 { path: '/accueil', name: 'rout-Accueil', component: accueil },
  { path: '/', name: 'rout-AccueilFinale', component: AccueilFinale },

]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router 