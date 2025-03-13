<template>
  <nav
    class="fixed left-0 right-0 top-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300"
    :class="{ 'py-2 shadow-md': scrolled, 'py-4': !scrolled }"
  >
    <div class="mx-auto max-w-7xl px-4">
      <div class="flex h-16 items-center justify-between">
        <NuxtLink
          :to="'/'"
          class="flex items-center"
        >
          <img
            src="/img/logo.webp"
            alt="Logo Okil"
            class="h-16 w-auto transition-all duration-300"
            :class="{ 'h-10': scrolled }"
          />
        </NuxtLink>

        <!-- Enlaces de navegación en desktop -->
        <div class="hidden items-center space-x-8 md:flex">
          <a
            v-for="(item, key) in translations.nav"
            :key="key"
            :href="getNavLink(key)"
            class="group relative font-medium text-[#4A3425] transition-colors hover:text-[#8B5E3C]"
          >
            {{ item }}
            <span
              class="absolute bottom-0 left-0 h-0.5 w-0 bg-[#8B5E3C] transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </div>

        <!-- Botón de contacto en desktop -->
        <div class="hidden md:block">
          <a
            href="#ubicacion"
            class="rounded-lg bg-[#8B5E3C] px-4 py-2 text-white shadow-md transition-colors hover:bg-[#6B4E2C]"
          >
            Contáctanos
          </a>
        </div>

        <button
          class="text-[#4A3425] focus:outline-none md:hidden"
          aria-label="Abrir menú"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <Menu
            v-if="!mobileMenuOpen"
            class="h-6 w-6"
          />
          <X
            v-else
            class="h-6 w-6"
          />
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
        class="border-t bg-white shadow-xl md:hidden"
      >
        <div class="space-y-3 px-4 py-4">
          <a
            v-for="(item, key) in translations.nav"
            :key="key"
            :href="getNavLink(key)"
            class="block rounded-lg px-4 py-2 text-[#4A3425] transition-all hover:bg-[#E8D9C5] hover:text-[#8B5E3C]"
            @click="mobileMenuOpen = false"
          >
            {{ item }}
          </a>
          <a
            href="#ubicacion"
            class="mt-4 block rounded-lg bg-[#8B5E3C] px-4 py-2 text-center text-white transition-colors hover:bg-[#6B4E2C]"
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

  const getNavLink = key => {
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
