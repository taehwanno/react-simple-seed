'use strict';

const path = require('path');

module.exports = function (config) {
  let browsers = ['Chrome'];
  let reporters = ['mocha'];
  let preprocessors = ['webpack', 'sourcemap'];
  let preLoaders = [];
  let isparta = {};

  if (config.coverage) {
    browsers = ['PhantomJS'];
    reporters = ['mocha', 'coverage'];
    preprocessors = ['webpack'];
    preLoaders = [
      {
        test: /\.jsx?$/,
        exclude: /(test|node_modules|\.spec)/,
        loader: 'isparta'
      }
    ];
    isparta = {
      embedSource: true,
      noAutoWrap: true,
      babel: {
        presets: ['es2015', 'react', 'stage-0']
      }
    };
  }

  config.set({
    babel: {
      presets: ['es2015', 'react', 'stage-0']
    },
    browsers: browsers,
    // karma only needs to know about the test bundle
    coverageReporter: {
      type: 'html',
      dir: 'coverage'
    },
    files: [
      './js/*.spec.js',
      './js/**/*.spec.js'
    ],
    frameworks: ['mocha', 'chai'],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],
    preprocessors: {
      'js/*.spec.js': preprocessors,
      'js/**/*.spec.js': preprocessors
    },
    reporters: reporters,
    singleRun: config.coverage || config.singleRun,
    // webpack config object
    webpack: {
      devtool: 'inline-source-map',
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      isparta: isparta,
      module: {
        preLoaders: preLoaders,
        loaders: [
          {
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            test: /\.jsx?$/,
            query: {
              presets: ['airbnb']
            }
          }
        ]
      },
      resolve: {
        extensions: ['', '.js', '.jsx']
      }
    },
    webpackServer: {
      noInfo: true
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};
