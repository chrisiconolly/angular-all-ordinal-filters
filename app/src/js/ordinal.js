/* global angular */

angular
  .module('ordinal', [])

  .filter('ordinal', function () {
    return function (input) {
      var n = input % 100;
      return n === 0 ? input + 'th' : (n < 11 || n > 13) ?
        input + ['st', 'nd', 'rd', 'th'][Math.min((n - 1) % 10, 3)] : input +
          'th';
    };
  })
  .filter('ordinalOnly', function () {
    return function (input) {
      var n = input % 100;
      return n === 0 ? 'th' : (n < 11 || n > 13) ?
        ['st', 'nd', 'rd', 'th'][Math.min((n - 1) % 10, 3)] : 'th';
    };
  });
