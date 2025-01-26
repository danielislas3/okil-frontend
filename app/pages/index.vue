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
const config = useRuntimeConfig()


const activeFilters = ref({})

const updateFilters = (filters) => {
  activeFilters.value = filters
}

useHead({
  title: 'Okil | Café de Especialidad',
  meta: [
    {
      name: 'description',
      content: 'Descubre Okil, tu puerta al mundo del café de especialidad en México. Vive cada taza como una experiencia única.'
    },
    {
      property: 'og:title',
      content: 'Okil | Café de Especialidad'
    },
    {
      property: 'og:description',
      content: 'Explora sabores únicos y vive el arte del café de especialidad con Okil. El comienzo perfecto para cualquier amante del café.'
    },
    {
      property: 'og:image',
      content: `${config.public.appDomain}/img/image-og.webp`
    },
    {
      property: 'og:url',
      content: config.public.appDomain
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:title',
      content: 'Okil | Café de Especialidad'
    },
    {
      property: 'twitter:description',
      content: 'Tu inicio perfecto en el mundo del café de especialidad. Descubre Okil y vive cada taza como una experiencia única.'
    },
    {
      property: 'twitter:image',
      content:  `${config.public.appDomain}/img/image-og.webp`
    }
  ]
})

</script>