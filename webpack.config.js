'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server', 
      './app/portfolio.js',
      './app/assets.js'
    ],
    style: './assets/style'
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/, loader: 'react-hot',
      include: path.join(__dirname, 'app')
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        // plugins: ['react-hot-loader/babel'],
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('css-loader?minimize!less-loader')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css-loader?minimize')
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml' 
    }]
  }
};
