import path from "node:path"


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/color-mode'
  ],
  css: [
    '@unocss/reset/tailwind.css',
    'virtual:uno.css',
  ],
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
    componentDir: './src/components/ui'
  },
  colorMode: {
    classSuffix: ''
  }
})
