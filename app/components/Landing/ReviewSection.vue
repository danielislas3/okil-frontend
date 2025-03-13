<template>
  <section class="mx-auto max-w-7xl px-4 py-12">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <!-- Formulario de opinión -->
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <h3 class="mb-6 text-2xl font-bold text-hero-text">Déjanos tu Opinión</h3>
        <form
          name="review-form"
          method="POST"
          action="/success"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="space-y-4"
        >
          <input
            type="hidden"
            name="form-name"
            value="review-form"
          />

          <div style="display: none">
            <label>
              No llenar este campo:
              <input name="bot-field" />
            </label>
          </div>

          <div>
            <label class="mb-2 block text-sm text-secondary-text">Tu Nombre</label>
            <input
              v-model="review.name"
              type="text"
              name="name"
              class="w-full rounded-lg border p-2 focus:border-transparent focus:ring-2 focus:ring-accent"
              required
            />
          </div>

          <div>
            <label class="mb-2 block text-sm text-secondary-text">Tu Correo</label>
            <input
              v-model="review.email"
              type="email"
              name="email"
              class="w-full rounded-lg border p-2 focus:border-transparent focus:ring-2 focus:ring-accent"
              required
            />
          </div>

          <div>
            <label class="mb-2 block text-sm text-secondary-text">Tu Opinión</label>
            <textarea
              v-model="review.message"
              name="message"
              rows="4"
              class="w-full rounded-lg border p-2 focus:border-transparent focus:ring-2 focus:ring-accent"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="rounded-lg bg-accent px-6 py-2 text-white transition-colors hover:bg-opacity-90"
          >
            Enviar
          </button>
        </form>
      </div>

      <div class="space-y-4">
        <ReviewCard
          v-for="review in reviews"
          :key="review.id"
          v-bind="review"
        />
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
