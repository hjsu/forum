var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

const externals = nodeExternals();
module.exports = [
  {
    name: 'api',
    target: 'node',
    externals: [externals],
    entry: './api/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'api.js',
    },
    module: {
      rules: [
        {
          test: /.js$/,
          loader: 'babel-loader',
          query: {
            presets: [['@babel/preset-env', {"targets": {"node": "current"}}]]
          },
          exclude: /node_modules/,
        }
      ]
    }
  },
  {
     name: 'app',
     target: 'node',
     entry: './app.js',
     output: {
       path: __dirname + '/dist',
       filename: 'app.js',
     },
     externals: externals,
     module: {
       rules: [
         {
          test: /.js$/,
          loader: 'babel-loader',
          query: {
            presets: [['@babel/preset-env', {"targets": {"node": "current"}}]]
          },
          exclude: /node_modules/,
         }
       ]
     }
   
  },
  {
    name: 'frontend',
    entry: './src/application.jsx',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    output: {
      path: __dirname + '/public/javascripts',
      filename: 'bundle.js'
    },
    module: {
      rules: [
      {
        test: /.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
      ]
    }
  }
]
