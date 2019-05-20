const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('../webpack.config.base')

const baseConfig = merge(baseWebpackConfig, {
  target:'web',
  entry: path.join(__dirname, './main.js'),
  output: {
    filename: 'app.[hash:7].js',
    path: path.join(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'webpack基础配置',
      filename: 'index.html',
      template: path.join(__dirname, '../index.html')
    })
  ]
})

module.exports = baseConfig