'use strict';

/**
 * @ngdoc filter
 * @name new1App.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the new1App.
 */
angular.module('new1App')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
