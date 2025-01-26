<template>
  <div
    class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transform transition-all duration-300"
    :data-aos="animation"
    :data-aos-delay="delay"
  >
    <h2 class="text-xl font-bold text-primary mb-4">{{ title }}</h2>
    <p class="text-secondary leading-relaxed">
      {{ content }}
    </p>
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
  delay: {
    type: Number,
    default: 0,
  },
})
</script>