module.exports = {
  head: {
    title: 'Site Fatec',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color:'darkred' },

  build: {
    vendor: ['axios','element-ui']
  },
  plugins: [
    { src: '~plugins/element.js', ssr: false }
  ]
}