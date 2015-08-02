/* global describe, beforeEach, module, inject, it, expect, jasmine */

/**
 * Using - a data provider method for jasmine unit tests.
 * Source:
 *   http://blog.jphpsf.com/2012/08/30/drying-up-your-javascript-jasmine-tests
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
    [3, 'rd'],
    [4, 'th'],
    [5, 'th'],
    [6, 'th'],
    [7, 'th'],
    [8, 'th'],
    [9, 'th'],
    [10, 'th'],
    [11, 'th'],
    [12, 'th'],
    [13, 'th'],
    [14, 'th'],
    [15, 'th'],
    [16, 'th'],
    [17, 'th'],
    [18, 'th'],
    [19, 'th'],
    [20, 'th'],
    [21, 'st'],
    [22, 'nd'],
    [23, 'rd'],
    [24, 'th'],
    [25, 'th'],
    [26, 'th'],
    [27, 'th'],
    [28, 'th'],
    [29, 'th'],
    [30, 'th'],
    [31, 'st'],
    [32, 'nd'],
    [33, 'rd'],
    [34, 'th'],
    [35, 'th'],
    [36, 'th'],
    [37, 'th'],
    [38, 'th'],
    [39, 'th'],
    [40, 'th'],
    [41, 'st'],
    [42, 'nd'],
    [43, 'rd'],
    [44, 'th'],
    [45, 'th'],
    [46, 'th'],
    [47, 'th'],
    [48, 'th'],
    [49, 'th'],
    [50, 'th'],
    [51, 'st'],
    [52, 'nd'],
    [53, 'rd'],
    [54, 'th'],
    [55, 'th'],
    [56, 'th'],
    [57, 'th'],
    [58, 'th'],
    [59, 'th'],
    [60, 'th'],
    [61, 'st'],
    [62, 'nd'],
    [63, 'rd'],
    [64, 'th'],
    [65, 'th'],
    [66, 'th'],
    [67, 'th'],
    [68, 'th'],
    [69, 'th'],
    [70, 'th'],
    [71, 'st'],
    [72, 'nd'],
    [73, 'rd'],
    [74, 'th'],
    [75, 'th'],
    [76, 'th'],
    [77, 'th'],
    [78, 'th'],
    [79, 'th'],
    [80, 'th'],
    [81, 'st'],
    [82, 'nd'],
    [83, 'rd'],
    [84, 'th'],
    [85, 'th'],
    [86, 'th'],
    [87, 'th'],
    [88, 'th'],
    [89, 'th'],
    [90, 'th'],
    [91, 'st'],
    [92, 'nd'],
    [93, 'rd'],
    [94, 'th'],
    [95, 'th'],
    [96, 'th'],
    [97, 'th'],
    [98, 'th'],
    [99, 'th'],
    [100, 'th'],
    [101, 'st'],
    [102, 'nd'],
    [103, 'rd'],
    [104, 'th'],
    [105, 'th'],
    [106, 'th'],
    [107, 'th'],
    [108, 'th'],
    [109, 'th'],
    [110, 'th'],
    [111, 'th'],
    [112, 'th'],
    [113, 'th'],
    [114, 'th'],
    [115, 'th'],
    [116, 'th'],
    [117, 'th'],
    [118, 'th'],
    [119, 'th'],
    [120, 'th'],
    [121, 'st'],
    [122, 'nd'],
    [123, 'rd'],
    [124, 'th'],
    [1000, 'th'],
    [1001, 'st'],
    [1002, 'nd'],
    [1003, 'rd'],
    [1004, 'th'],
    [1005, 'th'],
    [1006, 'th'],
    [1007, 'th'],
    [1008, 'th'],
    [1009, 'th'],
    [1010, 'th'],
    [1011, 'th'],
    [1012, 'th'],
    [1013, 'th'],
    [1014, 'th'],
    [1015, 'th'],
    [1016, 'th'],
    [1017, 'th'],
    [1018, 'th'],
    [1019, 'th'],
    [1020, 'th'],
    [1021, 'st'],
    [1022, 'nd'],
    [1023, 'rd'],
    [1024, 'th']
  ];

  using('number ordinals', ordinalDataProvider, function (number, expected) {
    it('should return correct oridinals when testing ordinal test 1',
      function () {
        // Act.
        var result = $filter('ordinaltest1')(number, 'ordinaltest1');

        // Assert.
        expect(result).toEqual(expected);
      });

    it('should return correct oridinals when testing ordinal test 2',
      function () {
        // Act.
        var result = $filter('ordinaltest2')(number, 'ordinaltest2');

        // Assert.
        expect(result).toEqual(expected);
      });
  });
});