angular.module('myProjectApp').service('ServiceEndPoint', ['Url' ,function (Url, $http, $rootScope, $cookies, $resource) {
  // ...

  var endpoints = {};

  function defineEndpoint(name, url, method, isArray) {
      endpoints[name] = {
          name: name,
          url: url,
          method: method,
          isArray: isArray,
          makeRequest: function (requestParamDefaultsStructure) {
              var data = $resource(url,requestParamDefaultsStructure,{ 'execute': {method:method, isArray:isArray}});


              var requestParamDefaultsStructure = 'admin';
              if (requestParamsDefaultData === undefined){
                  return data.execute(payload).$promise;
              }
              else{
                  return data.execute(requestParamsDefaultData,payload).$promise;
              }

          }
      };
  }

  defineEndpoint('userAuthentication', Url.userAuthentication, 'POST');


  return endpoints;
}]);
