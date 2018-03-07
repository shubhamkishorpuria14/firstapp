'use strict'



angular.module('myFirstApp').controller('MainCtrl',function($scope,demoFac,repoFac){
     $scope.fetchData = function(user){
    demoFac.fetch(user).then(function(response){
        $scope.userDetail = response.data;
    });

    repoFac.fetchRepo(user).then(function(response){
       $scope.repoDetail = response.data;
    });
    }

});




