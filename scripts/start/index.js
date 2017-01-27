#!/usr/bin/env node_modules/.bin/babel-node

import colors from 'colors';
import {
    some
} from 'lodash';
import exec from '../helpers/exec';

console.log('');
console.log('Building and running production server'.blue);

let runCmds = [
    './scripts/build/index.js',
    'node server'
];

if (!some(process.argv, argv => argv === '--skip-tests')) {
    runCmds = [
        './scripts/test/index.js',
        ...runCmds
    ];
}
if (!some(process.argv, argv => argv === '--skip-lint')) {
    runCmds = [
        './scripts/lint/index.js',
        ...runCmds
    ];
}
console.log(runCmds.join('; ').yellow);

runCmds.forEach(runCmd => {
    exec(runCmd, {
        NODE_ENV: 'production',
        NODE_PATH: './src',
        PORT: '4000',
        HOST: '0.0.0.0',
        ...process.env
    });
});

console.log('Done'.green);
