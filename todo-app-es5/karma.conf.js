module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [
      'jasmine'
    ],

    reporters: [
      'spec',
      'coverage'
    ],

    files: [
      'src/tests.webpack.js'
    ],

    preprocessors: {
      'src/tests.webpack.js': ['webpack', 'sourcemap']
    },

    browsers: [
      'PhantomJS2'
    ],

    singleRun: true,

    coverageReporter: {
      dir: 'build/coverage/',
      type: 'html'
    },

    webpack: require('./webpack.test'),
    webpackMiddleware: {
      noInfo: true
    },

    phantomjsLauncher: {
      exitOnResourceError: true
    }
  });
};
