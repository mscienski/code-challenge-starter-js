#!/usr/bin/env node_modules/.bin/babel-node

import colors from 'colors';
import {
    each
} from 'lodash';
import exec from '../../helpers/exec';

console.log('');
console.log('Building and running production server'.blue);

const runCmds = [
    './scripts/build/index.js',
    'node server'
];
console.log(runCmds.join('; ').yellow);

each(runCmds, runCmd => {
    exec(runCmd, {
        NODE_ENV: 'production',
        NODE_PATH: './src',
        PORT: '4000',
        HOST: '0.0.0.0',
        ...process.env
    });
});

console.log('Done'.green);
