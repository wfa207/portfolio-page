'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    bundle: [
      // 'webpack-dev-server/client?http://localhost:8080',
      // 'webpack/hot/only-dev-server', 
      './app/portfolio.js',
      './app/assets.js'
    ],
    style: './assets/less/portfolio.less'
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        // plugins: ['react-hot-loader/babel'],
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!less-loader')
    }]
  }
};
