'use strict';

var config = require('./webpack.base.config.js');

config.devtool = '#source-map';

config.devServer = {
  contentBase: 'src',
  https: false,
  stats: {
    colors: true
  },
  historyApiFallback: true
};

config.module.loaders = config.module.loaders.concat([
  {test: /\.jsx?$/, loaders: [
    //'react-hot',
    'babel',
    'flowcheck',
    'babel?blacklist=flow&optional=runtime'],
    exclude: /node_modules/},
  {test: /\.css$/, loader: 'style!css?importLoaders=1'},
  {test: /\.less$/, loader: 'style!css?importLoaders=1!less?sourceMap'}
]);

module.exports = config;
