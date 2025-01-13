<template>
  <!-- Navigation -->
  <nav class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 transition-all duration-300"
    :class="{ 'shadow-md': scrolled }">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- <h1 class="text-accent text-xl font-bold font-display">Okil</h1> -->
        <img src="/img/logo.png" alt="Logo" class="h-auto max-h-20">
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
</template>

<script setup>
import translations from '@/locales/es'
import { Menu, X } from 'lucide-vue-next'


const mobileMenuOpen = ref(false)


</script>

<style lang="scss" scoped></style>