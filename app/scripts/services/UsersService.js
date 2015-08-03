'use strict';

/**
 * @ngdoc function
 * @name AppTest.serive:UsersService
 * @description
 * # UsersService
 */
angular.module('AppTest')
  // use factory for services
  .factory('UsersService', function($http, $timeout, $q) {

    var kindOfPrivateVariable = 42;

    var doSomethingAsync = function() {
      var deferred = $q.defer();
      $timeout(deferred.resolve.bind(null, kindOfPrivateVariable), 1000);
      return deferred.promise;
    };

    var list = function() {
      return $http({
          url: 'http://private-c5fe3-ioniclist.apiary-mock.com/users',
          params: {},
          method: 'GET'
        })
        .success(function(data) {
          console.log('fetched this stuff from server:', data);
        })
        .error(function(error) {
          console.log('an error occured', error);
        });

    };

    var get = function(id) {
      return $http({
          url: 'http://private-c5fe3-ioniclist.apiary-mock.com/users/'+id,
          params: {},
          method: 'GET'
        })
        .success(function(data) {
          console.log('fetched this stuff from server:', data);
        })
        .error(function(error) {
          console.log('an error occured', error);
        });
    };

    // public api
    return {
      doSomethingAsync: doSomethingAsync,
      list: list,
      get: get
    };

  });
