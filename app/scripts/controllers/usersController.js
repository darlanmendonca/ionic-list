'use strict';

/**
 * @ngdoc function
 * @name AppTest.controller:UsersController
 * @description
 * # UsersController
 */
angular.module('AppTest')
  .controller('UsersController', function($scope, UsersService, $stateParams) {

    $scope.myHTML = null;

    // just an example...
    $scope.load = function() {
      if (!$stateParams.id) {
        UsersService.list()
          .then(function(response) {
              $scope.data = response.data;
              // $scope.myHTML = response.data.text;
              // close pull to refresh loader
              $scope.$broadcast('scroll.refreshComplete');
          });
      } else {
        UsersService.get($stateParams.id)
          .then(function(response) {
              $scope.data = response.data;
              $scope.$broadcast('scroll.refreshComplete');
          });
      }
    };

    $scope.load();



  });
