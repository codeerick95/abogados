
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'es'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'fbtype', property: 'og:type', content: 'website' },
      /* Twitter meta */
      { hid: 'twcard', property: 'twitter:card', content: 'https://abogados.josejollja.com/wp-content/uploads/2020/05/logo-abogado.png' },
      { hid: 'twimage', property: 'twitter:image', content: 'https://abogados.josejollja.com/wp-content/uploads/2020/05/logo-abogado.png' }    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;800&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/3bd84f9f96.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  css: [
    './scss/bootstrap_custom.scss'
  ],
  /*
  ** Global CSS
  */
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/axios'
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://abogados.josejollja.com/graphql',
        inMemoryCacheOptions: {
          addTypename: false
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
