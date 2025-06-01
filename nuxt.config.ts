import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  nitro: {
    storage: {
      data: { driver: 'redis' },
    },
  },
  compatibilityDate: '2025-05-15',
  svgo: {
    autoImportPath: './assets/svg/',
    componentPrefix: 'Image',
  },
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss', '@/assets/scss/fonts.scss', 'vuetify/styles'],
  modules: ['nuxt-svgo', '@nuxtjs/i18n', (_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  }],
  runtimeConfig: {
    locale: process.env.LOCALE,
    public: {
      locale: process.env.LOCALE
    }
  },
  router: {
    options: { linkExactActiveClass: 'active' }
  },
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'ru', file: 'ru.json' },
    ],
    lazy: true,
    defaultLocale: process.env.LOCALE as 'ru' | 'en' || 'ru',
    strategy: 'no_prefix',
    langDir: '../locales/'
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
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap'
        }
      ]
    }
  },
})
