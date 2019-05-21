const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const base = require('../base/prod')
const public = require('./public')

const prodConfig = merge(base, public)

module.exports = prodConfig