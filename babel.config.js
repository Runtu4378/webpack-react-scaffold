module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        'modules': false,
        'targets': {
          'browsers': ['> 1%', 'last 2 versions', 'ie >= 11'],
        },
        'useBuiltIns': 'entry',
        'corejs': '2.x',
      }
    ],
    '@babel/preset-react',
    // 'stage-0',
  ]
  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
  ]

  return {
    presets,
    plugins,
  }
}
