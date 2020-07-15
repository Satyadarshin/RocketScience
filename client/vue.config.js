const path = require('path');

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/global.scss";`
      }
    }
  },
  devServer: {
    proxy: {
        '/api': {
            target: 'http://localhost:5000'
        }
    }
}
}