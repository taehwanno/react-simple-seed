const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const ManifestPlugin = require('webpack-manifest-plugin');

const paths = {
  build: path.resolve(__dirname, 'build')
};

module.exports = {
  output: {
    chunkFilename: '[name].[chunkhash].js',
    filename: 'app.bundle-[chunkhash].js',
    path: paths.build,
    publicPath: paths.build
  },
  plugins: [
    new CleanWebpackPlugin(['build/*'], {
      verbose: true,
      dry: false,
    }),
    new ExtractTextPlugin('app.bundle-[chunkhash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].bundle-[chunkhash].js',
      minChunks: Infinity
    }),
    new WebpackMd5Hash(),
    new ManifestPlugin(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  devtool: 'cheap-module-source-map',
};
