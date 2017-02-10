'use strict';

let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'dist');
let APP_DIR = path.resolve(__dirname, 'src');

// console.log("path.resolve()", path.resolve());
// console.log("path.resolve(__dirname)", path.resolve(__dirname));
// console.log("BUILD_DIR", BUILD_DIR);


let config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      },
      {test: /\.css/, loader: 'style-loader!css-loader'},
      {test: /\.less$/, loader: 'style!css!less'},
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // 'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
};

module.exports = config;