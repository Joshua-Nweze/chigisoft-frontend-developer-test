// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // devtools: { enabled: true }

  modules: [ '@nuxtjs/tailwindcss', '@pinia/nuxt'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  alias: {
    // pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
},
})
