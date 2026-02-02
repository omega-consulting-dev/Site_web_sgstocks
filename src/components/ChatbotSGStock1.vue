g<script setup>
import { ref, nextTick, watch } from 'vue'

// États
const isOpen = ref(false)
const isMinimized = ref(false)
const messages = ref([])
const userInput = ref('')
const isTyping = ref(false)
const chatContainer = ref(null)
const currentHour = new Date().getHours()

// Base de connaissances complète (votre JSON)
const knowledgeBase = {
  greetings: {
    messages: [
      {
        time: "morning",
        emoji: "☀️",
        title: "Bonjour",
        subtitle: "Excellente journée ! Comment puis-je vous aider à optimiser votre gestion de stock aujourd'hui ?"
      },
      {
        time: "afternoon", 
        emoji: "👋",
        title: "Bon après-midi",
        subtitle: "Ravi de vous accueillir ! Que puis-je faire pour faciliter votre activité commerciale ?"
      },
      {
        time: "evening",
        emoji: "🌙",
        title: "Bonsoir",
        subtitle: "Content de vous voir ! Comment puis-je vous assister ce soir ?"
      },
      {
        time: "default",
        emoji: "👋",
        title: "Bienvenue sur SG-Stock",
        subtitle: "Votre assistant intelligent pour la gestion de stock. Je suis là pour répondre à toutes vos questions !"
      }
    ],
    followUp: [
      "💡 Astuce : Tapez simplement votre question ou choisissez une catégorie ci-dessous",
      "🎯 Je peux vous aider avec la connexion, les packs, la facturation et bien plus !",
      "⚡ Réponse instantanée garantie - Posez-moi votre question !"
    ]
  },
  quickSuggestions: [
    {
      id: "conn_problem",
      icon: "🔐",
      title: "Je n'arrive pas à me connecter",
      category: "connexion"
    },
    {
      id: "choose_pack",
      icon: "📦",
      title: "Quel pack choisir pour mon entreprise ?",
      category: "packs"
    },
    {
      id: "payment_issue",
      icon: "💳",
      title: "Problème de paiement ou facturation",
      category: "paiements"
    },
    {
      id: "how_to_use",
      icon: "❓",
      title: "Comment utiliser SG-Stock ?",
      category: "utilisation"
    }
  ],
  categories: {
    packs: {
      name: "Packs et Abonnements",
      icon: "📦",
      responses: {
        compare_packs: {
          title: "Nos 3 Packs SG-Stock 🎯",
          intro: "Choisissez le pack adapté à la taille de votre entreprise. Tous nos packs incluent :",
          commonFeatures: [
            "✅ Essai gratuit de 14 jours (sans carte bancaire)",
            "✅ Gestion complète des stocks et produits",
            "✅ Création de factures illimitées",
            "✅ Suivi des revenus et dépenses en temps réel",
            "✅ Support client par email et téléphone"
          ],
          packs: [
            {
              name: "Pack Démarrage Simple",
              price: "15 000 FCFA/mois",
              oldPrice: "19 450 FCFA",
              savings: "Économisez 23%",
              badge: "Idéal pour débuter",
              description: "Parfait pour les petites boutiques et commerces de proximité qui démarrent leur digitalisation.",
              limits: {
                pointsDeVente: "1 point de vente maximum",
                utilisateurs: "3 utilisateurs administrateurs",
                stockage: "1 Go de stockage"
              },
              features: [
                "📍 Gestion d'un seul point de vente",
                "👥 Jusqu'à 3 utilisateurs",
                "📦 Gestion illimitée de produits",
                "💰 Suivi des ventes et encaissements"
              ]
            },
            {
              name: "Pack Professionnel",
              price: "40 000 FCFA/mois", 
              oldPrice: "50 000 FCFA",
              savings: "Économisez 20%",
              badge: "⭐ Le plus populaire",
              description: "Notre offre la plus demandée ! Idéale pour les entreprises en croissance.",
              limits: {
                pointsDeVente: "5 points de vente maximum",
                utilisateurs: "7 utilisateurs administrateurs", 
                stockage: "10 Go de stockage"
              },
              features: [
                "📍 Gestion de 5 points de vente",
                "👥 Jusqu'à 7 utilisateurs avec rôles",
                "📊 Rapports avancés",
                "🔄 Synchronisation temps réel"
              ]
            },
            {
              name: "Pack Avancé",
              price: "60 000 FCFA/mois",
              oldPrice: "80 000 FCFA", 
              savings: "Économisez 25%",
              badge: "🚀 Pour les grandes entreprises",
              description: "Solution complète pour les grandes entreprises avec besoins avancés.",
              limits: {
                pointsDeVente: "15 points de vente maximum",
                utilisateurs: "15 utilisateurs administrateurs",
                stockage: "50 Go de stockage"
              },
              features: [
                "📍 15 points de vente simultanément",
                "👥 15 utilisateurs permissions granulaires",
                "📊 Business Intelligence",
                "🔐 Sécurité renforcée + API"
              ]
            }
          ]
        }
      }
    }
  }
}

