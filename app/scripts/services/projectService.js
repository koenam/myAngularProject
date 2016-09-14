'use strict';

angular.module('myProjectApp').service('ProjectService',
   function ($http, ApplicationCacheFactory) {

  this.getProjects = function () {
    var authKey = ApplicationCacheFactory.get('authkey');
      var headers =  {
                 'Authorization': authKey,
                 'Content-Type': 'application/json'

         };

         var request = $http({
           method:"get",
           headers: headers,
           url:"http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/"
         });

      return(request.then(handleSuccess, handleError));
  };

  this.removeProject = function  (pk){
    var authKey = ApplicationCacheFactory.get('authkey');
    var headers =  {
               'Authorization': authKey,
               'Content-Type': 'application/json'

       };

       var request = $http({
         method:"delete",
         headers: headers,
         url:"http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/"+pk+"/"
       });

    return(request.then(handleSuccess, handleError));

  };

  this.addProject = function  (project){
var authKey = ApplicationCacheFactory.get('authkey');
    var headers =  {
               'Authorization': authKey,
               'Content-Type': 'application/json'
       };

       var payload = {
            "title": project.title,
            "description": project.description,
            "start_date": project.start_date,
            "end_date": project.end_date,
            "is_billable": project.is_billable,
            "is_active": project.is_active
          };

       var request = $http({
         method:"post",
         headers: headers,
         data: payload,
         url:"http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/"
       });

    return(request.then(handleSuccess, handleError));

  };

  this.updateProject = function  (project){
    var authKey = ApplicationCacheFactory.get('authkey');
    var headers =  {
               'Authorization': authKey,
               'Content-Type': 'application/json'

       };
       var payload = {
            "title": project.title,
            "description": project.description,
            "start_date": project.start_date,
            "end_date": project.end_date,
            "is_billable": project.is_billable,
            "is_active": project.is_active
          };

       var request = $http({
         method:"put",
         headers: headers,
         data: payload,
         url:"http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/"+project.pk+"/"
       });

    return(request.then(handleSuccess, handleError));

  };

  function handleSuccess (response){
    return (response.data);
  }

  function handleError (response){
    $scope.responseError = response;
  }

});
