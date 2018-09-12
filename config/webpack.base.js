const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const version = require('../package.json').version

module.exports = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(
      ['dist', 'lib'],
      {
        root: path.resolve(__dirname, '..'),
        verbose: false
      }
    ),
    new webpack.BannerPlugin('version: ' + version + '\ndocs: https://github.com/yeild/secrage\n')
  ]
}