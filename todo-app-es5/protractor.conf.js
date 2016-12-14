'use strict';

// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    './e2e/features/*.feature'
  ],
  cucumberOpts: {
    require: './e2e/steps/**/*.steps.js',
    format: 'pretty'
    // ,tags: '@deletion'
  },

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8080'

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  //,specs: ['./e2e/**/*.js']

  // Options to be passed to Jasmine-node.
  //,jasmineNodeOpts: {
  //  showColors: true,
  //  defaultTimeoutInterval: 30000
  //}
};
