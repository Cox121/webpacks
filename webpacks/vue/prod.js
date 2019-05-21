const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const base = require('../webpack.config.base.js')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const prodConfig = merge(base, {
  module:{
    rules:[
      {
        test: /(\.css)$/,
        loader: [
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
  plugins:[
    new VueLoaderPlugin(), //定义过的其它规则复制并应用到 .vue 文件里相应语言的块
    new CleanWebpackPlugin()
  ]
})

console.log(prodConfig.module.rules)

module.exports = prodConfig