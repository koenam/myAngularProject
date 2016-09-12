'use strict';

angular.module('myProjectApp').service('ProjectService',
   function ($http) {

  this.getProjects = function (authKey) {
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

  this.removeProject = function  (pk, authKey){
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

  function handleSuccess (response){
    return (response.data);
  }

  function handleError (response){
    $scope.responseError = response;
  }

// return ({
//   getProjects: getProjects
//
//   removeProject: removeProject
//
// });

});
