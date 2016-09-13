/*global angular */

'use strict';


describe("Unit : ProjectsController", function () {
    var scope, ProjectsController, $httpBackend, projectService, deferred, $rootScope, location, deleteDeferred,
    errorMsg, applicationCacheFactory;
   var token = "71456dbd15de0c0b6d2b4b44e5a92ad94c6def97";
    var projects = [
        {
          "pk": 134,
          "title": "Test - modify",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "start_date": "2016-05-03",
          "end_date": "2016-03-09",
          "is_billable": true,
          "is_active": true,
          "task_set": [],
          "resource_set": []
        },
        {
          "pk": 163,
          "title": "Anthony Stark Industries CRM",
          "description": "Richard was the king of Scotland yard",
          "start_date": "1990-02-20",
          "end_date": null,
          "is_billable": true,
          "is_active": true,
          "task_set": [],
          "resource_set": []
        },
        {
          "pk": 141,
          "title": "Test Title - Ernest",
          "description": "This is a test - edit 08-rere-yeye-update",
          "start_date": "2016-10-25",
          "end_date": "2016-11-11",
          "is_billable": false,
          "is_active": true,
          "task_set": [],
          "resource_set": []
        },
        {
          "pk": 133,
          "title": "Test - ert",
          "description": "Testing",
          "start_date": "2016-09-09",
          "end_date": "2016-08-09",
          "is_billable": false,
          "is_active": true,
          "task_set": [],
          "resource_set": []
        },
        {
          "pk": 140,
          "title": "KG testing",
          "description": "My testing",
          "start_date": "2015-09-08",
          "end_date": "2016-03-04",
          "is_billable": true,
          "is_active": true,
          "task_set": [],
          "resource_set": []
        },
        {
          "pk": 151,
          "title": "Ernest - Another test",
          "description": "Got to keep - 08",
          "start_date": "2016-10-27",
          "end_date": "1970-01-01",
          "is_billable": false,
          "is_active": true,
          "task_set": [],
          "resource_set": []
        },
        {
          "pk": 131,
          "title": "Simple Test231",
          "description": "Simple Test of a applicaion maybee",
          "start_date": "2016-11-30",
          "end_date": "2016-12-01",
          "is_billable": true,
          "is_active": true,
          "task_set": [],
          "resource_set": []
        }
      ]
    var deletedprojects = [
        {
          "pk": 134,
          "title": "Test - modify",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "start_date": "2016-05-03",
          "end_date": "2016-03-09",
          "is_billable": true,
          "is_active": true,
          "task_set": [],
          "resource_set": []
        },
        {
          "pk": 163,
          "title": "Anthony Stark Industries CRM",
          "description": "Richard was the king of Scotland yard",
          "start_date": "1990-02-20",
          "end_date": null,
          "is_billable": true,
          "is_active": true,
          "task_set": [],
          "resource_set": []
        },
        {
          "pk": 141,
          "title": "Test Title - Ernest",
          "description": "This is a test - edit 08-rere-yeye-update",
          "start_date": "2016-10-25",
          "end_date": "2016-11-11",
          "is_billable": false,
          "is_active": true,
          "task_set": [],
          "resource_set": []
        },
        {
          "pk": 140,
          "title": "KG testing",
          "description": "My testing",
          "start_date": "2015-09-08",
          "end_date": "2016-03-04",
          "is_billable": true,
          "is_active": true,
          "task_set": [],
          "resource_set": []
        },
        {
          "pk": 131,
          "title": "Simple Test231",
          "description": "Simple Test of a applicaion maybee",
          "start_date": "2016-11-30",
          "end_date": "2016-12-01",
          "is_billable": true,
          "is_active": true,
          "task_set": [],
          "resource_set": []
        }
      ]
    var project = [
      {
      "pk": 134,
      "title": "Test - modify",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "start_date": "2016-05-03",
      "end_date": "2016-03-09",
      "is_billable": true,
      "is_active": true,
      "task_set": [],
      "resource_set": []
    }];
  beforeEach(module('myProjectApp'));

        // Initialize the controller and a mock scope
        beforeEach(inject(function ($controller, $rootScope, ProjectService, $q) {
          scope = $rootScope.$new();
          projectService = ProjectService;
          deferred = $q.defer();
          spyOn(projectService, 'getProjects').and.returnValue(deferred.promise);
          deleteDeferred = $q.defer();
          spyOn(projectService, 'removeProject').and.returnValue(deleteDeferred.promise);

          ProjectsController = $controller('ProjectsController', {
            $scope: scope,
            // place here mocked dependencies
             ProjectService: projectService
          });
        }));

      describe('getProjects service', function () {
          it('should check if the function is defined', function () {
              expect(scope).toBeDefined();
              expect(scope.listProjects).toBeDefined();
          });

          it('should resolve promise', function () {
              deferred.resolve(projects);
              expect(scope).toBeDefined();
              scope.listProjects(token);
              scope.$apply();
              expect(scope.responseError).toBe(undefined);
          });

          it('should reject promise', function () {
              deferred.reject('error message');
              expect(scope).toBeDefined();
              token = '';
              scope.listProjects(token);
              scope.$apply();
              expect(scope.responseError).toBe('error message');
              expect(scope.authToken).toBeUndefined();
          });
      });

      describe('deleteProject service', function () {
        it('should check if the function is defined', function () {
            expect(scope).toBeDefined();
            expect(scope.deleteProject).toBeDefined();
        });
        it('should resolve promise', function () {
            scope.projects = projects;
            scope.project  = project;
            scope.deleteProject(project);
            deleteDeferred.resolve(deletedprojects);
            scope.$apply();
            expect(scope.responseError).toBe(undefined);
        });
        it("should reject the call to delete project", function () {
            scope.projects = projects;
            deleteDeferred.reject('error message');
            scope.deleteProject('');
            scope.$apply();
            expect(scope.responseError).toBe('error message');
            expect(scope.response).toBeUndefined();
        });
      });
});
