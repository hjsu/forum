// For the backend config, consult
// http://jlongster.com/Backend-Apps-with-Webpack--Part-I
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });

var config = [
  {
    name: 'frontend',
    entry: path.join(__dirname + '/src/application.jsx'),
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/public/javascripts',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
      {
        test: /.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2017', 'react']
        }
      }
      ]
    }
  },
  {
    name: 'server',
    target: 'node',
    entry: path.join(__dirname + '/app.js'),
    node: {
      __filename: true,
      __dirname: true
    },
    output: {
      path: __dirname + '/dist',
      filename: 'app.js',
    },
    externals: nodeModules,
    module: {
      loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2017', 'react']
        }
      }
      ]
    }
  }
];

module.exports = config;
