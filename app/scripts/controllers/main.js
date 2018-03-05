'use strict';

/**
 * @ngdoc function
 * @name myFirstApp.controller:MainCtrl



$scope.ProfileComponent = @class  (function () {
    function ProfileComponent(_githubService) {
        var _this = this;
        this._githubService = _githubService;
        this._githubService.getUser().subscribe(function (user) {
            console.log(user);
            _this.user = user;
        });
        this._githubService.getRepos().subscribe(function (repos) {
            console.log(repos);
            _this.repos = repos;
        });
    }
    ProfileComponent.prototype.searchUser = function () {
        var _this = this;
        this._githubService.updateUser(this.username);
        this._githubService.getUser().subscribe(function (user) {
            console.log(user);
            _this.user = user;
        });
        this._githubService.getRepos().subscribe(function (repos) {
            console.log(repos);
            _this.repos = repos;
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            templateUrl: 'profile.component.html'
        }),
        __metadata("design:paramtypes", [github_service_1.GithubService])
    ], ProfileComponent);
    return ProfileComponent;
}());







 * @description
 * # MainCtrl
 * Controller of the myFirstApp

       $scope.getUser=function(){
            return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
         }

       $scope.getRepos=function(){
            return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
         }

       $scope.updateUser=function(username:string){
            this.username = username;
         }
    


  	  $scope.todos = ['item1','item2'];
      $scope.df= ['shubham','rohan'];
      $scope.addTodo = function(){
           $scope.todos.push($scope.todo);
           $scope.todo='';
      };
      $scope.removeTodo = function(index){
         $scope.todos.splice(index,1);
      };
      $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });

      $http.get('https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000').
        then(function(response) {
            $scope.mydata = response.data;
        });  
      $http.get('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc').
        then(function(response) {
            $scope.demo = response.data;
        });       

       











 */
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








