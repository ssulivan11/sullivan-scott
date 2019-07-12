const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/build/index.html`))
})

const port = process.env.PORT || 3001
app.listen(port)

// eslint-disable-next-line no-console
console.log(`\n> Server started on http://localhost:${port}\n`)