// Obtenir salutation selon l'heure
const getGreeting = () => {
  const hour = currentHour
  if (hour < 12) return knowledgeBase.greetings.messages.find(m => m.time === 'morning')
  if (hour < 18) return knowledgeBase.greetings.messages.find(m => m.time === 'afternoon')
  if (hour < 22) return knowledgeBase.greetings.messages.find(m => m.time === 'evening')
  return knowledgeBase.greetings.messages.find(m => m.time === 'default')
}

// Initialisation intelligente
const initChat = () => {
  if (messages.value.length === 0) {
    const greeting = getGreeting()
    messages.value.push({
      id: Date.now(),
      type: 'bot',
      content: {
        greeting: true,
        emoji: greeting.emoji,
        title: greeting.title,
        subtitle: greeting.subtitle,
        followUp: knowledgeBase.greetings.followUp[0]
      },
      timestamp: new Date()
    })
  }
}

// Toggle chat
const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    initChat()
    nextTick(() => scrollToBottom())
  }
}

const toggleMinimize = () => {
  isMinimized.value = !isMinimized.value
}

// Gestion des suggestions
const handleSuggestion = (suggestion) => {
  sendMessage(suggestion.title, suggestion.category)
}

// Réponse intelligente basée sur la base de connaissances
const getResponseFromKnowledge = (category) => {
  if (category === 'packs') {
    return knowledgeBase.categories.packs.responses.compare_packs
  }
  return {
    title: 'SGChat vous aide ! 🤝',
    message: 'Je peux vous assister pour la gestion des stocks, facturation, connexions et bien plus !'
  }
}

// Send message avec base de connaissances
const sendMessage = (displayText = null, category = null) => {
  const text = displayText || userInput.value.trim()
  if (!text) return
  
  messages.value.push({
    id: Date.now(),
    type: 'user',
    content: { text },
    timestamp: new Date()
  })
  
  userInput.value = ''
  nextTick(scrollToBottom)
  isTyping.value = true
  
  setTimeout(() => {
    isTyping.value = false
    
    const responseData = getResponseFromKnowledge(category)
    
    messages.value.push({
      id: Date.now() + 1,
      type: 'bot',
      content: {
        title: responseData.title,
        message: formatPackResponse(responseData),
        isRich: true
      },
      timestamp: new Date()
    })
    
    nextTick(scrollToBottom)
  }, 1200)
}

// Formatage réponse packs détaillée
const formatPackResponse = (data) => {
  let message = `${data.intro}\n\n`
  
  data.commonFeatures?.forEach(feature => {
    message += `${feature}\n`
  })
  
  message += `\n${data.packs[0].name}\n${data.packs[0].description}\n`
  message += `💰 **${data.packs[0].price}** (${data.packs[0].savings})\n\n`
  
  message += `${data.packs[1].name}\n${data.packs[1].description}\n`
  message += `💰 **${data.packs[1].price}** ⭐ ${data.packs[1].badge}\n\n`
  
  message += `${data.packs[2].name}\n${data.packs[2].description}\n`
  message += `💰 **${data.packs[2].price}** 🚀\n\n`
  
  return message
}

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

