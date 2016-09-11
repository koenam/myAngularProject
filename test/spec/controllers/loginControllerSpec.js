/*global angular */

// 'use strict';


describe("Unit : LoginController", function () {
    var scope, LoginController, $httpBackend, authenticationService, deferred, $rootScope, location,
    errorMsg, applicationCacheFactory;

    var credentials = {username: 'user',
        password: 'password'};
        var tokenData  = {"token": "71456dbd15de0c0b6d2b4b44e5a92ad94c6def97"};
        var token = "71456dbd15de0c0b6d2b4b44e5a92ad94c6def97";

  beforeEach(module('myProjectApp'));

        // Initialize the controller and a mock scope
        beforeEach(inject(function ($controller, $rootScope, AuthenticationService, $q, ApplicationCacheFactory) {
          scope = $rootScope.$new();
          authenticationService = AuthenticationService;

          deferred = $q.defer();
          spyOn(authenticationService, 'userAuthentication').and.returnValue(deferred.promise);
          LoginController = $controller('LoginController', {
            $scope: scope,
            // place here mocked dependencies
             AuthenticationService: authenticationService,
             ApplicationCacheFactory: applicationCacheFactory
          });
        }));

    describe('loginUser function ', function () {
        it('should check if the function is defined', function () {
            expect(scope).toBeDefined();
            expect(scope.loginUser).toBeDefined();
        });
    });

      describe('Authentication service', function () {
          it('should resolve promise', function () {

              // applicationCacheFactory.put('authkey', '');
              // scope.loginUser(credentials);
              deferred.resolve(tokenData);
              scope.$apply();
              // expect(ApplicationCacheFactory.get('authkey')).toBeDefined();
              expect(scope.responseError).toBe(undefined);
          });

          it('should reject promise', function () {
              deferred.reject('error message');
              expect(scope).toBeDefined();
              credentials.username = 'user1';
              scope.loginUser(credentials);
              scope.$apply();
              expect(scope.responseError).toBe('error message');
              expect(scope.authToken).toBeUndefined();
          });
      });
});
