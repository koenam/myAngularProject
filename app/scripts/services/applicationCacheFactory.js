'use strict';

angular.module('myProjectApp')
.factory('ApplicationCacheFactory',['$cacheFactory',
   function ($cacheFactory) {

         return $cacheFactory('ApplicationCacheFactory');


   }]);
