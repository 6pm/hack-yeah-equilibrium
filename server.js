const express = require('express')
const https = require('https')
const http = require('http')
const next = require('next')
const { readFileSync } = require('fs')

const port = process.env.PORT || 3000
const hostname = 'localhost'
const app = next({
  dev: process.env.NODE_ENV !== 'production',
  hostname,
  port,
})
const handle = app.getRequestHandler()

const httpsOptions = {
  key: readFileSync('./certificates/key.pem'),
  cert: readFileSync('./certificates/cert.pem'),
}

app
  .prepare()
  .then(() => {
    const expressServer = express()

    expressServer.get('*', (req, res) => handle(req, res))
    expressServer.post('*', (req, res) => handle(req, res))

    const server = process.env.IS_HTTP
      ? http.createServer(httpsOptions, expressServer)
      : https.createServer(httpsOptions, expressServer)

    server.listen(port, (err) => {
      if (err) {
        throw err
      }
      // eslint-disable-next-line
      console.log(`> Ready on https://localhost:${port}`)
    })
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    process.exit(1)
  })
