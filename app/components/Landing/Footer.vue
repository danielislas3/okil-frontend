<template>
  <footer class="relative mt-12 overflow-hidden bg-[#4A3425] pb-8 pt-16 text-white">
    <!-- Elementos decorativos -->
    <div class="absolute right-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5"></div>
    <div class="absolute bottom-0 left-0 h-96 w-96 translate-x-1/3 translate-y-1/2 rounded-full bg-white/5"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-4">
      <!-- Sección principal del footer -->
      <div class="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <!-- Columna 1: Información de la marca -->
        <div>
          <img
            src="/img/logo.webp"
            alt="Logo Okil"
            class="mb-6 h-16 rounded-lg bg-white/90 p-2"
          />
          <p class="mb-6 text-white/80">
            Tu rincón de café de especialidad en Tecámac. Un espacio donde cada taza cuenta una historia y cada visita
            se convierte en una experiencia.
          </p>
          <!-- Redes sociales -->
          <div class="flex space-x-4">
            <a
              href="https://www.instagram.com/okil.cafe"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-[#D4B595] hover:text-[#4A3425]"
              aria-label="Instagram"
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
              rel="noopener noreferrer"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-[#D4B595] hover:text-[#4A3425]"
              aria-label="Facebook"
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

        <!-- Columna 2: Enlaces rápidos -->
        <div>
          <h3 class="mb-6 text-xl font-bold text-[#D4B595]">Enlaces Rápidos</h3>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="flex items-center text-white/80 transition-colors hover:text-[#D4B595]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#menu"
                class="flex items-center text-white/80 transition-colors hover:text-[#D4B595]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Menú
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center text-white/80 transition-colors hover:text-[#D4B595]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href="#ubicacion"
                class="flex items-center text-white/80 transition-colors hover:text-[#D4B595]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Ubicación
              </a>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Horarios de atención -->
        <div>
          <h3 class="mb-6 text-xl font-bold text-[#D4B595]">Horarios</h3>
          <ul class="space-y-3">
            <li class="flex justify-between">
              <span class="text-white/80">Lunes - Viernes:</span>
              <span class="text-white">7:00 AM - 9:00 PM</span>
            </li>
            <li class="flex justify-between">
              <span class="text-white/80">Sábados:</span>
              <span class="text-white">8:00 AM - 9:00 PM</span>
            </li>
            <li class="flex justify-between">
              <span class="text-white/80">Domingos:</span>
              <span class="text-white">8:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>

        <!-- Columna 4: Información de contacto -->
        <div>
          <h3 class="mb-6 text-xl font-bold text-[#D4B595]">Contáctanos</h3>
          <address class="space-y-4 not-italic">
            <div class="flex items-start gap-3">
              <div class="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-white/80">
                  <a
                    href="https://maps.app.goo.gl/96cvP2UH6L1GYMcq8?g_st=com.google.maps.preview.copy"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="transition-colors hover:text-[#D4B595]"
                  >
                    5 de Febrero 123, Tecámac Centro,
                    <br />
                    Tecámac, CP 55740
                  </a>
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <a
                  href="mailto:okilcaffe@gmail.com"
                  class="text-white/80 transition-colors hover:text-[#D4B595]"
                >
                  okilcaffe@gmail.com
                </a>
              </div>
            </div>
          </address>
        </div>
      </div>

      <!-- Línea divisoria -->
      <div class="my-8 h-px bg-white/20"></div>

      <!-- Copyright -->
      <div class="text-center text-sm text-white/60">
        <p>&copy; {{ new Date().getFullYear() }} Okil - Café de Especialidad. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>
