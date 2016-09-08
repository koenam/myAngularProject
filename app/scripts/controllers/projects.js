'use strict';

angular.module('myProjectApp')
  .controller('ProjectsController', function ($scope, $location,  ProjectsService) {

    $scope.init = function () {
        $scope.projects = undefined;
        $scope.projectsTotal = 0;
    };

    $scope.getProjects = function (credentials) {

        ProjectsService.getProjects()
            .then(
            function (value) {

            },
            function (error) {
                $scope.responseError = error;
            });
    };
  });
