'use strict';

if (process.env.NODE_ENV === 'production') {
  let child_process = require('child_process');
  child_process.exec('webpack -p --config webpack.production.config.js', (err, stdout, stderr) {
    console.log('stdout: ', stdout);
    console.log('stderr: ', stderr);
    if (err !== null) { console.log('exec error:', err) }
  });
};