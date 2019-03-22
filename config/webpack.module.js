const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  entry: {
    'secrage': './src/index'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].min.js',
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
  plugins: [
    new CleanWebpackPlugin(
      ['lib'],
      {
        root: path.resolve(__dirname, '..'),
        verbose: true
      }
    )
  ],
  target: 'node'
})
