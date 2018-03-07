'use strict';

/**
 * @ngdoc function
 * @name myFirstApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myFirstApp
 */


angular.module('myFirstApp').controller('AboutCtrl',function($scope,demoFac){
      
       $scope.fetchData = function(repo){
      
                    demoFac.fetch(repo).then(function(response){
                    $scope.userDetail = response.data;
                 });
    }

});





