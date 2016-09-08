angular.module('myProjectApp').service('Url', function () {



    return{
      userAuthentication: 'userservice.staging.tangentmicroservices.com/api-token-auth/:username/:password'
    };
  });
