<template>
  <div
    class="transform rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
    :data-aos="animation"
    :data-aos-delay="delay"
  >
    <h2 class="text-primary mb-4 text-xl font-bold">{{ title }}</h2>
    <p class="text-secondary leading-relaxed">
      {{ content }}
    </p>
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
    },
    delay: {
      type: Number,
      default: 0
    }
  })
</script>
