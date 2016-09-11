'use strict';

angular.module('myProjectApp').service('ProjectService',
   function ($http) {

function getProjects (key) {
            var config = {headers: {
                       'Authorization': key,
                       'Content-Type': 'application/json'
                      //  'Access-Control-Allow-Origin': *
                   }
               };

               var request = $http({
                 method:"post",
                 headers: config,
                 url:"http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/"
               });
// $http.get('http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/', config);
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
