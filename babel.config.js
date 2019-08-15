module.exports = function babelConfig(api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 Chrome versions',
            'last 2 Firefox versions',
            'Safari >= 9',
            'Edge >= 15',
            'ie 11',
            'last 2 Opera versions',
            'Android >= 4.4',
            'last 2 ChromeAndroid versions',
            'last 2 FirefoxAndroid versions',
            'iOS >= 10',
          ],
        },
      },
    ],
    '@babel/preset-react',
  ]

  const plugins = [
    'transform-react-remove-prop-types',
    'transform-react-pure-class-to-function',
    '@babel/plugin-transform-runtime',
    'react-hot-loader/babel',
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-json-strings',
  ]

  return {
    presets,
    plugins,
  }
}