watch(isMinimized, () => {
  if (!isMinimized.value) {
    nextTick(scrollToBottom)
  }
})
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
    
    <!-- Bouton SGChat -->
    <transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 scale-90"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-90"
    >
      <button
        v-if="!isOpen"
        @click="toggleChat"
        class="group relative bg-gradient-to-br from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full px-6 py-3.5 flex items-center gap-2 shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v2H3V3zM3 7v2h18V7H3zm0 4v2h18v-2H3zm0 4v2h18v-2H3z"/>
          <circle cx="7" cy="17" r="2"/>
        </svg>
        <span class="font-semibold">SGChat</span>
      </button>
    </transition>

    <!-- Fenêtre Chat -->
    <transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="isOpen"
        class="bg-white rounded-2xl shadow-2xl overflow-hidden w-[420px] max-h-[650px] flex flex-col"
        :class="isMinimized ? 'h-[80px]' : 'h-[650px]'"
      >
        
        <!-- Header -->
        <div class="bg-white border-b border-gray-200 p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50" @click="toggleMinimize">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h18v2H3V3z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 text-lg">SGChat</h3>
              <p class="text-xs text-gray-500">Assistant IA Gestion Commerciale</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button @click.stop="toggleMinimize" class="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg">
              <svg class="w-5 h-5 text-gray-600" :class="isMinimized ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button @click.stop="toggleChat" class="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Messages -->
        <div v-show="!isMinimized" ref="chatContainer" class="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
          
          <div v-for="message in messages" :key="message.id" class="animate-fadeIn">
            
            <!-- Greeting riche -->
            <div v-if="message.type === 'bot' && message.content.greeting" class="flex flex-col items-center text-center space-y-4 py-8">
              <div class="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
                <svg class="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18v2H3V3z"/>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ message.content.emoji }} {{ message.content.title }}</h2>
                <p class="text-gray-600 text-base">{{ message.content.subtitle }}</p>
                <p class="text-sm text-gray-500 mt-2 italic">{{ message.content.followUp }}</p>
              </div>
              
              <!-- Quick suggestions -->
              <div class="w-full grid grid-cols-1 gap-3 max-w-md">
                <button
                  v-for="suggestion in knowledgeBase.quickSuggestions"
                  :key="suggestion.id"
                  @click="handleSuggestion(suggestion)"
                  class="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-md transition-all text-left group"
                >
                  <span class="text-2xl group-hover:scale-110 transition-transform">{{ suggestion.icon }}</span>
                  <span class="text-sm font-medium text-gray-800 group-hover:text-gray-900 flex-1">{{ suggestion.title }}</span>
                </button>
              </div>
            </div>
            
            <!-- Bot message riche -->
            <div v-else-if="message.type === 'bot'" class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h18v2H3V3z"/>
                  </svg>
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <div class="bg-white rounded-2xl rounded-tr-sm p-6 border border-emerald-100 shadow-lg max-w-[95%]">
                  <p v-if="message.content.title" class="font-bold text-xl text-gray-900 mb-4">{{ message.content.title }}</p>
                  <div class="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                    {{ message.content.message }}
                  </div>
                </div>
              </div>
            </div>

            <!-- User message -->
            <div v-else class="flex justify-end">
              <div class="bg-emerald-600 text-white rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-lg">
                <p class="text-sm">{{ message.content.text }}</p>
              </div>
            </div>
          </div>

          <!-- Typing -->
          <div v-if="isTyping" class="flex gap-4 animate-fadeIn">
            <div class="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h18v2H3V3z"/>
              </svg>
            </div>
            <div class="bg-white rounded-2xl rounded-tr-sm p-6 border border-emerald-100 shadow-lg">
              <div class="flex gap-2">
                <div class="w-3 h-3 bg-emerald-500 rounded-full animate-bounce" style="animation-delay: 0s"></div>
                <div class="w-3 h-3 bg-emerald-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                <div class="w-3 h-3 bg-emerald-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div v-show="!isMinimized" class="border-t border-gray-200 bg-white p-5">
          <form @submit.prevent="sendMessage()" class="relative">
            <input
              v-model="userInput"
              type="text"
              :placeholder="`Posez votre question à SGChat...`"
              class="w-full pl-5 pr-14 py-4 border-2 border-gray-200 rounded-full focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all text-base"
              @keyup.enter="sendMessage()"
            />
            <button
              type="submit"
              :disabled="!userInput.trim()"
              class="absolute right-1 top-1/2 -translate-y-1/2 w-11 h-11 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
          <p class="text-xs text-gray-500 text-center mt-3">
         SGChat peut faire des erreurs. Veuillez vérifier vos réponses
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn { animation: fadeIn 0.4s ease-out; }

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { 
  background: #d1d5db; 
  border-radius: 10px; 
}
::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
</style>
