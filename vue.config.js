const path = require("path");

module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./example/main.ts")
      .end();
    config.resolve.alias
      .set("@", path.join(__dirname, "./example"))
  },
  configureWebpack: function(config) {
    if (process.env.VUE_CLI_BUILD_TARGET === 'lib') {
      config.externals = [
        'vue',
        'vuex',
        'vue-router',
        'choo-router'
      ]
    }
  }
}