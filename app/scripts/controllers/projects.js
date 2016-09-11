'use strict';

angular.module('myProjectApp')
  .controller('ProjectsController',
  function ($scope, $location, $rootScope, ProjectService) {

    $scope.init = function () {
        // $scope.projects = undefined;
        $scope.projectsTotal = 0;
        var key = '71456dbd15de0c0b6d2b4b44e5a92ad94c6def97';
        $scope.listProjects(key);
    };

$scope.listProjects = function (key){
  ProjectService.getProjects(key)
      .then(
      function (value) {
          $scope.projects = value;
      },
      function (error) {
          $scope.responseError = error;
      });
};
  });
