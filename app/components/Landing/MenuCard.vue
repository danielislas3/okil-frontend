<template>
  <div 
    class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
  >
    <div class="relative h-48 mb-4 overflow-hidden rounded-lg">
      <img 
        :src="image" 
        :alt="name" 
        class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
      />
      <div class="absolute top-2 right-2">
        <slot name="badge"></slot>
      </div>
    </div>
    <h4 class="font-semibold text-[#4A3425] text-lg mb-2">{{ name }}</h4>
    <p class="text-sm text-[#6B5D4F] mb-4">{{ description }}</p>
    <div class="flex gap-2 flex-wrap mb-4">
      <LandingBaseTag v-for="tag in tags" :key="tag">{{ tag }}</LandingBaseTag>
    </div>
    <div class="flex justify-between items-center">
      <span class="font-bold text-[#8B5E3C]">{{ price }}</span>
      <button 
        class="px-4 py-2 bg-[#8B5E3C] text-white rounded-full text-sm hover:bg-[#6B4E2C] transition-colors flex items-center gap-2"
        @click="$emit('order')"
      >
        <ShoppingBag class="w-4 h-4" />
        {{ orderButtonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ShoppingBag } from 'lucide-vue-next'
import BaseTag from './BaseTag.vue'

defineProps({
  name: String,
  description: String,
  image: String,
  tags: Array,
  price: String,
  orderButtonText: {
    type: String,
    default: 'Ordenar'
  }
})
</script>