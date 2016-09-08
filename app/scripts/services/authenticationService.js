angular.module('myProjectApp').service('AuthenticationService',
   function ($http, $q, $rootScope, $cookies, ServiceEndPoint) {

return ({
  userAuthentication: userAuthentication

});
function userAuthentication (cred) {
//http://userservice.staging.tangentmicroservices.com:80/apitokenauth/
            return $http.post('http://userservice.staging.tangentmicroservices.com:80/apitokenauth/' ,cred).then(handleSuccess, handleError());
};
// function userAuthentication (username, password) {
//
//   var dataObj =
//   {"username":username,
//   "password":password};
//
//   var request = $http({
//     method:"post",
//     headers: {'Content-Type': 'application/json'},
//     url:"userservice.staging.tangentmicroservices.com/api-token-auth/",
//     params:dataObj
//
//   });
//   return(request.then(handleSuccess, handleError))
// };

function handleSuccess (response){
  return (response.data);
};

function handleError (response){
  if(!angular.isObject(response.data) || !response.data.message){
    return($q.reject("error"));
  }
};

});
