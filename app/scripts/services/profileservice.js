'use strict';

/**
 * @ngdoc service
 * @name myFirstApp.profileservice
 * @description
 * # profileservice
 * Service in the myFirstApp.
 */


angular.module('myFirstApp')
  .factory("demoFac", ['$http',function($http){  
    var obj = {};
    
    obj.fetch = function(user){ 
        return $http.get('https://api.github.com/users/' +user);
    }
   
 return obj;
 
   }])
  .factory("repoFac", ['$http',function($http){ 
       var obj = {};
    
     obj.fetchRepo= function(user){ 
        return $http.get('https://api.github.com/users/' +user+ '/repos');
    }
   
 return obj;
 
   }])  	

  




