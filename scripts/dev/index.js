#!/usr/bin/env node_modules/.bin/babel-node
import colors from "colors";
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../../webpack.config';

console.log('');
console.log('Running Development Server'.blue);

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, '127.0.0.1', (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log('====>    Webpack development server started at 127.0.0.1:3000');
  }
});
