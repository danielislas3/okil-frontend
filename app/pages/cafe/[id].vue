<template>
  <div class="bg-primary-bg min-h-screen flex flex-col">
    <NavBar />

    <main class="flex-grow">
      <section class="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <!-- Encabezado principal -->
        <div class="text-center space-y-2 py-6 bg-white shadow-md rounded-lg" data-aos="fade-up">
          <h1 class="text-4xl font-bold text-primary">{{ coffee.name }}</h1>
          <p class="text-lg text-secondary">
            Finca: <span class="font-semibold bg-primary-light text-primary-dark px-2 py-1 rounded-md">{{ coffee.finca }}</span>
          </p>
          <p class="text-sm text-secondary-light italic">
            Altitud: {{ coffee.altitud }} | Fecha de tostado: {{ coffee.fechaTostado }}
          </p>
        </div>

        <!-- Imagen destacada -->
        <div class="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden shadow-lg" data-aos="zoom-in">
          <img
            :src="coffee.image"
            alt="Imagen del café"
            class="object-cover w-full h-full"
          />
        </div>

        <!-- Características principales -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Productor" :content="coffee.productor" />
          <Card title="Variedad" :content="coffee.variedad" />
          <Card title="Método" :content="coffee.metodo" />
        </div>

        <!-- Notas de cata y perfil en taza -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DynamicCard
            title="Notas de Cata"
            :content="coffee.notasDeCata"
            animation="fade-right"
          />
          <DynamicCard
            title="Perfil en Taza"
            :content="coffee.perfilEnTaza"
            animation="fade-left"
          />
        </div>

        <!-- Puntuación SCA -->
        <div
          class="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white rounded-lg p-6 shadow-lg"
          data-aos="zoom-in"
        >
          <h2 class="text-2xl font-bold mb-2">Puntuación SCA</h2>
          <p class="text-lg font-semibold">{{ coffee.puntuacionSCA }}</p>
        </div>

        <!-- Tabla de precios -->
        <div class="bg-white shadow-lg rounded-lg p-6">
          <h2 class="text-xl font-bold text-primary mb-4">Precios</h2>
          <table class="w-full border-collapse border border-gray-300 text-left">
            <thead class="bg-primary-light text-primary-dark">
              <tr>
                <th class="border px-4 py-2">Cantidad</th>
                <th class="border px-4 py-2">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr class="even:bg-gray-100 hover:bg-gray-200">
                <td class="border px-4 py-2">250g</td>
                <td class="border px-4 py-2">{{ coffee.precios[0] }}</td>
              </tr>
              <tr class="even:bg-gray-100 hover:bg-gray-200">
                <td class="border px-4 py-2">500g</td>
                <td class="border px-4 py-2">{{ coffee.precios[1] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>

    <LandingFooter />
  </div>
</template>

<script setup>


const route = useRoute()
const query = route.query

const coffee = {
  name: query.name || "Café Especial",
  productor: query.productor || "Adán Hernández",
  finca: query.finca || "El Guayabital",
  altitud: query.altitud || "1000 msnm",
  variedad: query.variedad || "Bourbon, Typica, Sarchimor",
  metodo:
    query.metodo ||
    "Fermentación colombiana, Honey rojo (15 días), Honey negro (26 días)",
  notasDeCata:
    query.notasDeCata ||
    "Dulzura balanceada, acidez cítrica suave, notas achocolatadas",
  perfilEnTaza:
    query.perfilEnTaza || "Cuerpo medio, dulce y vibrante",
  puntuacionSCA: query.puntuacionSCA || "85 pts",
  precios: [query.precio250 || "$180", query.precio500 || "$300"],
  fechaTostado: query.fechaTostado || "2025-01-01",
  image:
    query.image ||
    "https://tse1.mm.bing.net/th?id=OIP.5EOwpJv34aS95PbRRhXcwgHaE8&pid=Api",
}
</script>