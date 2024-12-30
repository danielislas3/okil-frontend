<template>
  <div class="bg-primary-bg min-h-screen py-12">
    <div class="max-w-4xl mx-auto px-4">
      <header class="text-center mb-8">
        <h1 class="text-4xl font-bold text-hero-text">{{ cafe.nombre }}</h1>
        <p class="text-lg text-secondary-text mt-2">{{ cafe.varietal }} - {{ cafe.region }}</p>
      </header>

      <div v-if="cafe.imagen" class="mb-8">
        <img :src="cafe.imagen" :alt="cafe.nombre" class="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-hero-text mb-6">Ficha Técnica</h2>
        <ul class="space-y-4">
          <li>
            <strong class="text-secondary-text">Altitud:</strong>
            <span>{{ cafe.altitud }}</span>
          </li>
          <li>
            <strong class="text-secondary-text">Proceso:</strong>
            <span>{{ cafe.proceso }}</span>
          </li>
          <li>
            <strong class="text-secondary-text">Notas de Cata:</strong>
            <span>{{ cafe.notas }}</span>
          </li>
          <li>
            <strong class="text-secondary-text">Tostado:</strong>
            <span>{{ cafe.tostado }}</span>
          </li>
          <li>
            <strong class="text-secondary-text">Fecha de Tostado:</strong>
            <span>{{ cafe.fechaTostado }}</span>
          </li>
          <li>
            <strong class="text-secondary-text">Recomendaciones:</strong>
            <span>{{ cafe.recomendaciones }}</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const cafes = [
  {
    id: 'cafe-bourbon',
    nombre: 'Bourbon Especial',
    varietal: 'Bourbon',
    region: 'Chiapas, México',
    altitud: '1200 - 1500 msnm',
    proceso: 'Lavado',
    notas: 'Chocolate, Frutos Rojos, Caramelo',
    tostado: 'Medio',
    fechaTostado: '15 Diciembre 2024',
    recomendaciones: 'Método V60, ratio 1:16',
    imagen: '/img/cafe-bourbon.jpg'
  },
  {
    id: 'cafe-gesha',
    nombre: 'Gesha Premium',
    varietal: 'Gesha',
    region: 'Oaxaca, México',
    altitud: '1800 msnm',
    proceso: 'Natural',
    notas: 'Jazmín, Durazno, Frutas Tropicales',
    tostado: 'Claro',
    fechaTostado: '10 Diciembre 2024',
    recomendaciones: 'Método Chemex, ratio 1:15',
    imagen: 'https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Bourbon-3.jpg?w=480&q=82&auto=format&fit=min&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1684915604&s=036836cf20eadf425926f7dbcf227704'
  }
];

// Capturar el ID desde la ruta
const route = useRoute();
const cafe = cafes.find((cafe) => cafe.id === route.params.id);

if (!cafe) {
  throw new Error('Café no encontrado');
}
</script>

<style>
</style>