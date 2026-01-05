<script setup>
import { ref, nextTick, watch } from 'vue'

// Importer la base de connaissances
// Dans votre vraie app : import knowledgeBase from '@/data/knowledgeBase.json'
// Pour l'instant on l'inclut directement
import knowledgeBase from '@/data/knowledgeBase.json'

// États
const isOpen = ref(false)
const isMinimized = ref(false)
const messages = ref([])
const userInput = ref('')
const isTyping = ref(false)
const chatContainer = ref(null)

// Obtenir salutation selon l'heure
const getGreeting = () => {
  const hour = new Date().getHours()
  const greetings = knowledgeBase.greetings.messages
  
  if (hour < 12) return greetings.find(m => m.time === 'morning')
  if (hour < 18) return greetings.find(m => m.time === 'afternoon')
  if (hour < 22) return greetings.find(m => m.time === 'evening')
  return greetings.find(m => m.time === 'default')
}

// Initialisation avec message d'accueil intelligent
const initChat = () => {
  if (messages.value.length === 0) {
    const greeting = getGreeting()
    const randomFollowUp = knowledgeBase.greetings.followUp[
      Math.floor(Math.random() * knowledgeBase.greetings.followUp.length)
    ]
    
    messages.value.push({
      id: Date.now(),
      type: 'bot',
      content: {
        greeting: true,
        emoji: greeting.emoji,
        title: greeting.title,
        subtitle: greeting.subtitle,
        followUp: randomFollowUp
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

// Détection intelligente de la catégorie par mots-clés
const detectCategory = (text) => {
  const lowerText = text.toLowerCase()
  
  for (const suggestion of knowledgeBase.quickSuggestions) {
    if (suggestion.keywords?.some(keyword => lowerText.includes(keyword))) {
      return suggestion.category
    }
  }
  
  return 'default'
}

// Gestion des suggestions
const handleSuggestion = (suggestion) => {
  sendMessage(suggestion.title, suggestion.category)
}

// Formater la réponse des packs de manière détaillée
const formatPacksResponse = () => {
  const packsData = knowledgeBase.categories.packs.responses.compare_packs
  let message = `${packsData.intro}\n\n`
  
  // Fonctionnalités communes
  message += '**Inclus dans tous les packs :**\n'
  packsData.commonFeatures.forEach(feature => {
    message += `${feature}\n`
  })
  
  message += '\n━━━━━━━━━━━━━━━\n\n'
  
  // Détail de chaque pack
  packsData.packs.forEach((pack, index) => {
    message += `**${pack.name}** ${pack.badge}\n`
    message += `${pack.description}\n\n`
    message += `💰 **${pack.price}** ~~${pack.oldPrice}~~\n`
    message += `${pack.savings}\n\n`
    
    message += `📊 **Limites :**\n`
    message += `• ${pack.limits.pointsDeVente}\n`
    message += `• ${pack.limits.utilisateurs}\n`
    message += `• ${pack.limits.stockage}\n\n`
    
    message += `✨ **Fonctionnalités principales :**\n`
    pack.features.slice(0, 4).forEach(feature => {
      message += `${feature}\n`
    })
    
    if (pack.bestFor) {
      message += `\n👥 **Idéal pour :** ${pack.bestFor.slice(0, 2).join(', ')}\n`
    }
    
    if (index < packsData.packs.length - 1) {
      message += '\n━━━━━━━━━━━━━━━\n\n'
    }
  })
  
  // CTA
  if (packsData.cta) {
    message += `\n\n🎁 **${packsData.cta.title}**\n`
    message += `${packsData.cta.message}\n\n`
    message += `📝 ${packsData.cta.note}`
  }
  
  return message
}

// Formater réponse connexion
const formatConnexionResponse = () => {
  const connexionData = knowledgeBase.categories.connexion.responses.login_problem
  let message = `${connexionData.title}\n\n`
  
  connexionData.steps.forEach(step => {
    message += `${step.title}\n${step.details}\n\n`
  })
  
  message += '**💡 Conseils de sécurité :**\n'
  connexionData.tips.forEach(tip => {
    message += `${tip}\n`
  })
  
  return message
}

// Obtenir réponse intelligente basée sur la catégorie
const getSmartResponse = (category) => {
  switch(category) {
    case 'packs':
      return {
        title: knowledgeBase.categories.packs.responses.compare_packs.title,
        message: formatPacksResponse(),
        hasActions: true
      }
    
    case 'connexion':
      return {
        title: knowledgeBase.categories.connexion.responses.login_problem.title,
        message: formatConnexionResponse(),
        hasActions: true
      }
    
    case 'paiements':
      return {
        title: 'Modes de Paiement Acceptés 💳',
        message: `Nous acceptons plusieurs modes de paiement sécurisés :\n\n📱 **Mobile Money**\n• Orange Money 🟠\n• MTN Mobile Money 🟡\n• Moov Money 🔵\n\n💳 **Cartes Bancaires**\n• Visa\n• Mastercard\n\n🏦 **Virement Bancaire**\n• Pour packs annuels uniquement\n• Validation sous 24-48h\n\n✅ Tous les paiements sont 100% sécurisés !`,
        hasActions: true
      }
    
    case 'utilisation':
      return {
        title: 'Guide d\'Utilisation SG-Stock 📚',
        message: `Voici comment démarrer avec SG-Stock :\n\n1️⃣ **Connexion**\nAccédez à sg-stock.com avec vos identifiants\n\n2️⃣ **Configuration**\n• Ajoutez vos points de vente\n• Créez vos utilisateurs\n• Configurez vos catégories\n\n3️⃣ **Gestion des Produits**\n• Menu "Stocks" → "Ajouter un produit"\n• Renseignez : nom, prix, quantité, seuil d'alerte\n\n4️⃣ **Ventes**\n• Menu "Ventes" → "Nouvelle vente"\n• Sélectionnez produits et client\n• Facture générée automatiquement !\n\n💡 Besoin d'aide ? Consultez notre documentation complète ou contactez le support !`,
        hasActions: true
      }
    
    case 'stock':
      return {
        title: 'Ajouter des Produits 📦',
        message: `Pour ajouter vos produits dans SG-Stock :\n\n**Étape 1 : Accéder au module**\nMenu "Stocks" → "Produits" → "+ Nouveau produit"\n\n**Étape 2 : Remplir les informations**\n• Nom du produit\n• Code-barres (optionnel)\n• Catégorie\n• Prix d'achat et de vente\n• Quantité en stock\n• Seuil d'alerte (stock minimum)\n\n**Étape 3 : Enregistrer**\nCliquez sur "Enregistrer" et c'est fait !\n\n💡 **Astuce** : Vous pouvez importer en masse via un fichier Excel !`,
        hasActions: true
      }
    
    case 'support':
      return {
        title: 'Contacter le Support 🎧',
        message: `Notre équipe est là pour vous aider !\n\n📧 **Email**\n${knowledgeBase.supportInfo.email}\n\n📞 **Téléphone**\n${knowledgeBase.supportInfo.phone}\n\n⏰ **Horaires**\n${knowledgeBase.supportInfo.hours}\n\n⚡ **Temps de réponse**\n${knowledgeBase.supportInfo.responseTime}\n\n🌍 **Langues**\n${knowledgeBase.supportInfo.languages.join(', ')}\n\n💬 Vous pouvez aussi utiliser ce chat pour obtenir de l'aide immédiate !`,
        hasActions: false
      }
    
    default:
      return {
        title: 'Je suis là pour vous aider ! 🤝',
        message: `Je peux répondre à vos questions sur :\n\n🔐 Connexion et comptes\n📦 Packs et abonnements\n💳 Paiements et facturation\n📊 Gestion des stocks\n❓ Utilisation de l'application\n🎧 Support technique\n\nQue puis-je faire pour vous ?`,
        hasActions: false
      }
  }
}

// Envoyer message avec détection intelligente
const sendMessage = (displayText = null, forceCategory = null) => {
  const text = displayText || userInput.value.trim()
  if (!text) return
  
  // Ajouter message utilisateur
  messages.value.push({
    id: Date.now(),
    type: 'user',
    content: { text },
    timestamp: new Date()
  })
  
  userInput.value = ''
  nextTick(scrollToBottom)
  
  // Typing indicator
  isTyping.value = true
  
  setTimeout(() => {
    isTyping.value = false
    
    // Détection de catégorie ou utiliser forcée
    const category = forceCategory || detectCategory(text)
    const response = getSmartResponse(category)
    
    messages.value.push({
      id: Date.now() + 1,
      type: 'bot',
      content: {
        title: response.title,
        message: response.message,
        hasActions: response.hasActions
      },
      timestamp: new Date()
    })
    
    nextTick(scrollToBottom)
  }, 1200)
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
    
    <!-- Bouton flottant SGChat -->
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
        class="group relative bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full px-6 py-3.5 flex items-center gap-2 shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8V8.41l8-4 8 4V12c0 4.41-3.59 8-8 8z"/>
          <path d="M12 6L6 9v3c0 2.97 2.16 5.43 5 5.91V13h2v4.91c2.84-.48 5-2.94 5-5.91V9l-6-3z"/>
        </svg>
        <span class="font-semibold">Demandez à SGChat</span>
      </button>
    </transition>

    <!-- Fenêtre Chat SGChat -->
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
        class="bg-white rounded-2xl shadow-2xl overflow-hidden w-[420px] flex flex-col"
        :class="isMinimized ? 'h-[80px]' : 'h-[680px]'"
      >
        
        <!-- Header -->
        <div class="bg-white border-b border-gray-200 p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors" @click="toggleMinimize">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-md">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-gray-900">SGChat</h3>
              <p class="text-xs text-gray-500">Assistant SG-Stock</p>
            </div>
          </div>
          
          <div class="flex items-center gap-2">
            <button @click.stop="toggleMinimize" class="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg transition-colors">
              <svg class="w-5 h-5 text-gray-600 transition-transform" :class="isMinimized ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button @click.stop="toggleChat" class="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg transition-colors">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Messages -->
        <div v-show="!isMinimized" ref="chatContainer" class="flex-1 overflow-y-auto p-6 bg-white space-y-4">
          
          <div v-for="message in messages" :key="message.id" class="animate-fadeIn">
            
            <!-- Message d'accueil enrichi -->
            <div v-if="message.type === 'bot' && message.content.greeting" class="flex flex-col items-center text-center space-y-4 py-6">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                <svg class="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8V8.41l8-4 8 4V12c0 4.41-3.59 8-8 8z"/>
                </svg>
              </div>
              
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-2">
                  {{ message.content.emoji }} {{ message.content.title }}
                </h2>
                <p class="text-gray-600 text-sm leading-relaxed">{{ message.content.subtitle }}</p>
                <p class="text-xs text-gray-500 mt-2 italic">{{ message.content.followUp }}</p>
              </div>
              
              <!-- Suggestions -->
              <div class="w-full space-y-2 mt-4">
                <button
                  v-for="suggestion in knowledgeBase.quickSuggestions"
                  :key="suggestion.id"
                  @click="handleSuggestion(suggestion)"
                  class="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all text-left group"
                >
                  <span class="text-xl">{{ suggestion.icon }}</span>
                  <span class="text-sm text-gray-700 group-hover:text-gray-900 flex-1">{{ suggestion.title }}</span>
                </button>
              </div>
            </div>
            
            <!-- Message bot standard -->
            <div v-else-if="message.type === 'bot'" class="flex gap-3">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
              </div>
              
              <div class="flex-1 space-y-2">
                <div class="bg-gray-50 rounded-2xl rounded-tl-sm p-4 border border-gray-100">
                  <p v-if="message.content.title" class="font-semibold text-gray-900 mb-2">{{ message.content.title }}</p>
                  <p class="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{{ message.content.message }}</p>
                </div>
              </div>
            </div>

            <!-- Message utilisateur -->
            <div v-else-if="message.type === 'user'" class="flex gap-3 justify-end">
              <div class="flex-1 flex justify-end">
                <div class="bg-purple-600 text-white rounded-2xl rounded-tr-sm p-4 max-w-[85%] shadow-md">
                  <p class="text-sm">{{ message.content.text }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Typing indicator -->
          <div v-if="isTyping" class="flex gap-3 animate-fadeIn">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-2xl rounded-tl-sm p-4 border border-gray-100">
              <div class="flex gap-1.5">
                <span class="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                <span class="w-2 h-2 bg-purple-600 rounded-full animate-pulse" style="animation-delay: 0.2s;"></span>
                <span class="w-2 h-2 bg-purple-600 rounded-full animate-pulse" style="animation-delay: 0.4s;"></span>
              </div>
            </div>
          </div>

        </div>

        <!-- Input -->
        <div v-show="!isMinimized" class="border-t border-gray-200 bg-white p-4">
          <form @submit.prevent="sendMessage()" class="relative">
            <input
              v-model="userInput"
              type="text"
              placeholder="Ask SGChat anything..."
              class="w-full pl-4 pr-12 py-3.5 border-2 border-gray-900 rounded-full focus:outline-none focus:border-purple-600 text-sm transition-colors"
            />
            
            <button
              type="submit"
              :disabled="!userInput.trim()"
              class="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors"
            >
              <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
          
          <p class="text-xs text-gray-500 text-center mt-3">
            SGChat peut faire des erreurs. Veuillez vérifier vos réponses.
          </p>
        </div>

      </div>
    </transition>

  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}
</style>