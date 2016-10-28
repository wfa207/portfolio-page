'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const httpProxy = require('http-proxy');
const webpackConfig = require('../webpack.config.js');

let proxy = httpProxy.createProxyServer();
let app = express();

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 7000;
const publicBuildPath = webpackConfig.output.publicPath + '*';

if (isProduction) {
  app.use('/static', express.static(path.join(__dirname, '../static')));
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (!isProduction) {
  const devServer = require('./webpackDevServer');
  devServer();

  app.use('/', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../index.html')));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err);
});

proxy.on('error', (err) => {
  console.log('Could not connect to proxy; ERROR:');
  console.error(err);
});

app.listen(port, function() {
  console.log('Server is listening on port ' + port);
});
