'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 7000;
let app = express();

app.use('/static', express.static(path.join(__dirname, '../static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../index.html')));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err);
});

app.listen(port, function() {
  console.log('Server is listening on port ' + port + '!');
});
