// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  supabase: {
    redirect: false,
  },

  css: ["~/assets/css/tailwind.css"],

  imports: {
    dirs: ["stores"],
  },

  ssr: true,
});
