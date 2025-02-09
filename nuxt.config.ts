// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    'nuxt-aos',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    'nuxt-gtag',
  ],
  nitro: {
    prerender: {
      routes: ["/"],

    },
  },
  plugins: [
    { src: '~/plugins/Vue3Lottie.client.ts', mode: 'client' }
  ],
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID
  },
  site: {
    url: 'https://okilcafe.mx',
    name: 'Okil Café - Café de especialidad',
  },
  fonts: {
    providers: {
      custom: '~/providers/custom',
    },
    families: [
      { name: 'Bingo Dilan Regular', src: '/BingoDilanRegular.ttf' },
    ]
  },
  runtimeConfig: {
    public: {
      appDomain: 'https://okilcafe.mx',
    }
  },
  supabase: {
    redirect: false,
  }
})