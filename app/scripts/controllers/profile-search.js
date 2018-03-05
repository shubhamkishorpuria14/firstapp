'use strict';



angular.module('myFirstApp')
  .controller('MainCtrl', function ($scope,$http) {
      var vm = this;

      vm.fetchData = function(user){
        

        $http.get('https://api.github.com/users/' + user).then(function(res){
          vm.header =user;
          vm.data = res;
        });
        $http.get('https://api.github.com/users/' + user + '/repos').then(function(res){
          vm.header =user;
          vm.repositories = res;
        });



      }
     

  });