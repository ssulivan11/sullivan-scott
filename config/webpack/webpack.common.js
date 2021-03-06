/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const convert = require('koa-connect')
const history = require('connect-history-api-fallback')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const HtmlWebpackChangeAssetsExtensionPlugin = require('html-webpack-change-assets-extension-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const commonPaths = require('./paths')
const { title, description, canonical, social } = require('../../src/helpers/content')

const NODE_ENV = process.env.NODE_ENV || 'production'
const isProduction = NODE_ENV === 'production'

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=[name].[ext]', // <-- retain original file name
      },
    ],
  },
  serve: {
    add: (app) => {
      app.use(convert(history()))
    },
    content: commonPaths.entryPath,
    dev: {
      publicPath: commonPaths.outputPath,
    },
    open: true,
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'],
  },
  stats: isProduction
    ? {
        assets: true,
        children: false,
        modules: false,
      }
    : 'errors-only',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    isProduction &&
      new CompressionPlugin({
        test: /\.(js|jsx)$/,
        algorithm: 'gzip',
        filename: '[path].gz[query]',
        deleteOriginalAssets: false,
      }),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
      minify: isProduction,
      jsExtension: isProduction ? '.gz' : '.js',
      title,
      description,
      canonical,
      social,
    }),
    isProduction && new HtmlWebpackChangeAssetsExtensionPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
  ].filter(Boolean),
}
