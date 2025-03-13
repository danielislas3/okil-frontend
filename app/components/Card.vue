<template>
  <div
    class="bg-primary-light text-primary-dark transform rounded-lg p-6 shadow-lg transition duration-300 hover:scale-105"
    :data-aos="animation"
  >
    <h2 class="mb-2 text-xl font-bold">{{ title }}</h2>
    <p class="text-base">{{ content }}</p>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    animation: {
      type: String,
      default: 'fade-up'
    }
  })
</script>
