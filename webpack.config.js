const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const prod = process.env.NODE_ENV === 'production'

let conf = {
  output: {
    filename: 'bundle.js',
    publicPath: '/assets/',
    path: path.resolve(__dirname, 'assets')
  },
  entry: [
    './src/client/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: prod ? '[hash:base64]' : '[local]-[hash:base64:5]'
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    symlinks: false,
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'src/client'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  plugins: [
    new CompressionPlugin()
  ]
}

if (prod) {
  conf.plugins.push(new UglifyJSPlugin())
} else {
  conf.plugins.push(new webpack.HotModuleReplacementPlugin())
  conf.plugins.push(new webpack.NoEmitOnErrorsPlugin())
  conf.devtool = 'cheap-module-eval-source-map'
  conf.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000')
}

module.exports = conf
