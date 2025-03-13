<template>
  <div class="flex min-h-screen flex-col bg-primary-bg">
    <NavBar />

    <main class="flex-grow">
      <section class="mx-auto max-w-7xl space-y-12 px-4 py-12">
        <!-- Encabezado principal -->
        <div
          class="space-y-2 rounded-lg bg-white py-6 text-center shadow-md"
          data-aos="fade-up"
        >
          <h1 class="text-primary text-4xl font-bold">{{ coffee.name }}</h1>
          <p class="text-secondary text-lg">
            Finca:
            <span class="bg-primary-light text-primary-dark rounded-md px-2 py-1 font-semibold">
              {{ coffee.finca }}
            </span>
          </p>
          <p class="text-secondary-light text-sm italic">
            Altitud: {{ coffee.altitud }} | Fecha de tostado:
            {{ coffee.fechaTostado }}
          </p>
        </div>

        <!-- Imagen destacada -->
        <div
          class="relative h-64 w-full overflow-hidden rounded-xl shadow-lg sm:h-96"
          data-aos="zoom-in"
        >
          <img
            :src="coffee.image"
            alt="Imagen del café"
            class="h-full w-full object-cover"
          />
        </div>

        <!-- Características principales -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card
            title="Productor"
            :content="coffee.productor"
          />
          <Card
            title="Variedad"
            :content="coffee.variedad"
          />
          <Card
            title="Método"
            :content="coffee.metodo"
          />
        </div>

        <!-- Notas de cata y perfil en taza -->
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
          class="rounded-lg bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-6 text-white shadow-lg"
          data-aos="zoom-in"
        >
          <h2 class="mb-2 text-2xl font-bold">Puntuación SCA</h2>
          <p class="text-lg font-semibold">{{ coffee.puntuacionSCA }}</p>
        </div>

        <!-- Tabla de precios -->
        <div class="rounded-lg bg-white p-6 shadow-lg">
          <h2 class="text-primary mb-4 text-xl font-bold">Precios</h2>
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
    name: query.name || 'Café Especial',
    productor: query.productor || 'Adán Hernández',
    finca: query.finca || 'El Guayabital',
    altitud: query.altitud || '1000 msnm',
    variedad: query.variedad || 'Bourbon, Typica, Sarchimor',
    metodo: query.metodo || 'Fermentación colombiana, Honey rojo (15 días), Honey negro (26 días)',
    notasDeCata: query.notasDeCata || 'Dulzura balanceada, acidez cítrica suave, notas achocolatadas',
    perfilEnTaza: query.perfilEnTaza || 'Cuerpo medio, dulce y vibrante',
    puntuacionSCA: query.puntuacionSCA || '85 pts',
    precios: [query.precio250 || '$180', query.precio500 || '$300'],
    fechaTostado: query.fechaTostado || '2025-01-01',
    image: query.image || 'https://tse1.mm.bing.net/th?id=OIP.5EOwpJv34aS95PbRRhXcwgHaE8&pid=Api'
  }
</script>
