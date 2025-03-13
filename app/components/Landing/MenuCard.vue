<template>
  <div
    class="transform overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div class="relative">
      <!-- Imagen -->
      <div class="relative h-52 overflow-hidden">
        <img
          :src="image"
          :alt="name"
          class="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <!-- Overlay con precio -->
        <div class="absolute right-0 top-0 rounded-bl-lg bg-[#8B5E3C] px-3 py-1 font-bold text-white">
          {{ price }}
        </div>
        <!-- Badges o etiquetas -->
        <div class="absolute left-2 top-2">
          <slot name="badge"></slot>
        </div>
      </div>

      <!-- Contenido -->
      <div class="p-5">
        <div class="mb-2 flex items-start justify-between">
          <h4 class="text-lg font-bold text-[#4A3425]">{{ name }}</h4>
        </div>

        <p class="mb-4 line-clamp-2 text-sm text-[#6B5D4F]">
          {{ description }}
        </p>

        <!-- Tags -->
        <div class="mb-4 flex flex-wrap gap-2">
          <LandingBaseTag
            v-for="tag in tags"
            :key="tag"
          >
            {{ tag }}
          </LandingBaseTag>
        </div>

        <!-- Botón de Ordenar -->
        <button
          class="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B5E3C] px-4 py-2 text-sm text-white transition-colors hover:bg-[#6B4E2C]"
          @click="$emit('order')"
        >
          <ShoppingBag class="h-4 w-4" />
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
