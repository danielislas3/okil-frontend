<template>
  <div
    class="bg-primary-light text-primary-dark shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300"
    :data-aos="animation"
  >
    <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
    <p class="text-base">{{ content }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  animation: {
    type: String,
    default: "fade-up",
  },
})
</script>