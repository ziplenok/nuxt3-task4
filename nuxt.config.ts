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

  runtimeConfig: {
    SUPABASE_SERVICE_ROLE: process.env.SERVICE_ROLE,
    SUPABASE_URL: process.env.SUPABASE_URL,
  },

  css: ["~/assets/css/tailwind.css"],

  imports: {
    dirs: ["stores"],
  },

  ssr: true,
});
