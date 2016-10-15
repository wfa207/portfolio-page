'use strict';

const express = require('express');
const path = require('path');
let app = express();
let bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../assets')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../views/index.html')));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err);
});

app.listen(7000, function() {
  console.log('Server is listening on port 7000!');
});
