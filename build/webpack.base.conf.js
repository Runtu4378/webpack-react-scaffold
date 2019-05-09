'use strict'
const path = require('path')

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

  plugins: [],
}