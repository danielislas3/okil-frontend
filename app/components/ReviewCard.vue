<template>
  <div 
    class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div class="flex items-center gap-4 mb-4">
      <img :src="avatar" :alt="name" class="w-12 h-12 rounded-full object-cover" />
      <div>
        <h4 class="font-semibold text-[#4A3425]">{{ name }}</h4>
        <p class="text-sm text-[#6B5D4F]">{{ date }}</p>
      </div>
      <div class="ml-auto flex gap-1">
        <Star 
          v-for="i in 5" 
          :key="i"
          :class="i <= rating ? 'text-yellow-400' : 'text-gray-300'"
          class="w-4 h-4"
        />
      </div>
    </div>
    <p class="text-[#6B5D4F]">{{ text }}</p>
  </div>
</template>

<script setup>
import { Star } from 'lucide-vue-next'

defineProps({
  name: String,
  date: String,
  text: String,
  avatar: String,
  rating: Number
})
</script>