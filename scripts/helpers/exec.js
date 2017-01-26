const execSync = require('child_process').execSync;

const exec = (command, env) => execSync(command, { stdio: 'inherit', env, encoding: 'utf8' });

export default exec;
