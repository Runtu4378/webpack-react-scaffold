'use strict'
const path = require('path')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

// path definition
const ROOT = path.resolve(__dirname, '../../')
const SRC = path.resolve(ROOT, './src')

module.exports = {
  // paths
  ROOT,

  SRC,

  dev: {
    // Various Dev Server settings
    host: HOST || '0.0.0.0', // can be overwritten by process.env.HOST
    port: PORT || 8080, // can be overwritten by 

    errorOverlay: true,
    notifyOnErrors: true,
    cliErrorDetails: false,
  },
}
