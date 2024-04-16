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
  // runtimeConfig: {
  //   SUPABASE_URL: "",
  //   SUPABASE_KEY: ""
  // },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
    cookieOptions: {
      secure: true
    },
    cookieName: "nuxtToken"
  },
  ssr: false
})
