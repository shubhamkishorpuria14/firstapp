'use strict';

/**
 * @ngdoc directive
 * @name new1App.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('new1App')
  .directive('myDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective directive');
      }
    };
  });
