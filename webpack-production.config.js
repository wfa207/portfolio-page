'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    bundle: [
      './app/portfolio.js',
      './app/assets.js'
    ],
    style: './assets/style'
  },
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [{
      test: /.*\.(gif|png|jpe?g|svg)$/i,
      exclude: /(node_modules)/,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack'
      ]
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['react-hot-loader/babel']
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
