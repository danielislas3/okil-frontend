<template>
  <div :class="['min-h-screen flex flex-col transition-colors duration-300',
    isDarkMode ? 'bg-primary-bg text-primary-text' : 'bg-primary-bg text-primary-text']">

    <header class="p-4 bg-header-bg text-primary-text flex justify-between items-center shadow-md">
      <h1 class="text-2xl sm:text-3xl font-bold title">Okil</h1>
      <!-- <button @click="toggleDarkMode" class="p-2 rounded-full hover:bg-opacity-75 transition">
        <span v-if="isDarkMode">🌞</span>
        <span v-else>🌙</span>
      </button> -->
    </header>


    <main class="flex-grow flex flex-col items-center justify-center p-6 text-center">
      <div class="w-full max-w-2xl mx-auto">

        <h2 class="text-3xl sm:text-5xl font-extrabold mb-6 text-hero-text">
          Un nuevo comienzo en el café
        </h2>
        <p class="text-lg sm:text-xl mb-8 text-secondary-text">
          Estamos preparando el mejor café y también nuestra página web.
          <br>
          <span class="text-sm italic">*Advertencia: Puede causar niveles de energía inusualmente altos.</span>
        </p>

        <Vue3Lottie :animationLink="lottieAnimationUrl" background="transparent" :speed="1" loop autoplay :height="300"
          :width="300" aria-label="Animación ilustrativa del café en Okil"></Vue3Lottie>

        <div
          class="bg-secondary-bg text-secondary-text rounded-md p-4 mb-8 w-full max-w-full overflow-auto shadow-inner">
          <pre class="text-left text-xs sm:text-sm font-mono leading-snug">
        <span v-html="animatedMessage"></span>
          </pre>
        </div>

        <form name="email-subscription" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="mb-8"
  @submit.prevent="handleSubmit">
  <input type="hidden" name="form-name" value="email-subscription" />
  <div style="display:none;">
    <label>Don't fill this out: <input name="bot-field" /></label>
  </div>

  <div class="flex flex-col sm:flex-row gap-4">
    <input v-model="email" type="email" name="email" placeholder="Escribe tu correo, el resto lo hace el café ☕🎩" required :class="['flex-grow px-4 py-3 rounded-md border focus:outline-none focus:ring-2',
      'bg-primary-bg text-primary-text border-secondary-text focus:ring-accent']" />
    <button type="submit"
      class="px-6 py-3 rounded-md transition duration-300 font-semibold shadow-md bg-accent text-white hover:opacity-90">
      Descubre Nuestro Café
    </button>
  </div>
</form>



        <p class="mt-8 text-sm text-secondary-text">
          Nuestro espresso ya está listo, nuestra web casi lista.
        </p>
      </div>
    </main>

    <footer class="p-4 text-center text-sm bg-footer-bg text-secondary-text">
      <p>&copy; {{ new Date().getFullYear() }} Okil café de especialidad. Todos los derechos reservados.</p>
      <p class="mt-2 italic">El exceso de café puede resultar en ideas brillantes a las 3 AM.</p>

      <!-- Información de contacto -->
      <div class="mt-4">
        <p class="mb-2">Contáctanos: <a href="mailto:contacto@gmail.com"
            class="text-accent hover:underline">contacto@gmail.com</a></p>
        <div class="flex justify-center gap-4">
          Redes sociales
          <!-- <a href="https://instagram.com/okil.cafe" target="_blank" rel="noopener" aria-label="Instagram">
        <img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Instagram_icon-icons.com_66804.png" alt="Instagram" class="w-6 h-6">
      </a> -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>

