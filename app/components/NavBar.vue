<template>
  <nav 
    class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 transition-all duration-300"
    :class="{ 'shadow-md py-2': scrolled, 'py-4': !scrolled }"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <NuxtLink :to="'/'" class="flex items-center">
          <img src="/img/logo.webp" alt="Logo Okil" class="h-16 w-auto transition-all duration-300" :class="{'h-10': scrolled}">
        </NuxtLink>
        
        <!-- Enlaces de navegación en desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="(item, key) in translations.nav" 
            :key="key" 
            :href="getNavLink(key)"
            class="text-[#4A3425] hover:text-[#8B5E3C] transition-colors font-medium relative group"
          >
            {{ item }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B5E3C] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        <!-- Botón de contacto en desktop -->
        <div class="hidden md:block">
          <a 
            href="#ubicacion" 
            class="px-4 py-2 bg-[#8B5E3C] text-white rounded-lg hover:bg-[#6B4E2C] transition-colors shadow-md"
          >
            Contáctanos
          </a>
        </div>
        
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="md:hidden text-[#4A3425] focus:outline-none"
          aria-label="Abrir menú"
        >
          <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <Transition 
      enter-active-class="transition duration-300 ease-out" 
      enter-from-class="transform -translate-y-8 opacity-0" 
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in" 
      leave-from-class="transform translate-y-0 opacity-100" 
      leave-to-class="transform -translate-y-8 opacity-0"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden bg-white border-t shadow-xl"
      >
        <div class="px-4 py-4 space-y-3">
          <a 
            v-for="(item, key) in translations.nav" 
            :key="key" 
            :href="getNavLink(key)"
            class="block py-2 px-4 rounded-lg hover:bg-[#E8D9C5] text-[#4A3425] hover:text-[#8B5E3C] transition-all"
            @click="mobileMenuOpen = false"
          >
            {{ item }}
          </a>
          <a 
            href="#ubicacion" 
            class="block mt-4 px-4 py-2 bg-[#8B5E3C] text-white rounded-lg hover:bg-[#6B4E2C] transition-colors text-center"
            @click="mobileMenuOpen = false"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import translations from '@/locales/es'
import { Menu, X } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const getNavLink = (key) => {
  const links = {
    aboutUs: '#',
    menu: '#menu',
    company: '#',
    contacts: '#ubicacion'
  }
  return links[key] || '#'
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>