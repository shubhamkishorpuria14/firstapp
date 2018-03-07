'use strict';

/**
 * @ngdoc service
 * @name myFirstApp.routerservice
 * @description
 * # routerservice
 * Service in the myFirstApp.
 */
angular.module('myFirstApp')
  .factory("demoFac", ['$http',function($http){ 
    // AngularJS will instantiate a singleton by calling "new" on this function
   var obj = {};
    
    obj.fetch = function(repo){ 
        return $http.get('https://api.github.com/search/repositories?q=' +repo);
    }
   
 return obj;
 
}]);


 
