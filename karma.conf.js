const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config');
const extend = require('lodash/extend');

const karmaConfig = {
  browsers: ['PhantomJS'],
  singleRun: true,
  frameworks: ['mocha', 'sinon'],
  files: [
    'tests.webpack.js'
  ],
  preprocessors: {
    'tests.webpack.js': [
      'webpack',
      'sourcemap'
    ]
  },
  reporters: ['mocha'],
  plugins: [
    require('karma-webpack'),
    require('karma-mocha'),
    require('karma-phantomjs-launcher'),
    require('karma-sourcemap-loader'),
    require('karma-sinon'),
    require('karma-mocha-reporter')
  ],
  client: {
    captureConsole: true,
    mocha: {
      fullTrace: true
    }
  },
  webpack: extend({}, webpackConfig, {
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }, {
          loader: 'eslint-loader',
          options: {
            failOnError: true,
            failOnWarning: true
          }
        }]
      }]
    },
    resolve: {
      modules: [
        'node_modules',
        'src'
      ],
      extensions: ['.json', '.js']
    }
  }),
  webpackServer: {
    noInfo: true
  }
}

module.exports = function(config) {
  config.set(karmaConfig);
}
