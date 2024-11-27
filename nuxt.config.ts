// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxtjs/sitemap'],
  nitro: {
    prerender: {
      routes: ["/"],

    },
  },
  plugins: [
    { src: '~/plugins/Vue3Lottie.client.ts', mode: 'client' }
  ],
  site: {
    url: 'https://okilcafe.mx', 
    name: 'My Awesome Website' 
    }, 
  fonts: {
    providers: {
      custom: '~/providers/custom',
    },
    families: [
      { name: 'Adver Gothic Regular', src: '/adver-gothic-regular.ttf' },
    ]
  },
})