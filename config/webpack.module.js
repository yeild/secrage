const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  entry: {
    'index': './src/index'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: 'babel-loader'
      }
    ]
  },
  target: 'node'
})
