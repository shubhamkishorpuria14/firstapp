'use strict';

/**
 * @ngdoc service
 * @name myFirstApp.profileservice
 * @description
 * # profileservice
 * Service in the myFirstApp.
 */



angular.module('myFirstApp')
  .service('Myservice', function ($scope,$http) {

        var my=function(user){
        	 $http.get('https://api.github.com/users/' + user).then(function(res){
          vm.header =user;
          vm.data = res;
        });
        }

       



      });



