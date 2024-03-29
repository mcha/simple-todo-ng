// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

require('angular');
require('angular-mocks/angular-mocks');
require('./app/index.module.js');

var testsContext = require.context(".", true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
