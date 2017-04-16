const webpack = require('webpack'),
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = (proccess.env.NODE_ENV || 'development') === 'production';

const paths = {
  js: path.revolve(__dirname, 'public/js'),
  css: path.resolve(__dirname, 'public/css')
}

let config = {};

config.entry = './app/app.js';

config.output = {
  path: paths.js,
  filename: 'bundle.js'
};

config.module = {
  loaders: [
    {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015','react']}},
    {test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})}
  ]
};

config.plugins = [];

config.plugins.push(new ExtractTextPlugin(paths.css + '/style.css'));

if (isProduction) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  );
}

module.exports = config;