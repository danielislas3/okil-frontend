<template>
  <div class="min-h-screen bg-gradient-to-b from-[#F8F4EC] to-[#E8D9C5]">
    <NavBar />

    <LandingHeroSection />
    <!-- Características Destacadas -->
    <section class="px-4 py-16">
      <div class="mx-auto max-w-7xl">
        <div
          class="mb-12 text-center"
          data-aos="fade-up"
        >
          <h2 class="mb-4 text-3xl font-bold text-[#4A3425]">¿Por qué elegir Okil?</h2>
          <p class="mx-auto max-w-2xl text-[#6B5D4F]">
            Nuestra pasión por el café nos impulsa a ofrecerte una experiencia única en cada visita.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            class="rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4B595]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#4A3425"
                class="h-8 w-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-[#4A3425]">Granos Seleccionados</h3>
            <p class="text-[#6B5D4F]">
              Trabajamos directamente con productores locales que cultivan con pasión y compromiso.
            </p>
          </div>

          <div
            class="rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4B595]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#4A3425"
                class="h-8 w-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-[#4A3425]">Métodos Artesanales</h3>
            <p class="text-[#6B5D4F]">
              Cada preparación es un ritual donde cuidamos cada detalle para resaltar los mejores sabores.
            </p>
          </div>

          <div
            class="rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4B595]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#4A3425"
                class="h-8 w-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-[#4A3425]">Experiencia Única</h3>
            <p class="text-[#6B5D4F]">No solo vendemos café, creamos momentos y sensaciones que recordarás.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Section Mejorado -->
    <section
      id="menu"
      class="bg-white/70 px-4 py-16"
    >
      <div class="mx-auto max-w-7xl">
        <div
          class="mb-12 text-center"
          data-aos="fade-up"
        >
          <h2 class="mb-4 text-3xl font-bold text-[#4A3425]">Nuestro Menú</h2>
          <p class="mx-auto max-w-2xl text-[#6B5D4F]">
            Descubre nuestra selección de bebidas preparadas con maestría y pasión.
          </p>
        </div>

        <LandingMenuFilter
          data-aos="fade-up"
          @filter-changed="updateFilters"
        />

        <div
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <LandingMenuList :filters="activeFilters" />
        </div>
      </div>
    </section>

    <!-- Sección de Galería -->
    <section class="px-4 py-16">
      <div class="mx-auto max-w-7xl">
        <div
          class="mb-12 text-center"
          data-aos="fade-up"
        >
          <h2 class="mb-4 text-3xl font-bold text-[#4A3425]">Galería Okil</h2>
          <p class="mx-auto max-w-2xl text-[#6B5D4F]">Momentos que capturan la esencia de nuestra cafetería.</p>
        </div>

        <div
          class="grid grid-cols-2 gap-4 md:grid-cols-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="group relative aspect-square cursor-pointer overflow-hidden rounded-lg">
            <img
              src="/img/cofe.webp"
              alt="Café Okil"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-[#4A3425]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="font-medium text-white">Nuestro espacio</span>
            </div>
          </div>
          <div class="group relative aspect-square cursor-pointer overflow-hidden rounded-lg">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.5EOwpJv34aS95PbRRhXcwgHaE8&pid=Api"
              alt="Café Okil"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-[#4A3425]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="font-medium text-white">Café de especialidad</span>
            </div>
          </div>
          <div class="group relative aspect-square cursor-pointer overflow-hidden rounded-lg">
            <img
              src="https://shottbeverages.com/wp-content/uploads/2020/09/classic-mocha.jpg"
              alt="Café Okil"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-[#4A3425]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="font-medium text-white">Nuestras preparaciones</span>
            </div>
          </div>
          <div class="group relative aspect-square cursor-pointer overflow-hidden rounded-lg">
            <img
              src="https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/vanilla-chai-latte.jpg"
              alt="Café Okil"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-[#4A3425]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="font-medium text-white">Experiencia Okil</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ubicación -->
    <section
      id="ubicacion"
      class="bg-[#4A3425]/5 px-4 py-16"
    >
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div
            class="space-y-6"
            data-aos="fade-right"
          >
            <h2 class="mb-4 text-3xl font-bold text-[#4A3425]">Visítanos</h2>
            <p class="text-[#6B5D4F]">Te esperamos para vivir juntos la experiencia Okil.</p>

            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#D4B595]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#4A3425"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-[#4A3425]">Dirección</h3>
                  <p class="text-[#6B5D4F]">5 de Febrero 123, Tecámac Centro, Tecámac, CP 55740</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#D4B595]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#4A3425"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-[#4A3425]">Horario</h3>
                  <p class="text-[#6B5D4F]">Lunes a Viernes, 7:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#D4B595]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#4A3425"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-[#4A3425]">Contacto</h3>
                  <p class="text-[#6B5D4F]">okilcaffe@gmail.com</p>
                </div>
              </div>
            </div>

            <div class="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/okil.cafe"
                target="_blank"
                class="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B5E3C] text-white transition-colors hover:bg-[#6B4E2C]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.67.014-4.947.073-1.5.068-2.837.396-3.887 1.446s-1.378 2.388-1.446 3.887c-.059 1.277-.073 1.688-.073 4.947s.014 3.67.073 4.947c.068 1.5.396 2.837 1.446 3.887s2.388 1.378 3.887 1.446c1.277.059 1.688.073 4.947.073s3.67-.014 4.947-.073c1.5-.068 2.837-.396 3.887-1.446s1.378-2.388 1.446-3.887c.059-1.277.073-1.688.073-4.947s-.014-3.67-.073-4.947c-.068-1.5-.396-2.837-1.446-3.887s-2.388-1.378-3.887-1.446c-1.277-.059-1.688-.073-4.947-.073zm0 6.306c-3.14 0-5.694 2.554-5.694 5.694s2.554 5.694 5.694 5.694 5.694-2.554 5.694-5.694-2.554-5.694-5.694-5.694zm0 9.261c-1.961 0-3.567-1.605-3.567-3.567s1.605-3.567 3.567-3.567 3.567 1.605 3.567 3.567-1.605 3.567-3.567 3.567zm6.406-10.845c0 .731-.593 1.323-1.323 1.323-.731 0-1.323-.593-1.323-1.323s.593-1.323 1.323-1.323c.731 0 1.323.593 1.323 1.323z"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/okil.cafe?locale=es_LA"
                target="_blank"
                class="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B5E3C] text-white transition-colors hover:bg-[#6B4E2C]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.437 9.878v-6.988h-2.54v-2.89h2.54v-2.218c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.261c-1.244 0-1.631.772-1.631 1.562v1.889h2.773l-.443 2.89h-2.33v6.988c4.78-.75 8.437-4.887 8.437-9.878z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div
            class="h-96 overflow-hidden rounded-xl shadow-lg"
            data-aos="fade-left"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.8885982552285!2d-99.013377!3d19.711996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ed6bdbe7c253%3A0x1d5f0c00625d1d8c!2s5%20de%20Febrero%20123%2C%20Tec%C3%A1mac%20Centro%2C%2055740%20Tec%C3%A1mac%20de%20Felipe%20Villanueva%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1715730140532!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Reseñas -->
    <LandingReviewSection />

    <!-- Footer -->
    <LandingFooter />
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  // import { useMenuStore } from '@/store/menuStore'
  import { useTrafficLogger } from '@/composables/useTrafficLogger'

  const config = useRuntimeConfig()
  const { logSource } = useTrafficLogger()

  const activeFilters = ref({})

  const updateFilters = filters => {
    activeFilters.value = filters
  }

  // Meta tags para SEO
  useHead({
    title: 'Okil | Café de Especialidad en Tecámac',
    meta: [
      {
        name: 'description',
        content:
          'Descubre Okil, tu puerta al mundo del café de especialidad en México. Vive cada taza como una experiencia única que despierta tus sentidos.'
      },
      {
        property: 'og:title',
        content: 'Okil | Café de Especialidad'
      },
      {
        property: 'og:description',
        content:
          'Explora sabores únicos y vive el arte del café de especialidad con Okil. El comienzo perfecto para cualquier amante del café.'
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
        content:
          'Tu inicio perfecto en el mundo del café de especialidad. Descubre Okil y vive cada taza como una experiencia única.'
      },
      {
        property: 'twitter:image',
        content: `${config.public.appDomain}/img/image-og.webp`
      }
    ]
  })

  onMounted(async () => {
    await logSource()
  })
</script>
