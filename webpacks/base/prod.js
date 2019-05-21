const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const base = require('../webpack.config.base.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const prodConfig = merge(base, {
  module:{
    rules:[
      {
        test: /(\.css)$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: 'css/[name].css?v=[contenthash]',
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin() //默认删除output.path下所有内容
  ]
})

module.exports = prodConfig