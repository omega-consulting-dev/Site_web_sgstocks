

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import './assets/main.css'
import 'vue3-carousel-3d/dist/index.css'


const app = createApp(App);

createApp(App).use(router).mount('#app')
