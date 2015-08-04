'use strict';


angular.module('AppTest')
  // use factory for services
  .factory('UsersService', function($http) {

    var list = function() {
      return $http({
          url: 'http://private-c5fe3-ioniclist.apiary-mock.com/users',
          params: {},
          method: 'GET'
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
        .error(function(error) {
          console.log('an error occured', error);
        });
    };

    // public api
    return {
      list: list,
      get: get
    };

  });
