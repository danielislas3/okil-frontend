<template>
  <footer class="bg-footer-bg text-secondary-text mt-12 py-8">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Columna 1: Información de contacto -->
      <div>
        <h3 class="text-2xl font-bold mb-6">Contáctanos</h3>
        <address class="not-italic space-y-2">
          <p>
            Dirección: 
            <a 
              href="https://maps.app.goo.gl/96cvP2UH6L1GYMcq8?g_st=com.google.maps.preview.copy" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-accent hover:underline"
            >
              5 de Febrero 123, Tecámac Centro, Tecámac, CP 55740
            </a>
          </p>
          <p>Horario: Lunes a Viernes, 7:00 AM - 9:00 PM</p>
          <p>Correo: 
            <a href="mailto:okilcaffe@gmail.com" class="text-accent hover:underline">
              okilcaffe@gmail.com
            </a>
          </p>
        </address>
      </div>

      <!-- Columna 2: Redes sociales -->
      <div class="flex flex-col items-start md:items-end">
        <h3 class="text-2xl font-bold mb-6">Síguenos</h3>
        <div class="flex space-x-4">
          <a 
            href="https://www.instagram.com/okil.cafe" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-accent hover:underline flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.67.014-4.947.073-1.5.068-2.837.396-3.887 1.446s-1.378 2.388-1.446 3.887c-.059 1.277-.073 1.688-.073 4.947s.014 3.67.073 4.947c.068 1.5.396 2.837 1.446 3.887s2.388 1.378 3.887 1.446c1.277.059 1.688.073 4.947.073s3.67-.014 4.947-.073c1.5-.068 2.837-.396 3.887-1.446s1.378-2.388 1.446-3.887c.059-1.277.073-1.688.073-4.947s-.014-3.67-.073-4.947c-.068-1.5-.396-2.837-1.446-3.887s-2.388-1.378-3.887-1.446c-1.277-.059-1.688-.073-4.947-.073zm0 6.306c-3.14 0-5.694 2.554-5.694 5.694s2.554 5.694 5.694 5.694 5.694-2.554 5.694-5.694-2.554-5.694-5.694-5.694zm0 9.261c-1.961 0-3.567-1.605-3.567-3.567s1.605-3.567 3.567-3.567 3.567 1.605 3.567 3.567-1.605 3.567-3.567 3.567zm6.406-10.845c0 .731-.593 1.323-1.323 1.323-.731 0-1.323-.593-1.323-1.323s.593-1.323 1.323-1.323c.731 0 1.323.593 1.323 1.323z"/>
            </svg>
            <span>Instagram</span>
          </a>
          <a 
            href="https://www.facebook.com/okil.cafe?locale=es_LA" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-accent hover:underline flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.437 9.878v-6.988h-2.54v-2.89h2.54v-2.218c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.261c-1.244 0-1.631.772-1.631 1.562v1.889h2.773l-.443 2.89h-2.33v6.988c4.78-.75 8.437-4.887 8.437-9.878z"/>
            </svg>
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>