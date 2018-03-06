'use strict';

/**
 * @ngdoc service
 * @name myFirstApp.profileservice
 * @description
 * # profileservice
 * Service in the myFirstApp.
 */


angular.module('myFirstApp')
    .service('profileservice', ['$http', function ($http) {
       
     this.skp = function(){
         return "shubham";
     };
      
     var datainfo="";
     
     this.fetch = function(r){
           return r;
     };
     
     this.fetchData = function(user){
                    $http.get('https://api.github.com/users/' + user).then(function(response){
                          datainfo= response;
                          return datainfo;
                     });

                };
     


    }]);


