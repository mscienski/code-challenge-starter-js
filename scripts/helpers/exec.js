#!/usr/bin/env node_modules/.bin/babel-node
const execSync = require('child_process').execSync;

const exec = (command, env) => execSync(command, { stdio: 'inherit', env, encoding: 'utf8' });

export default exec;
