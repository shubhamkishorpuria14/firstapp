/// <reference path="../app.ts" />

'use strict';

module new1App {
  export interface IUserScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class UserCtrl {

    constructor (private $scope: IUserScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('new1App')
  .controller('UserCtrl', new1App.UserCtrl);
