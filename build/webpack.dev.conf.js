'use strict'
const path = require('path')

const webpack = require('webpack')
const merge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const config = require('./config/dev.js')
const baseWpConfig = require('./webpack.base.conf.js')

const {
  ROOT,
  SRC,

  dev,
} = config
const {
  host,
  port,
  notifyOnErrors,
  cliErrorDetails,
} = dev

/** 自定义的错误输出格式 */
const createNotifierCallback = () => {
  const notifier = require('node-notifier')
  /* eslint-disable-next-line */
  const packageConfig = require(path.resolve(ROOT, 'package.json'))

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      // icon: path.join(__dirname, 'logo.png'),
    })
  }
}

const extraConfig = {
  mode: 'development',

  output: {
    path: dev.dir,
    publicPath: dev.publicPath,
    filename: '[name].js',
    chunkFilename: 'chunks/[name].js',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    // 首页
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(SRC, './index.ejs'),
      xhtml: true,

      TITLE: 'hello world',
      LANG: 'zh-cn',
    }),
  ],

  devtool: 'cheap-source-map',
  devServer: {
    contentBase: dev.dir,
    publicPath: dev.publicPath,
    // 设置localhost端口
    host: host,
    port: port,
    disableHostCheck: true,
    // 自动打开浏览器
    // open: true,
    hot: true,
    quiet: !cliErrorDetails,
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/$/,
          to: '/index.html',
        }
      ],
    },
  },
}

if (!cliErrorDetails) {
  extraConfig.plugins = [
    ...extraConfig.plugins,
    // 遇到错误不中止打包进程
    new webpack.NoEmitOnErrorsPlugin(),
    // 优化错误提示
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here http://${host === '0.0.0.0' ? 'localhost' : host}:${port}`],
      },
      onErrors: notifyOnErrors
        ? createNotifierCallback()
        : undefined,
    }),
  ]
}

module.exports = merge(baseWpConfig, extraConfig)
