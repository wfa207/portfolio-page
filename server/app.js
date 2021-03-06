'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 7000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (isProduction) {
  app.use('/static', express.static(path.join(__dirname, '../static')));
} else {
  const httpProxy = require('http-proxy');
  let proxy = httpProxy.createProxyServer();
  const devServer = require('./webpackDevServer');
  devServer();

  app.use('/', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });

  proxy.on('error', (err) => {
    console.log('Could not connect to proxy; ERROR:');
    console.error(err);
  });
}

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../index.html')));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err);
});

app.listen(port, function() {
  console.log('Server is listening on port ' + port);
});
