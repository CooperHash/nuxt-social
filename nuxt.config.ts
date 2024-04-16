// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-icon", '@pinia/nuxt', "@nuxt/image", '@nuxtjs/supabase', "@vueuse/nuxt"],
  pinia: {
    storesDirs: ['~/store/**'],
  },
  ui: {
    safelistColors: ['primary', 'red', 'orange', 'green']
  },
  components: [
    {
      path: '~/components',
    }
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  runtimeConfig: {
    token: process.env.NUXT_SUPABASE_TOKEN
  },
  supabase: {
    redirect: false
  },
  ssr: true
})
