'use strict';

/**
 * @ngdoc service
 * @name new1App.routerservice
 * @description
 * # routerservice
 * Service in the new1App.
 */
angular.module('myFirstApp')
  .service('routerservice', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
     var repoinfo = "";
     this.fetchRepo = function(repo){
                    $http.get('https://api.github.com/search/repository/' + repo).then(function(response){
                          repoinfo= response;
                          return repoinfo;
                     });

                };
     





  }]);
