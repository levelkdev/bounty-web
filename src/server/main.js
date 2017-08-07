'use strict'

require('dotenv').config()

const swig = require('swig')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const root = path.resolve(__dirname, '..')

const app = express()

app.enable('trust proxy')
app.set('view engine', 'html')
app.engine('.html', swig.renderFile)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

const port = process.env.PORT
const indexPath = path.join(__dirname, 'index.html')

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../../webpack.config.js')
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/assets/',
    stats: {
      colors: true
    },
    historyApiFallback: true,
    noInfo: true
  }))

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }))

  app.get('*', (req, res, next) => {
    if (req.url.indexOf('assets/') >= 0) {
      next()
    } else {
      res.sendFile(indexPath)
    }
  })
} else {
  app.use('/assets', express.static(path.join(root, '/assets')))
  app.get('*', (req, res) => {
    res.sendFile(indexPath)
  })
}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
