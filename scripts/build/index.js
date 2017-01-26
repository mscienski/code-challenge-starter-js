#!/usr/bin/env node_modules/.bin/babel-node

import colors from 'colors';
import exec from '../helpers/exec';

console.log('');
console.log('Running production build'.blue);

const buildCmd = './node_modules/.bin/webpack --verbose --colors --display-error-details --config webpack.config.production.js';
console.log(buildCmd.yellow);

exec(buildCmd, {
    NODE_ENV: 'production',
    NODE_PATH: './src',
    PORT: '4000',
    HOST: '0.0.0.0',
    ...process.env
});

console.log('Done'.green);
