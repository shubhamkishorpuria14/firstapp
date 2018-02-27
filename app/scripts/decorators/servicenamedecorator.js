'use strict';

/**
 * @ngdoc function
 * @name new1App.decorator:Servicename
 * @description
 * # Servicename
 * Decorator of the new1App
 */
angular.module('new1App')
  .config(function ($provide) {
    $provide.decorator('servicename', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  });
