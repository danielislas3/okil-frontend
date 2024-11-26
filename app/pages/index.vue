<template>
  <div
    :class="['min-h-screen flex flex-col transition-colors duration-300', isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-beige text-gray-900']">
    <header class="p-4 bg-coffee-brown text-cream flex justify-between items-center">
      <h1 class="text-2xl font-bold">Okil Coffee</h1>
      <button @click="toggleDarkMode" class="p-2 rounded-full hover:bg-dark-brown transition-colors duration-300">
        <span v-if="isDarkMode">🌞</span>
        <span v-else>🌙</span>
      </button>
    </header>

    <main class="flex-grow flex flex-col items-center justify-center p-4 text-center">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-4xl font-bold mb-4" :class="isDarkMode ? 'text-cream' : 'text-dark-brown'">Un nuevo comienzo en
          el café</h2>
        <p class="text-xl mb-8" :class="isDarkMode ? 'text-gray-300' : 'text-coffee-brown'">Estamos preparando el mejor
          café y también nuestra página web.</p>

        <div class="mb-8 w-64 h-64 mx-auto">
          <Vue3Lottie animationLink="https://lottie.host/8b07b028-d876-4b79-ad17-128f5f19ff5a/tDNbgz5tWU.json"
            background="transparent" :speed="1" loop autoplay></Vue3Lottie>
        </div>

        <form @submit.prevent="handleSubmit" netlify name="email-subscription" class="mb-8">
          <input type="hidden" name="form-name" value="email-subscription" />
          <div class="flex flex-col sm:flex-row gap-2">
            <input v-model="email" type="email" name="email" placeholder="Tu correo electrónico" required
              :class="['flex-grow px-4 py-2 rounded-md border focus:outline-none focus:ring-2',
                isDarkMode ? 'bg-gray-800 text-gray-100 border-gray-600 focus:ring-gray-500' : 'bg-white text-gray-900 border-coffee-brown focus:ring-dark-brown']" />
            <button type="submit" :class="['px-6 py-2 rounded-md transition duration-300',
              isDarkMode ? 'bg-cream text-dark-brown hover:bg-gray-300' : 'bg-coffee-brown text-cream hover:bg-dark-brown']">
              Descubre Nuestro Café
            </button>
          </div>
        </form>

        <div
          :class="['p-4 rounded-md text-left font-mono text-sm mb-8 overflow-hidden', isDarkMode ? 'bg-gray-800' : 'bg-dark-brown text-cream']">
          <p v-for="(message, index) in consoleMessages" :key="index" class="typing-animation">
            {{ message }}
          </p>
        </div>

        <p :class="isDarkMode ? 'text-gray-300' : 'text-coffee-brown'">Nuestro espresso ya está listo, nuestra web casi
          lista.</p>
      </div>
    </main>

    <footer :class="['p-4 text-center', isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-dark-brown text-cream']">
      <p>&copy; {{ new Date().getFullYear() }} Okil Coffee. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const email = ref('')
const consoleMessages = ref([])
const isDarkMode = ref(false)

const messages = [
  '> Conectando al servidor de café...',
  '> HTTP 418: ¡Soy una tetera! Es broma, aquí todo es sobre café.',
  '> Inicializando perfiles de sabor...',
  '> Cargando granos de café... ¡100% arábica confirmada!',
  '> Optimizando la temperatura de extracción...',
  '> HTTP 418: Todavía no soy una tetera. ¡Tomamos nuestro café en serio!'
]

const handleSubmit = () => {
  // Simula el envío del formulario con Netlify
  alert('¡Gracias por suscribirte! Pronto recibirás noticias sobre nosotros.')
  email.value = ''
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

:root {
  --color-beige: #F5E6D3;
  --color-cream: #FFF8E7;
  --color-coffee-brown: #6F4E37;
  --color-dark-brown: #3A2618;
}

.bg-beige {
  background-color: var(--color-beige);
}

.bg-cream {
  background-color: var(--color-cream);
}

.bg-coffee-brown {
  background-color: var(--color-coffee-brown);
}

.bg-dark-brown {
  background-color: var(--color-dark-brown);
}

.text-cream {
  color: var(--color-cream);
}

.text-coffee-brown {
  color: var(--color-coffee-brown);
}

.text-dark-brown {
  color: var(--color-dark-brown);
}

.typing-animation {
  overflow: hidden;
  border-right: .15em solid currentColor;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: currentColor;
  }
}
</style>