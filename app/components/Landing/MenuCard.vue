<template>
  <div 
    class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
  >
    <div class="relative">
      <!-- Imagen -->
      <div class="relative h-52 overflow-hidden">
        <img 
          :src="image" 
          :alt="name" 
          class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <!-- Overlay con precio -->
        <div class="absolute top-0 right-0 bg-[#8B5E3C] text-white px-3 py-1 rounded-bl-lg font-bold">
          {{ price }}
        </div>
        <!-- Badges o etiquetas -->
        <div class="absolute top-2 left-2">
          <slot name="badge"></slot>
        </div>
      </div>
      
      <!-- Contenido -->
      <div class="p-5">
        <div class="flex justify-between items-start mb-2">
          <h4 class="font-bold text-[#4A3425] text-lg">{{ name }}</h4>
        </div>
        
        <p class="text-sm text-[#6B5D4F] mb-4 line-clamp-2">{{ description }}</p>
        
        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-4">
          <LandingBaseTag v-for="tag in tags" :key="tag">{{ tag }}</LandingBaseTag>
        </div>
        
        <!-- Botón de Ordenar -->
        <button 
          class="w-full px-4 py-2 bg-[#8B5E3C] text-white rounded-lg text-sm hover:bg-[#6B4E2C] transition-colors flex items-center justify-center gap-2 mt-2"
          @click="$emit('order')"
        >
          <ShoppingBag class="w-4 h-4" />
          {{ orderButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ShoppingBag } from 'lucide-vue-next'

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

defineEmits(['order'])
</script>