useHead({
  title: 'Okil - café de especialidad',
  meta: [
    {
      name: 'description',
      content: 'Okil es el lugar donde inicia tu viaje en el café de especialidad. Aprende, disfruta y explora el mejor café con nosotros.'
    },
    {
      name: 'keywords', content: 'café de especialidad, café artesanal, okil, baristas, tostado artesanal, café mexicano, café orgánico, cafetería en Tecámac, brewing, métodos pour-over, café de calidad, cultura del café, mejor café en Tecámac, café fresco, café de origen'
    },
    { property: 'og:title', content: 'Okil - Un nuevo comienzo en el café' },
    { property: 'og:description', content: 'Estamos preparando el mejor café y también nuestra página web.' },
    { property: 'og:image', content: '/path-to-image.jpg' },
    // { property: 'og:url', content: 'https://okilcafe.mx' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Okil - Un nuevo comienzo en el café' },
    { name: 'twitter:description', content: 'Okil es tu puerta de entrada al café de especialidad.' },
    // { name: 'twitter:image', content: '/path-to-image.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://okilcafe.mx' },
    { rel: 'icon', href: '/favicon.ico' }
  ]
})

const email = ref('')
const isDarkMode = ref(false)
const lottieAnimationUrl = "https://lottie.host/b797d241-f4f9-41e0-b899-7d6654ed2d5d/V2ooR5SIRG.json"

const messages = [
  '> Estableciendo conexión con el servidor de café...',
  '> HTTP 418: ¡Soy una cafetera! Espera, ¿no era una tetera?',
  '> Configurando perfiles de sabor personalizados...',
  '> Seleccionando los mejores granos... ¡100% arábica garantizada!',
  '> Ajustando la temperatura óptima de extracción...',
  '> ¡Listo! Tu experiencia cafetera está en proceso...'
]

const animatedMessage = ref('')
let messageIndex = 0

onMounted(() => {
  showNextMessage()
})

const showNextMessage = () => {
  if (messageIndex < messages.length) {
    typeMessage(messages[messageIndex], 0, () => {
      messageIndex++
      setTimeout(showNextMessage, 1000)
    })
  }
}

const typeMessage = (message, charIndex, callback) => {
  if (charIndex < message.length) {
    animatedMessage.value += message.charAt(charIndex)
    setTimeout(() => {
      typeMessage(message, charIndex + 1, callback)
    }, 50)
  } else {
    animatedMessage.value += '\n'
    callback()
  }
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(e.target)).toString()
    })
    showCustomMessage(
      '¡Gracias por suscribirte!',
      'Pronto recibirás nuestras actualizaciones. Tu taza de café está casi lista...'
    )
    email.value = ''
  } catch (error) {
    showCustomMessage(
      'Oops, algo salió mal...',
      'Parece que nuestro barista digital tuvo un problema. ¡Inténtalo nuevamente más tarde!',
      true
    )
  }
}

const showCustomMessage = (title, message, isError = false) => {
  const messageContainer = document.createElement('div')
  messageContainer.className = `fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded-md shadow-md ${
    isError ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
  }`
  messageContainer.innerHTML = `
    <strong class="block text-lg">${title}</strong>
    <p class="text-sm">${message}</p>
  `
  document.body.appendChild(messageContainer)
  setTimeout(() => {
    messageContainer.classList.add('opacity-0')
    setTimeout(() => messageContainer.remove(), 300)
  }, 5000)
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.title {
  font-family: 'Adver Gothic Regular', sans-serif;
}

:root {
  /* Paleta de colores con nombres semánticos */
  --primary-bg: #fdfbf8;
  /* Fondo principal */
  --secondary-bg: #efece9;
  /* Fondo secundario */
  --primary-text: #3e3e3e;
  /* Texto principal */
  --secondary-text: #6e6e6e;
  /* Texto secundario */
  --accent: #3c2806;
  /* Color de acento para botones o elementos clave */
  --header-bg: #A36F4E;
  /* Fondo del header principal */
  --hero-text: #3e3e3e;
  /* Texto del hero */
  --footer-bg: #f5f2e7;
  /* Fondo del footer */
}

.bg-primary-bg {
  background-color: var(--primary-bg);
}

.bg-secondary-bg {
  background-color: var(--secondary-bg);
}

.bg-header-bg {
  background-color: var(--header-bg);
}

.bg-footer-bg {
  background-color: var(--footer-bg);
}

.text-primary-text {
  color: var(--primary-text);
}

.text-secondary-text {
  color: var(--secondary-text);
}

.text-hero-text {
  color: var(--hero-text);
}

.bg-accent {
  background-color: var(--accent);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:active {
  transform: translateY(0);
  box-shadow: none;
}
</style>