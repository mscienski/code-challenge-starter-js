#!/usr/bin/env node_modules/.bin/babel-node

import colors from 'colors';
import exec from '../helpers/exec';

console.log('');
console.log('Running unit tests'.blue);

const karmaCmd = './node_modules/.bin/karma start';
console.log(karmaCmd.yellow);

exec(karmaCmd);

console.log('Done'.green);
