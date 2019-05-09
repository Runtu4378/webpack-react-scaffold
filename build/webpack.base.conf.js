'use strict'
const path = require('path')

const config = require('./config/index.js')

const {
  ROOT,
  SRC,
} = config

module.exports = {
  entry: path.resolve(SRC, './main.js'),

  plugins: [],
}