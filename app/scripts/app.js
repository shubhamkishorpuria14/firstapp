'use strict';

/**
 * @ngdoc overview
 * @name myFirstApp
 * @description
 * # myFirstApp
 *
 * Main module of the application.
 */
angular
  .module('myFirstApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: 'views/home.html'
      })
      .when('/profile', {
        templateUrl: 'views/profile-search.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/repository', {
        templateUrl: 'views/repoSearch.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
