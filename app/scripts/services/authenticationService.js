angular.module('myProjectApp').service('AuthenticationService',
   function ($http, $q, $rootScope, $cookies, ServiceEndPoint) {

return ({
  userAuthentication: userAuthentication

});
// function userAuthentication (cred) {
// //http://userservice.staging.tangentmicroservices.com:80/apitokenauth/
//             // return $http.post('http://userservice.staging.tangentmicroservices.com:80/api-token-auth/' ,cred).then(handleSuccess, handleError());
//             return $http.post('http://userservice.staging.tangentmicroservices.com:80/api-token-auth/' ,cred);
// };
function userAuthentication (cred) {

  var dataObj =
  {"username":cred.username,
  "password":cred.password};

  var request = $http({
    method:"post",
    // headers: {'Content-Type': 'application/json'},
    url:"http://userservice.staging.tangentmicroservices.com:80/api-token-auth/",
    data:dataObj

  });
  return(request.then(handleSuccess, handleError))
};

function handleSuccess (response){
  return (response.data);
};

function handleError (response){
  $scope.responseError = error;
};

});
