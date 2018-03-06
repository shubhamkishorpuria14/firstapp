'use strict';

/**
 * @ngdoc function
 * @name myFirstApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myFirstApp
 */
angular.module('myFirstApp')
  .controller('AboutCtrl', function ($scope,$http) {
    

      var my = this;  


      my.fetchRepo = function(repo){
          
          my.title = repo ;   

        $http.get('https://api.github.com/search/repositories?q=' + repo).then(function(d){
          
          my.mydata = d;
        });



      }
  });
