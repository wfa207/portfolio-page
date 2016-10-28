'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config.js');
const path = require('path');

module.exports = () => {
  let bundleStart;
  let compiler = Webpack(config);

  compiler.plugin('compile', () => {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('done', () => {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
    console.log('Development server is running on http://localhost:8080');
  });

  let devServer = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    stats: {
      colors: true
    }
  });

  devServer.listen(8080, 'localhost', () => console.log('Bundling project; please wait...'));
};
