'use strict'

###*
 # @ngdoc function
 # @name new1App.controller:UserCtrl
 # @description
 # # UserCtrl
 # Controller of the new1App
###
angular.module 'new1App'
  .controller 'UserCtrl', ->
    @awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
    return