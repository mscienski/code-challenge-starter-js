#!/usr/bin/env node_modules/.bin/babel-node
import colors from 'colors';
import exec from '../helpers/exec';

console.log('');
console.log('Running Development Server'.blue);

const execCmd = 'node server';
console.log(execCmd.yellow);

exec(execCmd, {
    NODE_ENV: 'development',
    NODE_PATH: './src',
    HOST: 'localhost',
    PORT: 3000,
    ...process.env
});

console.log('Done'.green);
