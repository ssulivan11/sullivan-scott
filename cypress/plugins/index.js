/* eslint-disable no-console, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-var-requires */

const percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
  on('task', percyHealthCheck)
}
