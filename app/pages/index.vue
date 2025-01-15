<template>
  <div class="bg-primary-bg min-h-screen">
    <NavBar />
    <LandingHeroSection />
    <section class="max-w-7xl mx-auto px-4 py-12">
      <h3 class="text-2xl font-bold text-hero-text mb-8">Nuestro Menú</h3>
      <LandingMenuFilter @filter-changed="updateFilters" />
      <LandingMenuList :filters="activeFilters" />
    </section>
    <LandingReviewSection />
    <LandingFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
// import HeroSection from '@/components/HeroSection.vue'
// import MenuFilter from '@/components/MenuFilter.vue'
// import MenuList from '@/components/MenuList.vue'
// import ReviewSection from '@/components/ReviewSection.vue'
// import Footer from '@/components/Footer.vue'

const activeFilters = ref({})

const updateFilters = (filters) => {
  activeFilters.value = filters
}
</script>