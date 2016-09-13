'use strict';

angular.module('myProjectApp')
  .controller('ProjectsController',
  function ($scope, $location, $rootScope, ProjectService, ApplicationCacheFactory) {

   var authKey;
    $scope.init = function () {
        authKey = ApplicationCacheFactory.get('authkey');
        $scope.actions = [
          {name: 'add'},
          {name: 'update'},
          {name: 'delete'}
        ];
        $scope.listProjects(authKey);
    };

    $scope.deleteProject = function (project){
      $scope.currentIndex = $scope.projects.indexOf(project);
      ProjectService.removeProject(project.pk, authKey)
          .then(
          function (value) {
            if ($scope.currentIndex > -1) {
                $scope.projects.splice($scope.currentIndex, 1);
            }
            $scope.projectsTotal = $scope.projects.length;
          },
          function (error) {
              $scope.responseError = error;
          });
    };

$scope.listProjects = function (authKey){
  ProjectService.getProjects(authKey)
      .then(
      function (value) {
          $scope.projects = value;
          $scope.projectsTotal = value.length;
      },
      function (error) {
          $scope.responseError = error;
      });
      };

  $scope.getAction = function (actionName){
    if(actionName === 'update'){

    }else if(actionName === 'delete'){


    }else if(actionName === 'add'){

    }

  };

});
