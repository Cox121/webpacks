const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const base = require('../webpack.config.base.js')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const devConfig = merge(base, {
  module:{
    rules:[
      {
        test: /(\.css)$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /(\.vue)$/,
        loader: 'vue-loader'
      }
    ]
  },
  devServer: {
    host:'localhost',
    port: 8000,
    overlay: {
      errors:true
    },
    hot: true
  },
  plugins:[
    new VueLoaderPlugin(), 
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = devConfig