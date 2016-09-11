'use strict';

/**
 * @ngdoc function
 * @name myProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myProjectApp
 */
angular.module('myProjectApp')
  .controller('LoginController',
  function ($scope, $location,  AuthenticationService, ApplicationCacheFactory) {
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

                ApplicationCacheFactory.put('authkey',value.token);
                console.log("authkey"+ApplicationCacheFactory.get('authkey'));
                $scope.authToken = value.token;
                $location.path('/projects');
            },
            function (error) {
                $scope.responseError = error;
            });
    };

  });
