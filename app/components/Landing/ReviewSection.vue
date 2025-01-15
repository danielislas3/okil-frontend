<template>
  <section class="max-w-7xl mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Formulario de opinión -->
      <div class="bg-white p-6 rounded-xl shadow-sm">
        <h3 class="text-2xl font-bold text-hero-text mb-6">Déjanos tu Opinión</h3>
        <form name="review-form" method="POST" action="/success" data-netlify="true" netlify-honeypot="bot-field"
          class="space-y-4">
          <input type="hidden" name="form-name" value="review-form" />

          <div style="display:none;">
            <label>No llenar este campo: <input name="bot-field" /></label>
          </div>

          <div>
            <label class="block text-sm text-secondary-text mb-2">Tu Nombre</label>
            <input type="text" name="name" v-model="review.name"
              class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" required />
          </div>

          <div>
            <label class="block text-sm text-secondary-text mb-2">Tu Correo</label>
            <input type="email" name="email" v-model="review.email"
              class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" required />
          </div>

          <div>
            <label class="block text-sm text-secondary-text mb-2">Tu Opinión</label>
            <textarea name="message" v-model="review.message" rows="4"
              class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              required></textarea>
          </div>

          <button type="submit" class="px-6 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-colors">
            Enviar
          </button>
        </form>
      </div>

      <div class="space-y-4">
        <ReviewCard v-for="review in reviews" :key="review.id" v-bind="review" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const review = ref({
  name: '',
  email: '',
  message: ''
})

const reviews = [
  {
    id: 1,
    name: 'María García',
    date: 'Hace 2 días',
    text: '¡Café increíble y ambiente maravilloso! El personal es muy amable.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    date: 'Hace 1 semana',
    text: 'La mejor cafetería de la ciudad. ¡Me encantan sus bebidas de temporada!',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    rating: 4
  }
]
</script>