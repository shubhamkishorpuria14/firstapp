'use strict'






 angular.module('myFirstApp')
    .controller('MainCtrl', ['profileservice', function (profileservice) {
        var vm=this;
       
        vm.title = profileservice.skp();

        vm.fetching = profileservice.fetch("kishorpuria");
                
        vm.fetchinfo = profileservice.fetchData("shubham");
        

    }]);
    
