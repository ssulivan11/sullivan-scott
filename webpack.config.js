/* eslint-disable @typescript-eslint/no-var-requires */
const webpackMerge = require('webpack-merge')
const common = require('./config/webpack/webpack.common')

const envs = {
  development: 'dev',
  production: 'prod',
}
/* eslint-disable global-require,import/no-dynamic-require */
const env = envs[process.env.NODE_ENV || 'development']
const envConfig = require(`./config/webpack/webpack.${env}.js`)

module.exports = webpackMerge(common, envConfig)
