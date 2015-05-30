'use strict';

var webpack = require('webpack');

var urlLoaderLimitName = '&limit=30000&name=[name].[ext]';

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
      {test: /\.png$/, loader: 'url?mimetype=image/png'+urlLoaderLimitName},
      {test: /\.gif$/, loader: 'url?mimetype=image/gif'+urlLoaderLimitName},
      {test: /\.jpe?g$/, loader: 'url?mimetype=image/jpeg'+urlLoaderLimitName},
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?mimetype=application/font-woff'+urlLoaderLimitName},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?mimetype=application/octet-stream"+urlLoaderLimitName},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?mimetype=image/svg+xml"+urlLoaderLimitName},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=[name].[ext]'}
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
