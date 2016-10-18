'use strict';

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config.js');
const path = require('path');

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost', (err, result) => {
  
  if (err) { return console.log(err); }

  console.log('Listening at http://localhost:8080');
});
