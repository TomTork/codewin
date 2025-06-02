import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  svgo: {
    autoImportPath: './assets/svg/',
    componentPrefix: 'Image',
  },
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss', '@/assets/scss/fonts.scss', 'vuetify/styles'],
  modules: ['nuxt-svgo', (_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  }],
  router: {
    options: { linkExactActiveClass: 'active' }
  },
  components: true,
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      }
    },
  },
  build: {
    transpile: ['vuetify', '@mdi/font'],
  },
  app: {
    head: {
      title: 'Codewin — Саиткулов Дмитрий',
      titleTemplate: '%s | Codewin',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no'
        },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
    }
  },
})
