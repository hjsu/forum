var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

const externals = nodeExternals();
module.exports = [
  {
    name: 'api',
    target: 'node',
    devtool: 'inline-source-map',
    externals: [externals],
    entry: './api/index.ts',
    output: {
      path: __dirname + '/dist',
      filename: 'api.js',
    },
    module: {
      rules: [
        {
          test: /.ts$/,
          loader: 'ts-loader?configFile=tsconfig.json',
          exclude: /node_modules/,
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
  },
  {
    name: 'app',
    target: 'node',
    devtool: 'inline-source-map',
    entry: './app.ts',
    output: {
      path: __dirname + '/dist',
      filename: 'app.js',
    },
    externals: externals,
    module: {
      rules: [
        {
          test: /.ts$/,
          loader: 'ts-loader?configFile=tsconfig.json',
          exclude: /node_modules/,
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
  },
  {
    name: 'frontend',
    entry: './src/application.tsx',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    output: {
      path: __dirname + '/public/javascripts',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
            test: /.j|ts(x?)$/,
            loader: 'ts-loader?configFile=tsconfig.frontend.json',
            exclude: /node_modules/,
        }
      ]
    }
  }
]
