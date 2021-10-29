module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  publicPath: '/vuejs-zalaxus/',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      enableBridge: false
    }
  }
}
