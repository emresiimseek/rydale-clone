// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "vue3-carousel-nuxt",
    "vue3-carousel-nuxt",
  ],
  image: {
    format: ["avif", "gif", "webp"],
  },
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
});
