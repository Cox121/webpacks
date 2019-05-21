const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|png|bmp|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]',
          outputPath:'../dist/imgs'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: '[name].[hash:7].[ext]',
          outputPath:'../dist/fonts'
        }
      }
    ]
  }
}