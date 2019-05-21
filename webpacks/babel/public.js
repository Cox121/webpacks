const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const base = require('../webpack.config.base.js')

const publicConfig = merge(base, {
  module:{
    rules:[
      {
        test:/(\.js)$/,
        loader: 'babel-loader',
        options: { //以下内容可以单独提取为.babelrc文件作为整个系统babel的配置文件
          presets:[
            [ //这层数组结构很容易漏写
              '@babel/preset-env',
              {
                targets: {
                  browsers: 'last 2 versions, > 5%'
                }
              }
            ]
          ]
        },
        include: path.join(__dirname, '../../target')
      }
    ]
  }
})

module.exports = publicConfig