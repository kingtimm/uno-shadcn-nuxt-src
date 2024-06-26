// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/eslint',
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  srcDir: 'src/',
  // vite: {
  //   resolve: {
  //     alias: {
  //       "~": path.resolve(__dirname, "./src"),
  //     },
  //   },
  // },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './src/components/ui',
  },
  colorMode: {
    classSuffix: '',
  },
})
