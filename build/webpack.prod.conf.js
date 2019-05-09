'use strict'
const path = require('path')

const webpack = require('webpack')
const merge = require('webpack-merge')

const config = require('./config/prod.js')
const baseWpConfig = require('./webpack.base.conf.js')

const {
  DLL_DIR,
  OUTPUT_DIR,

  dll,
} = config

const extraConfig = {
  mode: 'production',

  output: {
    path: OUTPUT_DIR,
    filename: '[name].[contenthash].js',
    chunkFilename: 'chunks/[id].[contenthash]',
  },

  plugins: [
    // 配置 dll
    new webpack.DllReferencePlugin({
      context: DLL_DIR,
      manifest: path.resolve(DLL_DIR, `./${dll.name}-manifest.json`),
      name: dll.name,
    }),
  ],
}

module.exports = merge(baseWpConfig, extraConfig)
