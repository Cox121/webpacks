const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const base = require('../webpack.config.base.js')

const devConfig = merge(base, {
  module:{
    rules:[
      {
        test: /(\.css)$/,
        loader: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devtool: '#cheap-moudle-eval-source-map', //webpack认为适合在开发环境下使用的source-map
  devServer: {
    host:'localhost', //0.0.0.0可以兼容 localhost和当前电脑ip和127.0.0.1
    port: 8000,
    overlay: { //将打包过程中的错误信息显示在网页上
      errors:true
    },
    hot: true //热更新开关
    /*
    proxy: {
      '/singleStation': { //别名
        target: 'http://10.10.100.27:8080/singleStation', //代理目标地址
        pathRewrite: { //将请求路径中匹配的字样替换
          '^/singleStation':''
        },
        changeOrigin: true //是否跨域
      }
    }
    */
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin() //热更新插件
    /** 
     if(module.hot){
       module.hot.accept()
     }
    **/
  ]
})

module.exports = devConfig