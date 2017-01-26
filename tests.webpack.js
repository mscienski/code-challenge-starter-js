const chai = require('chai');

chai.config.truncateThreshold = 0;
chai.config.includeStack = true;
chai.use(require('chai-subset'));
chai.use(require('sinon-chai'));
require('babel-polyfill');

var contextualRequire = require.context('./src', true, /\.test\.js$/);
contextualRequire.keys().forEach(contextualRequire);
