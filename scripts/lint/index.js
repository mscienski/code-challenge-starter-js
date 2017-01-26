#!/usr/bin/env node_modules/.bin/babel-node

import colors from 'colors';
import exec from '../helpers/exec';

console.log('');
console.log('Linting code'.blue);

const eslintCmd = './node_modules/.bin/eslint -c .eslintrc --quiet src scripts';
console.log(eslintCmd.yellow);

exec(eslintCmd);

console.log('Done'.green);
