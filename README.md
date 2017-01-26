# code-challenge-starter-js
Starter pack for code challenges or short projects in JS

## Windows
Vagrantfile is provided for running on windows. This is because the syntax for
scripts is incompatible between environments when setting environmental variables.

Run `vagrant up` in an administrator shell (or Git Bash as administrator).
Use the administrator shell because the [no-bin-links](https://github.com/npm/npm/issues/9901)
flag breaks the node packages.

Run commands from within vagrant after `vagrant ssh` inside the `/vagrant` directory.

## Lint
`npm run lin` will run eslint

## Tests
`npm run test` will run Karma

## Sanity
`npm run sanity` will run eslint and Karma

## Development server
`npm run dev` will build the app with webpack and run a dev server on port 3000.
When using Vagrant, the host port will be 8083

## Production build/server
`npm run start` will build the app with webpack with production settings and run
an http server on port 4000.
When using Vagrant, the host port will be 8084.
