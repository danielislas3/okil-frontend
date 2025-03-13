<template>
  <section class="relative overflow-hidden pt-24">
    <!-- Elementos decorativos de fondo -->
    <div class="absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#8B5E3C]/10 blur-3xl"></div>
    <div class="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#D4B595]/20 blur-3xl"></div>
    <div class="absolute left-1/2 top-1/2 h-full w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 transform">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        class="h-full w-full opacity-5"
      >
        <path
          fill="#8B5E3C"
          d="M44.9,-76.5C57.8,-71.2,67.9,-59.6,77.7,-46.9C87.5,-34.1,97,-20.1,98.7,-5.2C100.3,9.7,94.2,25.5,84.8,38.3C75.5,51.1,62.9,60.9,49.2,69.8C35.4,78.7,20.6,86.9,4.2,81.5C-12.2,76.1,-30.1,57.1,-44.4,41.2C-58.7,25.3,-69.3,12.7,-71.4,-1.2C-73.4,-15.1,-66.9,-30.1,-57.8,-43C-48.7,-55.9,-37,-66.7,-24.2,-71.8C-11.3,-76.9,2.6,-76.4,16,-74.8C29.5,-73.3,42.6,-70.7,44.9,-76.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>

    <!-- Contenido principal del Hero -->
    <div class="mx-auto max-w-7xl px-4 py-12">
      <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <!-- Lado izquierdo - Texto -->
        <div
          class="space-y-6"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="inline-block rounded-full bg-[#D4B595] px-4 py-1 text-sm font-medium text-[#4A3425]">
            Café de Especialidad en Tecámac
          </div>
          <h1 class="text-5xl font-bold leading-tight text-[#4A3425] md:text-6xl">
            Descubre el arte del
            <span class="text-[#8B5E3C]">café de especialidad</span>
          </h1>
          <p class="text-lg text-[#6B5D4F]">
            En Okil, cada taza cuenta una historia. Desde la semilla hasta tu mesa, creamos experiencias únicas con los
            mejores granos y métodos de preparación.
          </p>
          <div class="flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu"
              class="transform rounded-lg bg-[#8B5E3C] px-6 py-3 text-center text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#6B4E2C] hover:shadow-xl"
            >
              Ver nuestro menú
            </a>
            <a
              href="#ubicacion"
              class="transform rounded-lg border border-[#8B5E3C] px-6 py-3 text-center text-[#8B5E3C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8B5E3C] hover:text-white"
            >
              Visítanos
            </a>
          </div>

          <!-- Distintivos -->
          <div class="flex flex-wrap gap-6 pt-4">
            <div class="flex items-center gap-2">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8D9C5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#8B5E3C"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <span class="font-medium text-[#6B5D4F]">Café Premium</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8D9C5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#8B5E3C"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                  />
                </svg>
              </div>
              <span class="font-medium text-[#6B5D4F]">Desde 2020</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8D9C5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#8B5E3C"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <span class="font-medium text-[#6B5D4F]">Baristas Expertos</span>
            </div>
          </div>
        </div>

        <!-- Lado derecho - Imagen -->
        <div
          class="relative"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div
            class="relative z-10 transform overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105"
          >
            <img
              src="/img/cofe.webp"
              alt="Taza de café de especialidad Okil"
              class="h-auto w-full object-cover"
            />
          </div>
          <div class="absolute -right-4 -top-4 z-0 h-24 w-24 rounded-full bg-[#D4B595] opacity-60"></div>
          <div class="absolute -bottom-6 -left-6 z-0 h-32 w-32 rounded-full bg-[#8B5E3C] opacity-30"></div>
        </div>
      </div>
    </div>
  </section>
</template>
