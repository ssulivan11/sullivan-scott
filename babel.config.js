/* eslint-disable @typescript-eslint/explicit-function-return-type */

module.exports = function babelConfig(api) {
  api.cache(true)

  const presets = [
    '@babel/preset-typescript',
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
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-typescript',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-json-strings',
    // 'react-hot-loader/babel',
  ]

  return {
    presets,
    plugins,
  }
}
