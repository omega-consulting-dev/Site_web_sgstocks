<template>
    <div class="fixed bottom-3 right-3 z-50">

        <!-- Bouton flottant -->
        <button v-if="!isOpen" @click="toggleChat"
            class="group relative bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
            style="box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);">
            <!-- Icône Chat -->
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>

            <!-- Badge notification -->
            <span
                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                2
            </span>

            <!-- Effet d'onde au hover -->
            <span
                class="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity"></span>
        </button>

        <!-- Fenêtre Chat - Style Kodee -->
        <transition enter-active-class="transition-all duration-300" enter-from-class="opacity-0 translate-y-4"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-200"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-4">
            <div v-if="isOpen"
                class="absolute bottom-2 right-0 w-[440px] h-[700px] bg-white rounded-3xl shadow-2xl overflow-hidden">

                <!-- Header Premium -->
                <div
                    class="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 p-6 text-white overflow-hidden">
                    <!-- Pattern background -->
                    <div class="absolute inset-0 opacity-10">
                        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    <div class="relative flex items-start justify-between">
                        <div class="flex items-start gap-4">
                            <!-- Avatar -->
                            <div class="relative">
                                <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div
                                    class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full">
                                </div>
                            </div>

                            <div>
                                <h3 class="font-bold text-lg mb-1">Assistant SG-Stock</h3>
                                <div class="flex items-center gap-2 text-sm">
                                    <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span class="text-white/90">Toujours disponible</span>
                                </div>
                            </div>
                        </div>

                        <!-- Boutons actions -->
                        <div class="flex gap-2">
                            <button
                                class="w-9 h-9 flex items-center justify-center hover:bg-white/20 rounded-xl transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <button @click="toggleChat"
                                class="w-9 h-9 flex items-center justify-center hover:bg-white/20 rounded-xl transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Messages Container -->
                <div ref="chatContainer"
                    class="h-[480px] overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white"
                    style="scrollbar-width: thin; scrollbar-color: #d1d5db transparent;">

                    <!-- Messages -->
                    <div v-for="message in messages" :key="message.id" class="flex gap-3 animate-fadeIn"
                        :class="message.type === 'user' ? 'justify-end' : ''">

                        <!-- Bot Message -->
                        <template v-if="message.type === 'bot'">
                            <div class="flex-shrink-0">
                                <div
                                    class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                            </div>

                            <div class="flex-1 space-y-3">
                                <div class="bg-white rounded-2xl rounded-tl-md p-5 shadow-lg border border-gray-100">
                                    <p class="text-gray-800 leading-relaxed" v-html="message.content.text"></p>
                                    <p v-if="message.content.subtext" class="text-gray-600 mt-2 text-sm">
                                        {{ message.content.subtext }}
                                    </p>

                                    <!-- Catégories -->
                                    <div v-if="message.content.showCategories" class="grid grid-cols-2 gap-3 mt-4">
                                        <button v-for="category in categories" :key="category.id"
                                            @click="selectCategory(category)"
                                            class="suggestion-card p-4 rounded-xl text-left transition-all hover:-translate-y-0.5"
                                            :class="[
                                                `bg-gradient-to-br ${category.gradient}`,
                                                `hover:${category.hoverGradient}`,
                                                `border ${category.border}`
                                            ]">
                                            <div class="text-2xl mb-2">{{ category.emoji }}</div>
                                            <div class="text-sm font-semibold text-gray-800">{{ category.title }}</div>
                                            <div class="text-xs text-gray-600 mt-1">{{ category.subtitle }}</div>
                                        </button>
                                    </div>

                                    <!-- Réponse structurée -->
                                    <div v-if="message.content.title" class="space-y-3">
                                        <p class="text-gray-800 font-medium">{{ message.content.title }}</p>

                                        <div class="space-y-3 text-sm text-gray-700">
                                            <div v-for="item in message.content.content" :key="item.step"
                                                class="flex gap-2">
                                                <span class="text-blue-600 font-bold">{{ item.step }}.</span>
                                                <span>{{ item.text }}</span>
                                            </div>
                                        </div>

                                        <div v-if="message.content.cta"
                                            class="mt-4 p-3 bg-blue-50 rounded-xl border border-blue-100">
                                            <p class="text-sm text-blue-800"><strong>{{ message.content.cta.title
                                                    }}</strong></p>
                                            <button class="mt-2 text-sm text-blue-600 font-semibold hover:underline">
                                                → {{ message.content.cta.action }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-xs text-gray-400">{{ formatTime(message.timestamp) }}</div>
                            </div>
                        </template>

                        <!-- User Message -->
                        <template v-else>
                            <div class="flex-1 flex flex-col items-end space-y-2">
                                <div
                                    class="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl rounded-tr-md p-4 shadow-lg max-w-[85%]">
                                    <p>{{ message.content.text }}</p>
                                </div>
                                <div class="text-xs text-gray-400">{{ formatTime(message.timestamp) }}</div>
                            </div>

                            <div class="flex-shrink-0">
                                <div
                                    class="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-sm">
                                    U
                                </div>
                            </div>
                        </template>
                    </div>

                    <!-- Typing Indicator -->
                    <div v-if="isTyping" class="flex gap-3 animate-fadeIn">
                        <div class="flex-shrink-0">
                            <div
                                class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                        </div>

                        <div class="bg-white rounded-2xl rounded-tl-md p-5 shadow-lg border border-gray-100">
                            <div class="flex gap-1.5">
                                <span class="w-2 h-2 bg-blue-600 rounded-full animate-pulse"
                                    style="animation-delay: 0ms;"></span>
                                <span class="w-2 h-2 bg-blue-600 rounded-full animate-pulse"
                                    style="animation-delay: 200ms;"></span>
                                <span class="w-2 h-2 bg-blue-600 rounded-full animate-pulse"
                                    style="animation-delay: 400ms;"></span>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Input Area -->
                <div class="border-t border-gray-200 bg-white p-4">
                    <!-- Quick Actions -->
                    <div class="flex gap-2 mb-3 overflow-x-auto pb-2" style="scrollbar-width: none;">
                        <button v-for="action in quickActions" :key="action.action"
                            @click="handleQuickAction(action.action)"
                            class="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium whitespace-nowrap transition-colors">
                            <span>{{ action.emoji }}</span>
                            {{ action.text }}
                        </button>
                    </div>

                    <!-- Input -->
                    <form @submit.prevent="sendMessage" class="flex gap-3 items-end">
                        <div class="flex-1 relative">
                            <textarea ref="textareaRef" v-model="userInput" @input="autoResize"
                                @keydown.enter.exact.prevent="sendMessage" rows="1"
                                placeholder="Posez votre question..."
                                class="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 resize-none text-sm transition-colors"
                                style="max-height: 120px;"></textarea>

                            <!-- Emoji Button -->
                            <button type="button"
                                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>

                        <!-- Send Button -->
                        <button type="submit" :disabled="!userInput.trim()"
                            class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white rounded-2xl flex items-center justify-center transition-all hover:scale-105 shadow-lg"
                            style="box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </form>

                    <!-- Footer -->
                    <div class="mt-3 flex items-center justify-center gap-1 text-xs text-gray-500">
                        <span>Propulsé par</span>
                        <strong class="text-blue-600 font-semibold">SG-Stock AI</strong>
                        <svg class="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                </div>

            </div>
        </transition>

    </div>
</template>
<script setup>
import { ref, computed, nextTick, onMounted } from 'vue'

// États
const isOpen = ref(false)
const messages = ref([])
const userInput = ref('')
const isTyping = ref(false)
const chatContainer = ref(null)
const textareaRef = ref(null)

// Catégories avec style Kodee
const categories = [
    {
        id: 'connexion',
        emoji: '🔐',
        title: 'Connexion',
        subtitle: "Problèmes d'accès",
        gradient: 'from-blue-50 to-blue-100',
        hoverGradient: 'from-blue-100 to-blue-200',
        border: 'border-blue-200',
        keywords: ['connexion', 'login', 'mot de passe', 'connecter']
    },
    {
        id: 'packs',
        emoji: '📦',
        title: 'Packs',
        subtitle: 'Souscrire',
        gradient: 'from-purple-50 to-purple-100',
        hoverGradient: 'from-purple-100 to-purple-200',
        border: 'border-purple-200',
        keywords: ['pack', 'abonnement', 'souscrire', 'tarif']
    },
    {
        id: 'paiements',
        emoji: '💳',
        title: 'Paiements',
        subtitle: 'Facturation',
        gradient: 'from-green-50 to-green-100',
        hoverGradient: 'from-green-100 to-green-200',
        border: 'border-green-200',
        keywords: ['paiement', 'facture', 'mobile money']
    },
    {
        id: 'aide',
        emoji: '❓',
        title: 'Aide',
        subtitle: 'Utilisation',
        gradient: 'from-orange-50 to-orange-100',
        hoverGradient: 'from-orange-100 to-orange-200',
        border: 'border-orange-200',
        keywords: ['aide', 'utilisation', 'comment']
    }
]

// Quick actions
const quickActions = [
    { emoji: '🔑', text: 'Mot de passe oublié', action: 'reset_password' },
    { emoji: '📞', text: 'Contacter support', action: 'contact_support' },
    { emoji: '📚', text: 'Documentation', action: 'docs' }
]

// Réponses prédéfinies
const responses = {
    connexion: {
        title: "Je comprends, voici comment résoudre ça 💡",
        content: [
            { step: '1', text: 'Vérifiez votre email et mot de passe' },
            { step: '2', text: 'Cliquez sur "Mot de passe oublié" si besoin' },
            { step: '3', text: 'Attendez 15 min si compte bloqué' }
        ],
        cta: {
            title: 'Besoin d\'aide immédiate ?',
            action: 'Contacter le support'
        }
    },
    packs: {
        title: "Voici nos packs disponibles 📦",
        content: [
            { step: '1', text: 'Pack Démarrage : 15 000 FCFA/mois' },
            { step: '2', text: 'Pack Professionnel : 40 000 FCFA/mois' },
            { step: '3', text: 'Pack Avancé : 60 000 FCFA/mois' }
        ],
        cta: {
            title: 'Essai gratuit de 14 jours !',
            action: 'Démarrer l\'essai'
        }
    },
    paiements: {
        title: "Nos modes de paiement 💳",
        content: [
            { step: '1', text: 'Orange Money, MTN, Moov' },
            { step: '2', text: 'Carte bancaire (Visa, Mastercard)' },
            { step: '3', text: 'Virement bancaire (packs annuels)' }
        ],
        cta: {
            title: 'Paiement 100% sécurisé',
            action: 'Voir les détails'
        }
    },
    default: {
        title: "Je suis là pour vous aider ! 🤝",
        content: [
            { step: '1', text: 'Choisissez une catégorie ci-dessus' },
            { step: '2', text: 'Ou posez votre question directement' },
            { step: '3', text: 'Je vous réponds en quelques secondes' }
        ],
        cta: {
            title: 'Besoin d\'un conseiller ?',
            action: 'Chat en direct'
        }
    }
}

// Initialisation
onMounted(() => {
    addWelcomeMessage()
})

// Fonctions
const toggleChat = () => {
    isOpen.value = !isOpen.value
    if (isOpen.value) {
        nextTick(() => {
            scrollToBottom()
        })
    }
}

const addWelcomeMessage = () => {
    messages.value.push({
        id: Date.now(),
        type: 'bot',
        content: {
            text: "👋 Bonjour ! Je suis votre <strong>assistant intelligent SG-Stock</strong>.",
            subtext: "Je peux vous aider avec vos questions sur la connexion, les packs, la facturation et bien plus encore.",
            showCategories: true
        },
        timestamp: new Date()
    })
}

const selectCategory = (category) => {
    addUserMessage(`${category.emoji} ${category.title}`)

    setTimeout(() => {
        const response = responses[category.id] || responses.default
        addBotResponse(response)
    }, 1000)
}

const addUserMessage = (text) => {
    messages.value.push({
        id: Date.now(),
        type: 'user',
        content: { text },
        timestamp: new Date()
    })

    nextTick(scrollToBottom)
}

const addBotResponse = (response) => {
    isTyping.value = true

    setTimeout(() => {
        isTyping.value = false
        messages.value.push({
            id: Date.now(),
            type: 'bot',
            content: response,
            timestamp: new Date()
        })
        nextTick(scrollToBottom)
    }, 1500)
}

const sendMessage = () => {
    const text = userInput.value.trim()
    if (!text) return

    addUserMessage(text)
    userInput.value = ''

    // Détection simple par mots-clés
    const lowerText = text.toLowerCase()
    let matchedCategory = null

    for (const cat of categories) {
        if (cat.keywords.some(keyword => lowerText.includes(keyword))) {
            matchedCategory = cat
            break
        }
    }

    const response = matchedCategory
        ? responses[matchedCategory.id]
        : responses.default

    addBotResponse(response)

    // Reset textarea height
    if (textareaRef.value) {
        textareaRef.value.style.height = 'auto'
    }
}

const handleQuickAction = (action) => {
    const actionTexts = {
        reset_password: 'Réinitialiser mon mot de passe',
        contact_support: 'Contacter le support',
        docs: 'Voir la documentation'
    }

    addUserMessage(actionTexts[action] || action)

    setTimeout(() => {
        addBotResponse({
            title: "Je vous redirige... ✨",
            content: [
                { step: '✓', text: 'Ouverture en cours...' }
            ],
            cta: null
        })
    }, 800)
}

const scrollToBottom = () => {
    if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
}

const autoResize = (event) => {
    const textarea = event.target
    textarea.style.height = 'auto'
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'
}

const formatTime = (date) => {
    const now = new Date()
    const diff = Math.floor((now - date) / 1000)

    if (diff < 60) return 'À l\'instant'
    if (diff < 3600) return `Il y a ${Math.floor(diff / 60)} min`
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}
</script>
<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
}

.suggestion-card {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.suggestion-card:hover {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Scrollbar personnalisée pour Webkit */
::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
}
</style>