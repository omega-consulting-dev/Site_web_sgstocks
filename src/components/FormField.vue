
<!-- ========================================
     COMPOSANT 3: FormField.vue
     Composant réutilisable pour les champs
     ======================================== -->

<template>
  <div class="mb-6">
    <label class="block text-sm font-bold text-gray-800 mb-2">{{ label }}</label>
    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full px-4 py-2 border-b-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 focus:bg-white transition text-sm"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>