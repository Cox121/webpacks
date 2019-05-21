const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target:'web',
  entry: path.join(__dirname, '../target/main.js'),
  output: {
    filename: 'app.[hash:7].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|png|bmp|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[hash:7].[ext]',
          outputPath:path.join(__dirname, '../dist/imgs')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: '[name].[hash:7].[ext]',
          outputPath:path.join(__dirname, '../dist/fonts')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'webpack基础配置',
      filename: 'index.html',
      template: path.join(__dirname, '../target/index.html')
    })
  ]
}