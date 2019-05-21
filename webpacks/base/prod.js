const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const base = require('./base')
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
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    })
  ]
})

module.exports = prodConfig