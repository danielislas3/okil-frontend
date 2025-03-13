<template>
  <div class="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
    <div class="mb-4 flex items-center gap-4">
      <img
        :src="avatar"
        :alt="name"
        class="h-12 w-12 rounded-full object-cover"
      />
      <div>
        <h4 class="font-semibold text-[#4A3425]">{{ name }}</h4>
        <p class="text-sm text-[#6B5D4F]">{{ date }}</p>
      </div>
      <div class="ml-auto flex gap-1">
        <Star
          v-for="i in 5"
          :key="i"
          :class="i <= rating ? 'text-yellow-400' : 'text-gray-300'"
          class="h-4 w-4"
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
