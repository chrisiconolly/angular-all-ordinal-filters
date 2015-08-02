/* global angular */

angular
  .module('ordinal', [])

  .filter('salmanOrdinal', function () {
    return function (input) {
      var j = input % 10,
        k = input % 100;
      if (j === 1 && k !== 11) {
        return "st";
      }
      if (j === 2 && k !== 12) {
        return "nd";
      }
      if (j === 3 && k !== 13) {
        return "rd";
      }
      return "th";
    };
  })

  .filter('nickOrdinal', function () {
    return function (input) {
      var array = ("" + input).split("").reverse();

      if (array[1] !== "1") {
        switch (array[0]) {
          case "1":
            return "st";
          case "2":
            return "nd";
          case "3":
            return "rd";
        }
      }

      return "th";
    };
  })

  .filter('johnnyOrdinalModified', function () {
    return function (input) {
      var n = input % 100;
      return n === 0 ? 'th' : (n < 11 || n > 13) ?
        ['st', 'nd', 'rd', 'th'][Math.min((n - 1) % 10, 3)] : 'th';
    };
  });