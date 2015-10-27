/* global module */

// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    basePath: 'app/build',
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ],
    port: 9876,
    captureTimeout: 60000,
    preprocessors: {
      './**/*.js': 'coverage'
    },
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'js/**/*.js'
    ],
    browsers: [
        'PhantomJS'
    ],

    /**
     * How to report, by default.
     */
    reporters: ['coverage', 'dots'],
    coverageReporter: {
      type: 'html',
      dir: '../../coverage/'
    },
    singleRun: true
  });
};
