const path = require('path');
const webpack = require('webpack');
const host = (process.env.HOST);
const port = parseInt(process.env.PORT, 10) + 1;

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: 'http://' + host + ':' + port + '/dist/'
  }
};
