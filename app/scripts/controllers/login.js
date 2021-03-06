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

    $scope.loginUser = function (credentials) {
        var requestParameters = {
            username: credentials.username,
            password: credentials.password
        };
        AuthenticationService.userAuthentication(requestParameters)
            .then(
            function (value) {

                ApplicationCacheFactory.put('authkey',value.token);
                $scope.authToken = value.token;
                $location.path('/projects');
            },
            function (error) {
                $scope.responseError = error;
            });
    };

  });
