'use strict';

var webpack = require('webpack');


module.exports = {
  target: 'web',
  entry: './src/entry.js',
  output: {
    path: './dist/js',
    pathInfo: true,
    publicPath: '/js/',
    filename: 'main.js',
    css: 'style.css'
  },
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/}
    ],
    loaders: [
      {test: /\.png$/, loader: 'url?mimetype=image/png'},
      {test: /\.gif$/, loader: 'url?mimetype=image/gif'},
      {test: /\.jpe?g$/, loader: 'url?mimetype=image/jpeg'},
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=30000&minetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=30000&minetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=30000&minetype=image/svg+xml"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}
    ],
    noParse: /\.min\.js/
  },

  resolve: {
    extentions: ['js', 'jsx', 'css', 'less']
  }
  ,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
