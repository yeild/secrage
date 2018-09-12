const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  entry: {
    'secrage': './src/browser'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: 'babel-loader'
      }
    ]
  }
})
