'use strict';

angular.module('myProjectApp').service('ProjectService',
   function ($http) {

function getProjects (key) {
            var headers =  {
                       'Authorization': key,
                       'Content-Type': 'application/json'

               };

               var request = $http({
                 method:"get",
                 headers: headers,
                 url:"http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/"
               });

            return(request.then(handleSuccess, handleError));
}

function handleSuccess (response){
  return (response.data);
}

function handleError (response){
  $scope.responseError = response;
}

return ({
  getProjects: getProjects

});

});
