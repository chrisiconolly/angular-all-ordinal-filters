/* global describe, beforeEach, module, inject, it, expect, jasmine, console */

/**
 * Using - a data provider method for jasmine unit tests.
 * Source: http://blog.jphpsf.com/2012/08/30/drying-up-your-javascript-jasmine-tests
 *
 * @param string name
 *   Name to give to the "using" block. This will be used in the test
 *   description
 * @param mixed values
 *   Arguments to pass through to the data provider iteration.
 *   The iteration can take multiple arguments bu providing an array.
 * @param function func
 *   The data provider iteration, put your unit tests in this block.
 */
function using(name, values, func) {
  for (var i = 0, count = values.length; i < count; i++) {
    if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
      values[i] = [values[i]];
    }
    func.apply(this, values[i]);
    jasmine.currentEnv_.currentSpec.description += ' (with "' + name +
      '" using ' + values[i].join(', ') + ')';
  }
}


describe('Ordinal filters', function () {

  var $filter;

  beforeEach(function () {
    module('ordinal');
    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  var ordinalDataProvider = [
    [1, 'st'],
    [2, 'nd'],
    [3, 'rd']
  ];

  using('number ordinals', ordinalDataProvider, function (number, expected) {
    it('should return "st" for the number ' + number, function () {
      // Act.
      var result = $filter('ordinal')(number, 'ordinal');

      // Assert.
      expect(result).toEqual(expected);
    });
  });
});