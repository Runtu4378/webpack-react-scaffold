'use strict'
const path = require('path')

const webpack = require('webpack')
const merge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = require('./config/prod.js')
const baseWpConfig = require('./webpack.base.conf.js')

const {
  SRC,
  DLL_DIR,
  OUTPUT_DIR,

  prod,
  dll,
} = config

const extraConfig = {
  mode: 'production',

  output: {
    path: OUTPUT_DIR,
    publicPath: prod.publicPath,
    filename: '[name].[contenthash].js',
    chunkFilename: 'chunks/[name].[chunkhash].js',
  },

  plugins: [
    // 配置dll
    new webpack.DllReferencePlugin({
      context: DLL_DIR,
      manifest: path.resolve(DLL_DIR, `./${dll.name}-manifest.json`),
      name: dll.name,
    }),
    // 复制dll
    new CopyWebpackPlugin([
      {
        from: path.resolve(DLL_DIR, './*.js'),
        to: OUTPUT_DIR,
        context: DLL_DIR,
        cache: true,
      },
    ]),
    // 首页
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(SRC, './index.ejs'),
      xhtml: true,

      TITLE: 'hello world',
      LANG: 'zh-cn',
      DLL: dll.name,
    }),
  ],
}

module.exports = merge(baseWpConfig, extraConfig)
