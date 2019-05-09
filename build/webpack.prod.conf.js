'use strict'
const path = require('path')

const webpack = require('webpack')
const merge = require('webpack-merge')

const config = require('./config/index.js')
const baseWpConfig = require('./webpack.base.conf.js')

const extraConfig = {
  mode: 'production',
}

module.exports = merge(baseWpConfig, extraConfig)
