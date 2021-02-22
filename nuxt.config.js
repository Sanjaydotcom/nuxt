export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtwithtailwind',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: 8009 // default: 3000
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
    // ...
    auth: {
      strategies: {
        local: {
          token: {
            property: 'token',
            // required: true,
             type: ''
          },
          user: {
            property: 'data',
             autoFetch: false
          },
          endpoints: {
            login: { url: 'https://reqres.in/api/login/', method: 'post' },
            logout: { url: '/api/auth/logout', method: 'post' },
            user: { url: 'https://reqres.in/api/user/2/', method: 'get' }
          },
          
        }
      }
    },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
