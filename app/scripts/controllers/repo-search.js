'use strict';

/**
 * @ngdoc function
 * @name myFirstApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myFirstApp
 */
angular.module('myFirstApp')
  .controller('AboutCtrl', ['routerservice', function (routerservice) {
    

      var my = this;  
      my.repoData = routerservice.fetchRepo('angular');
      
     
  }]);
