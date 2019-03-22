const path = require('path')
const webpack = require('webpack')
const version = require('../package.json').version

module.exports = {
  mode: "production",
  plugins: [
    new webpack.BannerPlugin('version: ' + version + '\ndocs: https://github.com/yeild/secrage\n')
  ]
}
