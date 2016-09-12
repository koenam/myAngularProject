'use strict';

angular.module('myProjectApp')
  .controller('ProjectsController',
  function ($scope, $location, $rootScope, ProjectService, ApplicationCacheFactory) {

    $scope.init = function () {
        var key = ApplicationCacheFactory.get('authkey');
        $scope.actions = [
          {name: 'add'},
          {name: 'update'},
          {name: 'delete'}
        ];
        $scope.listProjects(key);
    };

$scope.listProjects = function (key){
  ProjectService.getProjects(key)
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
