const express = require('express')
const expressStaticGzip = require('express-static-gzip')
const compression = require('compression')
const chalk = require('chalk')
const path = require('path')

const app = express()

// Compression
app.use(compression())
app.use(
  '/js',
  expressStaticGzip('build/js', {
    setHeaders(res) {
      res.setHeader('Cache-Control', 'public, max-age=31536000')
      res.setHeader('Service-Worker-Allowed', '/')
    },
  }),
)

app.use(express.static(path.join(__dirname, '/build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/build/index.html`))
})

const port = process.env.PORT || 3001
app.listen(port)

// eslint-disable-next-line no-console
console.log(`\n> Server started on ${chalk.blue(`http://localhost:${port}`)}\n`)
