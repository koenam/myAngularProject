'use strict';
angular.module('myProjectApp').service('AuthenticationService',
   function ($http) {

function userAuthentication (cred) {

  var dataObj =
  {"username":cred.username,
  "password":cred.password};

  var request = $http({
    method:"post",
    url:"http://userservice.staging.tangentmicroservices.com:80/api-token-auth/",
    data:dataObj

  });
  return(request.then(handleSuccess, handleError));
}


function handleSuccess (response){
  return (response.data);
}

function handleError (response){
  var error = response.data.non_field_errors[0];
  $scope.responseError = error;
}


return ({
  userAuthentication: userAuthentication

});

});
