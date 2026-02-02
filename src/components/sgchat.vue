<script setup>
import { ref, nextTick, watch, onMounted, onBeforeUnmount } from 'vue'
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

// Bloquer / débloquer scroll body
const lockBodyScroll = () => {
  document.body.classList.add('overflow-hidden')
  document.body.classList.add('!scrollbar-hide')
}

const unlockBodyScroll = () => {
  document.body.classList.remove('overflow-hidden')
  document.body.classList.remove('!scrollbar-hide')
}

// Watch pour gérer l'ouverture/fermeture
watch(isOpen, (open) => {
  if (open) {
    lockBodyScroll()
    nextTick(() => scrollToBottom())
  } else {
    unlockBodyScroll()
  }
})

watch(isMinimized, (minimized) => {
  if (!minimized && isOpen.value) {
    nextTick(() => scrollToBottom())
  }
})

// Nettoyer au démontage
onBeforeUnmount(() => {
  unlockBodyScroll()
  messages.value = []
})

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
</script>

<template>
  <!-- Overlay backdrop flou + figé -->
  <div
    v-if="isOpen"
    class="fixed inset-0 z-[45] bg-black/40 backdrop-blur-sm"
    @click="toggleChat"
  ></div>

  <!-- Conteneur principal responsive -->
  <div class="fixed bottom-3 right-3 z-50 flex flex-col items-end gap-3 xs:bottom-4 xs:right-4 sm:bottom-6 sm:right-6">
    
    <!-- Bouton flottant SGChat -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-90 translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-90 translate-y-2"
    >
      <button
        v-if="!isOpen"
        @click="toggleChat"
        class="group relative bg-gradient-to-br from-purple-600 via-purple-600/90 to-purple-700 hover:from-purple-700 hover:to-purple-800 active:scale-95 text-white rounded-full shadow-2xl shadow-purple-500/25 border border-purple-500/30 px-3 py-2.5 xs:px-4 xs:py-3 sm:px-6 sm:py-3.5 flex items-center gap-1.5 xs:gap-2 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/20"
        aria-label="Ouvrir SGChat"
      >
        <svg class="w-4 h-4 xs:w-5 xs:h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8V8.41l8-4 8 4V12c0 4.41-3.59 8-8 8z"/>
          <path d="M12 6L6 9v3c0 2.97 2.16 5.43 5 5.91V13h2v4.91c2.84-.48 5-2.94 5-5.91V9l-6-3z"/>
        </svg>
        <span class="font-semibold text-xs xs:text-sm sm:text-base whitespace-nowrap">
          SGChat
        </span>
      </button>
    </transition>

    <!-- Fenêtre Chat SGChat -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4 scale-[0.95]"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-250 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-[0.95]"
    >
      <div
        v-if="isOpen"
        class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/20 border border-white/50 overflow-hidden w-[92vw] max-w-sm xs:w-[90vw] xs:max-w-md sm:w-[420px] sm:max-w-none flex flex-col h-[65vh] xs:h-[70vh] sm:h-[680px] max-h-[90vh] sm:max-h-none"
        :class="{
          'h-20 xs:h-[80px] sm:h-[80px]': isMinimized,
          'ring-2 ring-purple-500/30 ring-opacity-100': isOpen
        }"
        role="dialog"
        aria-modal="true"
        aria-labelledby="chat-header"
      >
        
        <!-- Header -->
        <header
          id="chat-header"
          class="bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-sm border-b border-gray-200/70 p-3 xs:p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50/80 active:bg-gray-100/80 transition-all duration-200 group/header"
          @click="toggleMinimize"
        >
          <div class="flex items-center gap-2.5 xs:gap-3">
            <div class="w-9 h-9 xs:w-10 xs:h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 shrink-0">
              <svg class="w-5 h-5 xs:w-6 xs:h-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <div class="min-w-0">
              <h3 class="font-bold text-gray-900 text-sm xs:text-base truncate leading-tight">SGChat</h3>
              <p class="text-xs text-gray-500 leading-tight">Assistant SG-Stock</p>
            </div>
          </div>
          
          <div class="flex items-center gap-1.5 xs:gap-2">
            <button
              @click.stop="toggleMinimize"
              class="w-8 h-8 flex items-center justify-center hover:bg-gray-200/80 hover:backdrop-blur-sm active:scale-95 rounded-xl transition-all duration-200 group"
              aria-label="Réduire le chat"
            >
              <svg
                class="w-4.5 h-4.5 text-gray-600 transition-transform group-hover:text-gray-800"
                :class="isMinimized ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2.2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button
              @click.stop="toggleChat"
              class="w-8 h-8 flex items-center justify-center hover:bg-red-100 hover:text-red-600 active:scale-95 rounded-xl transition-all duration-200 group"
              aria-label="Fermer le chat"
            >
              <svg class="w-4.5 h-4.5 text-gray-600 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        <!-- Messages -->
        <div
          v-show="!isMinimized"
          ref="chatContainer"
          class="flex-1 overflow-y-auto p-3.5 xs:p-4 sm:p-6 bg-gradient-to-b from-white/80 via-white to-gray-50/80 space-y-3.5 xs:space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        >
          <div v-for="message in messages" :key="message.id" class="animate-fadeIn">
            
            <!-- Message d'accueil enrichi -->
            <div v-if="message.type === 'bot' && message.content.greeting" class="flex flex-col items-center text-center space-y-3.5 py-6 px-2">
              <div class="w-16 h-16 xs:w-20 xs:h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/30">
                <svg class="w-10 h-10 xs:w-12 xs:h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8V8.41l8-4 8 4V12c0 4.41-3.59 8-8 8z"/>
                </svg>
              </div>
              
              <div class="space-y-2 px-2">
                <h2 class="text-xl xs:text-2xl font-bold text-gray-900 leading-tight">
                  {{ message.content.emoji }} {{ message.content.title }}
                </h2>
                <p class="text-gray-600 text-xs xs:text-sm leading-relaxed">{{ message.content.subtitle }}</p>
                <p class="text-xs text-gray-500 italic">{{ message.content.followUp }}</p>
              </div>
              
              <!-- Suggestions responsive -->
              <div class="w-full space-y-2 mt-4 px-1">
                <button
                  v-for="suggestion in knowledgeBase.quickSuggestions"
                  :key="suggestion.id"
                  @click="handleSuggestion(suggestion)"
                  class="w-full flex items-center gap-2.5 p-2.5 xs:p-3 border border-gray-200/70 hover:border-purple-300 hover:bg-purple-50/80 active:scale-[0.98] rounded-xl transition-all text-left group shadow-sm hover:shadow-md"
                >
                  <span class="text-lg xs:text-xl shrink-0">{{ suggestion.icon }}</span>
                  <span class="text-xs xs:text-sm text-gray-700 group-hover:text-gray-900 flex-1 leading-tight">{{ suggestion.title }}</span>
                </button>
              </div>
            </div>
            
            <!-- Message bot standard -->
            <div v-else-if="message.type === 'bot'" class="flex gap-3">
              <div class="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center shadow-md">
                <svg class="w-4 h-4 xs:w-5 xs:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              
              <div class="flex-1 space-y-1.5 min-w-0">
                <div class="bg-white/90 backdrop-blur-sm rounded-2xl rounded-tl-lg p-3.5 xs:p-4 border border-gray-100/70 shadow-sm hover:shadow-md transition-shadow">
                  <p v-if="message.content.title" class="font-semibold text-gray-900 text-sm xs:text-base mb-1.5 leading-tight">{{ message.content.title }}</p>
                  <p class="text-sm xs:text-sm text-gray-700 whitespace-pre-line leading-relaxed text-[14px]">{{ message.content.message }}</p>
                </div>
              </div>
            </div>

            <!-- Message utilisateur -->
            <div v-else-if="message.type === 'user'" class="flex gap-3 justify-end">
              <div class="flex-1 flex justify-end max-w-[85%]">
                <div class="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl rounded-tr-lg p-3.5 xs:p-4 shadow-lg hover:shadow-xl transition-shadow">
                  <p class="text-sm leading-tight">{{ message.content.text }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Typing indicator -->
          <div v-if="isTyping" class="flex gap-3 animate-fadeIn">
            <div class="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center shadow-md">
              <svg class="w-4 h-4 xs:w-5 xs:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            
            <div class="bg-white/90 backdrop-blur-sm rounded-2xl rounded-tl-lg p-3.5 xs:p-4 border border-gray-100/70 shadow-sm">
              <div class="flex gap-1.5">
                <span class="w-2 h-2 bg-purple-600 rounded-full animate-bounce [animation-delay:-0.2s]"></span>
                <span class="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></span>
                <span class="w-2 h-2 bg-purple-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Input (caché quand minimisé) -->
        <div v-show="!isMinimized" class="border-t border-gray-200/70 bg-white/95 backdrop-blur-sm p-3 xs:p-3.5 sm:p-4 shrink-0">
          <form @submit.prevent="sendMessage()" class="relative">
            <input
              v-model="userInput"
              type="text"
              placeholder="Posez votre question à SGChat..."
              class="w-full pl-3.5 pr-10 py-3 xs:pl-4 xs:pr-11 xs:py-3 border-2 border-gray-200/70 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-sm placeholder-gray-500 transition-all bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md"
              :disabled="isTyping"
              autocomplete="off"
              aria-label="Votre message"
            />
            
            <button
              type="submit"
              :disabled="!userInput.trim() || isTyping"
              class="absolute right-1.5 xs:right-2 top-1/2 -translate-y-1/2 w-8 h-8 xs:w-9 xs:h-9 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 disabled:from-gray-100 disabled:to-gray-200 disabled:cursor-not-allowed active:scale-95 rounded-xl flex items-center justify-center transition-all shadow-sm hover:shadow-md"
            >
              <svg class="w-4 h-4 xs:w-5 xs:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
          
          <p class="text-[11px] xs:text-xs text-gray-500 text-center mt-2.5 leading-tight">
            SGChat peut faire des erreurs. Veuillez vérifier les réponses importantes.
          </p>
        </div>

      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Animations personnalisées */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Scrollbar personnalisée ultra-fine */
.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.6);
  border-radius: 10px;
  transition: background-color 0.2s;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.8);
}

/* Cache scrollbar sur mobile */
@supports (scrollbar-width: thin) {
  .scrollbar-thin {
    scrollbar-width: thin;
    scrollbar-color: rgba(156, 163, 175, 0.6) transparent;
  }
}

/* Classes utilitaires globales pour le body */
.overflow-hidden {
  overflow: hidden !important;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Amélioration focus pour accessibilité */
.focus\:ring-2:focus {
  box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.2);
}

/* Support ancien Safari */
@supports not (backdrop-filter: blur(10px)) {
  .backdrop-blur-sm {
    background: rgba(255, 255, 255, 0.85);
  }
}
</style>
