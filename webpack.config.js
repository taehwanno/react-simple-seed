const path = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');

const target = process.env.npm_lifecycle_event;

const common = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      './js/app.jsx'
    ],
    vendor: ['react', 'react-dom']
  },
  // eslint: {
  //   configFile: './.eslintrc',
  //   emitWarning: true,
  //   failOnError: true
  // },
  module: {
    preLoaders: [
      // {
      //   test: /\.jsx?$/,
      //   exclude: /(node_modules|bower_components)/,
      //   include: path.join(__dirname, 'js'),
      //   loader: 'eslint-loader'
      // }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'js'),
        loaders: ['react-hot', 'babel-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap')
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      favicon: path.join(__dirname, 'favicon.ico'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {
      'css': path.join(__dirname, 'css'),
      'images': path.join(__dirname, 'images')
    },
    extensions: ['', '.js', '.jsx']
  },
  stats: {
    colors: true,
    reasons: true
  }
};

let config;

if (target === 'build') {
  config = webpackMerge(common, prodConfig);
} else {
  config = webpackMerge(common, devConfig);
}

module.exports = config;
