const path = require('path');

let config = {};

config.entry = './app/app.js';

config.output = {
  path: path.resolve(__dirname, 'public/js'),
  filename: 'bundle.js'
};

config.module = {
  loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          'es2015',
          'react'
        ]
      }
    }
  ]
};

module.exports = config;