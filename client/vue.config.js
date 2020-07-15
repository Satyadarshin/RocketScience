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
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
        '/api': {
            target: 'http://localhost:5000'
        }
    }
}
}