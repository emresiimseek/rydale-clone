/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "480px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
  modules: ["@nuxtjs/google-fonts"],
  fontFamily: {
    sans: ["Lato, sans-serif"],
  },
};
