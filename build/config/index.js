'use strict'
const path = require('path')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

// path definition
const ROOT = path.resolve(__dirname, '../../')
const SRC = path.resolve(ROOT, './src')
const DLL_DIR = path.resolve(ROOT, 'temp_dir')
const OUTPUT_DIR = path.resolve(ROOT, './dist')

module.exports = {
  // paths
  ROOT,

  SRC,
  DLL_DIR,
  OUTPUT_DIR,

  dev: {
    dir: path.resolve(ROOT, 'WDS_dist'),
    publicPath: '/',
    // Various Dev Server settings
    host: HOST || '0.0.0.0', // can be overwritten by process.env.HOST
    port: PORT || 8080, // can be overwritten by process.env.PORT

    errorOverlay: true,
    notifyOnErrors: true,
    cliErrorDetails: false,
  },

  prod: {
    publicPath: '/',
  },

  dll: {
    name: 'DLL',
    packages: [
      // 'babel-polyfill',
      // 'url-polyfill',

      'react',
      'react-dom',
      'react-router-dom'
    ],
  },
}
