'use strict'
const path = require('path')

const webpack = require('webpack')

const config = require('./config/index.js')

const {
  DLL_DIR,
  dll,
} = config

const entry = {}
entry[dll.name] = dll.packages

module.exports = {
  mode: 'production',

  entry,

  output: {
    path: DLL_DIR,
    filename: `${dll.name}.js`,
    library: '[name]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  },
  
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(DLL_DIR, '[name]-manifest.json'), // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
      name: '[name]',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与参数output.library保持一致
      context: DLL_DIR, // 指定一个路径作为上下文环境，需要与DllReferencePlugin的context参数保持一致，建议统一设置为项目根目录
    }),
  ],
}