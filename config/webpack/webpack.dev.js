const webpack = require('webpack')
const boxen = require('boxen')
const chalk = require('chalk')
const commonPaths = require('./paths')

const pckg = require('../../package')
const port = 8081

const webpackSeverMsg = () => {
  const time = `${new Date().getHours()}:${('0' + new Date().getMinutes()).slice(-2)}`
  /* eslint-disable */
  return console.log(
    `\n${boxen(
      `
${chalk.green(`${pckg.name.toUpperCase()} v${pckg.version}                        @${time}`)}
${chalk.grey('---------------------------------------------------\n')}
${chalk.white(`Local HMR Dev Server: `)}${chalk.cyan(`http://localhost:${port}/`)}
`,
      { borderStyle: 'round', padding: 1, borderColor: 'cyan' },
    )}\n`,
  )
  /* eslint-enable */
}

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    port,
    contentBase: commonPaths.outputPath,
    compress: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    {
      apply: (compiler) => {
        compiler.hooks.afterPlugins.tap('afterPlugins', () => {
          webpackSeverMsg(port)
        })
      },
    },
  ],
}
