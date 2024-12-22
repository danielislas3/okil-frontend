<template>
  <div class="bg-primary-bg min-h-screen">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 transition-all duration-300"
      :class="{ 'shadow-md': scrolled }">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <h1 class="text-accent text-xl font-bold font-display">Okil</h1>
          <div class="hidden md:flex gap-6">
            <a v-for="(item, key) in translations.nav" :key="key" href="#"
              class="text-secondary-text hover:text-accent transition-colors">
              {{ item }}
            </a>
          </div>
          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-accent">
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <Transition enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-full opacity-0" enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in" leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-full opacity-0">
        <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t">
          <div class="px-4 py-2 space-y-1">
            <a v-for="(item, key) in translations.nav" :key="key" href="#"
              class="block py-2 text-secondary-text hover:text-accent transition-colors">
              {{ item }}
            </a>
          </div>
        </div>
      </Transition>
    </nav>

    <!-- Hero Section -->
    <section class="pt-24 max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-4xl md:text-5xl font-bold text-hero-text leading-tight mb-6">
            Bienvenido a Okil <br />
            Un nuevo comienzo en el café
          </h2>
          <div class="bg-accent p-4 rounded-lg inline-block text-white font-semibold">
            Descubre el mundo del café de especialidad con nosotros.
          </div>
        </div>
        <div class="relative h-[400px] rounded-xl overflow-hidden">
          <img src="/img/cofe.webp" alt="Taza de café artesanal" class="object-cover w-full h-full" />
        </div>
      </div>
    </section>

    <!-- Menu Preview -->
    <section class="max-w-7xl mx-auto px-4 py-12">
      <h3 class="text-2xl font-bold text-hero-text mb-8">Nuestro Menú</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <MenuCard v-for="item in menuItems" :key="item.name" v-bind="item" :orderButtonText="'Ordenar Ahora'"
          @order="handleOrder(item)">
          <template #badge v-if="item.badge">
            <span class="px-2 py-1 bg-accent text-white rounded-full text-xs">
              {{ item.badge }}
            </span>
          </template>
        </MenuCard>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-sm">
          <h3 class="text-2xl font-bold text-hero-text mb-6">Déjanos tu Opinión</h3>
          <form name="email-subscription" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="space-y-4" @submit.prevent="handleSubmit">
            <input type="hidden" name="form-name" value="email-subscription" />
            <div style="display:none;">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </div>
            <div>
              <label class="block text-sm text-secondary-text mb-2">Tu Nombre</label>
              <input type="text" v-model="review.name"
                class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm text-secondary-text mb-2">Tu Correo</label>
              <input type="email" v-model="review.email"
                class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm text-secondary-text mb-2">Tu Opinión</label>
              <textarea v-model="review.message" rows="4"
                class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"></textarea>
            </div>
            <button type="submit"
              class="px-6 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-colors">
              Enviar
            </button>
          </form>
        </div>
        <div class="space-y-4">
          <ReviewCard v-for="review in reviews" :key="review.id" v-bind="review" />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-footer-bg text-secondary-text mt-12 py-8">
      <div class="max-w-7xl mx-auto px-4">
        <h3 class="text-2xl font-bold mb-6">Contáctanos</h3>
        <div class="space-y-2">
          <p>Dirección: Calle del Café, Tecámac</p>
          <p>Horario: Lunes a Viernes, 7:00 AM - 9:00 PM</p>
          <p>Correo: <a href="mailto:okilcaffe@gmail.com" class="text-accent hover:underline">okilcaffe@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import MenuCard from '@/components/MenuCard.vue'
import ReviewCard from '@/components/ReviewCard.vue'
import translations from '@/locales/es'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const updateScroll = () => {
  scrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})

const menuItems = [
  {
    name: 'Cold Brew Bean Family',
    description: 'Suave y refrescante café cold brew',
    image: 'https://www.cocinadelirante.com/800x600/filters:format(webp):quality(75)/sites/default/files/images/2024/04/que-es-el-cold-brew.jpg?width=1600?height=200&width=200',
    tags: [translations.menu.categories.cold, translations.menu.categories.fresh],
    price: '$45.0',
    badge: 'Nuevo'
  },
  {
    name: 'Pumpkin Spice Latte',
    description: 'Favorito de otoño con calabaza real',
    image: 'https://www.savoryspiceshop.com/cdn/shop/files/PumpkinSpiceLatte_1050x700.jpg?v=1693930539?&width=1600?height=200&width=200',
    tags: [
      translations.menu.categories.hot,
      translations.menu.categories.sweet,
      translations.menu.categories.spicy
    ],
    price: '$50.0'
  },
  {
    name: 'Honey Latte',
    description: 'Mezcla reconfortante con miel local',
    image: 'https://fancifuleats.com/wp-content/uploads/2023/03/salted-honey-oat-milk-latte-4.jpg?height=200&width=200',
    tags: [translations.menu.categories.hot, translations.menu.categories.healthy],
    price: '$40.0'
  },
  {
    name: 'Classic Cappuccino',
    description: 'Perfecto balance de espresso y leche',
    image: 'https://sumatocoffee.com/cdn/shop/articles/latte-art-what-is-it-and-how-did-it-start-264833.jpg?v=1713277725&width=1600?height=200&width=200',
    tags: [translations.menu.categories.hot, translations.menu.categories.classic],
    price: '$35.0'
  }
]

const reviews = [
  {
    id: 1,
    name: 'María García',
    date: 'Hace 2 días',
    text: '¡Café increíble y ambiente maravilloso! El personal es muy amable.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg?height=40&width=40',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    date: 'Hace 1 semana',
    text: 'La mejor cafetería de la ciudad. ¡Me encantan sus bebidas de temporada!',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg?height=40&width=40',
    rating: 4
  }
]

const review = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Review submitted:', review.value)
  review.value = { name: '', email: '', message: '' }
}

// const handleSubmit = (item) => {
//   console.log('Ordering:', item)
//   // Implement order handling logic
// }
</script>