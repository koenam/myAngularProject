'use strict';

/**
 * @ngdoc function
 * @name myProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myProjectApp
 */
angular.module('myProjectApp')
  .controller('MainCtrl', function ($scope, $location,  AuthenticationService) {
    $scope.credentials = {};

    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    $scope.loginUser = function (credentials) {
        var requestParameters = {
            username: credentials.username,
            password: credentials.password
        };
        AuthenticationService.userAuthentication(requestParameters)
            .then(
            function (value) {
                $rootScope.authenticated = true;
                $scope.response = value.content;
                $location.path('/projects');
            },
            function (error) {
                $scope.responseError = error;
            });
    };
  });
