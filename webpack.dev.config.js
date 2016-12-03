const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

const paths = {
  build: path.join(__dirname, 'build')
};

module.exports = {
  devServer: {
    contentBase: paths.build,
    historyApiFallback: true,
    hot: true,
    port: 3000,
    proxy: {
      "*": "http://localhost:3000"
    }
  },
  devtool: 'eval-source-map',
  output: {
    filename: 'app.bundle.js',
    path: paths.build,
    pathinfo: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('app.bundle.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].bundle.js',
      minChunks: Infinity
    }),
    new WebpackBrowserPlugin()
  ]
};
