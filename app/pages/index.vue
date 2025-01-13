<template>
  <div class="bg-primary-bg min-h-screen">

    <NavBar />
    <!-- Hero Section -->
    <section class="pt-24 max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-4xl md:text-5xl font-bold text-hero-text leading-tight mb-6">
            Bienvenido a Okil <br />
            Donde comienza tu viaje por el café de especialidad
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
          <form name="email-subscription" method="POST" data-netlify="true" netlify-honeypot="bot-field"
            class="space-y-4" @submit.prevent="handleSubmit">
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
        <address class="not-italic space-y-2">
          <p>Dirección: 5 de Febrero 123, Tecámac Centro, Tecámac, CP 55740</p>
          <p>Horario: Lunes a Viernes, 7:00 AM - 9:00 PM</p>
          <p>Correo: <a href="mailto:okilcaffe@gmail.com" class="text-accent hover:underline">okilcaffe@gmail.com</a>
          </p>
        </address>
      </div>
    </footer>

  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MenuCard from '@/components/MenuCard.vue'
import ReviewCard from '@/components/ReviewCard.vue'

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
    name: 'Expreso',
    description: 'Intenso y aromático shot de café para los amantes del sabor puro.',
    image: 'https://www.elytienda.com/cdn/shop/products/cafe_expreso.jpg?v=1706491287',
    price: '$35.0',
    tags: ['Café Caliente', 'Clásico']
  },
  {
    name: 'Latte',
    description: 'Café suave con leche perfectamente espumada.',
    image: 'https://foxsteel.com.mx/wp-content/uploads/2024/07/Latte-cafe-1.jpg',
    price: '$50.0',
    tags: ['Café Caliente', 'Reconfortante']
  },
  {
    name: 'Flat White',
    description: 'Equilibrio perfecto entre espresso y leche sedosa.',
    image: 'https://methodicalcoffee.com/cdn/shop/articles/Flat_white_sitting_on_a_table.jpg?v=1695740372',
    price: '$45.0',
    tags: ['Café Caliente', 'Delicado']
  },
  {
    name: 'Capuchino',
    description: 'Clásica combinación de espresso y leche espumosa.',
    image: 'https://media.istockphoto.com/id/505168330/es/foto/taza-de-caf%C3%A9-con-granos-de-caf%C3%A9-con-leche-y-varillas-de-canela.jpg?s=612x612&w=0&k=20&c=ud_g_RyWoPSEJ4_KkpsQfFuWh3iVPlyiTHqpu69ayEg=',
    price: '$45.0',
    tags: ['Café Caliente', 'Espumoso']
  },
  {
    name: 'Honey Latte',
    description: 'Latte suave con un toque dulce de miel.',
    image: 'https://www.modernfarmhouseeats.com/wp-content/uploads/2021/12/hot-miel-13.jpg',
    price: '$55.0',
    tags: ['Café Caliente', 'Dulce']
  },
  {
    name: 'Matcha Latte',
    description: 'Delicioso y cremoso latte con té verde matcha.',
    image: 'https://www.launion.com.mx/media/k2/items/cache/d270ade611f15a0d053a4bb77975284b_M.jpg',
    price: '$60.0',
    tags: ['Té Caliente', 'Saludable']
  },
  {
    name: 'Chai Latte',
    description: 'Exótica mezcla de té chai con especias y leche.',
    image: 'https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/vanilla-chai-latte.jpg',
    price: '$60.0',
    tags: ['Té Caliente', 'Especiado']
  },
  {
    name: 'Dirty Chai',
    description: 'Chai Latte chai con un toque de espresso para mayor intensidad.',
    image: 'https://cookhousediary.com/wp-content/uploads/2023/12/dirty-chai-latte.jpg',
    price: '$65.0',
    tags: ['Té Caliente', 'Intenso']
  },
  {
    name: 'Chocolate',
    description: 'Clásico chocolate caliente con leche espumosa.',
    image: 'https://supercafeteros.com/wp-content/uploads/2021/11/cafe-caliente-con-nubes.jpg',
    price: '$55.0',
    tags: ['Caliente', 'Dulce']
  },
  {
    name: 'Mocha',
    description: 'Deliciosa combinación de espresso, chocolate y leche.',
    image: 'https://shottbeverages.com/wp-content/uploads/2020/09/classic-mocha.jpg',
    price: '$60.0',
    tags: ['Café Caliente', 'Dulce']
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