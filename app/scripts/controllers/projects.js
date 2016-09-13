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
        $scope.listProjects();
    };

    $scope.deleteProject = function (project){
      $scope.currentIndex = $scope.projects.indexOf(project);
      ProjectService.removeProject(project.pk)
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

$scope.listProjects = function (){
  ProjectService.getProjects()
      .then(
      function (value) {
          $scope.projects = value;
          $scope.projectsTotal = value.length;
      },
      function (error) {
          $scope.responseError = error;
      });
    };

    $scope.editProject = function (project){
      $scope.selected = angular.copy(project);
      $scope.editing = true;
    };

    $scope.reset = function () {
       $scope.selected = {};
   };

    $scope.updateProject = function (project){
      ProjectService.updateProject(project)
      .then(
        function(value){
          $scope.projectsTotal = value.length;
          $scope.editing = false;
        },
        function(error){
          $scope.responseError = error;
        });
    };

    $scope.createProject = function (){
      $scope.adding =true;
      };

      $scope.cancel = function (){
        $scope.adding =false;
        };

    $scope.addProject = function (project){

        ProjectService.addProject(project)
      .then(
        function(value){
          $scope.projects.push(project);
          $scope.projectsTotal = $scope.projects.length;
          $scope.adding = false;

        },
        function(error){
          $scope.responseError = error;
        });
    };

    $scope.showEditRow = function (project) {
    if ($scope.active != project) {
      $scope.active = project;
    }
    else {
      $scope.active = null;
    }
  };

  $scope.getAction = function (actionName){
    if(actionName === 'update'){

    }else if(actionName === 'delete'){


    }else if(actionName === 'add'){

    }

  };

});
