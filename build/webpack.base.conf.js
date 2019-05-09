'use strict'
const path = require('path')

const webpack = require('webpack')

const config = require('./config/index.js')

const {
  SRC,
} = config

module.exports = {
  entry: path.resolve(SRC, './main.js'),

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          SRC,
        ],
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    // 注册react全局引用
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom',
    }),
  ],
}