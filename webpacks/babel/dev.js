const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const base = require('../base/dev')
const public = require('./public')

const devConfig = merge(base, public)

module.exports = devConfig