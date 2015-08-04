'use strict';

/**
 * @ngdoc function
 * @name AppTest.controller:UsersController
 * @description
 * # UsersController
 */
angular.module('AppTest')
  .controller('UsersController', function($scope, UsersService, $stateParams, $cordovaDevice, $cordovaEmailComposer) {

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

    document.addEventListener('deviceready', function () {

      // var device = $cordovaDevice.getDevice();

      $cordovaEmailComposer.isAvailable().then(function() {
        console.log('email composer is available');
      }, function () {
        console.log('email composer not available');
      });

      $scope.email = function(email) {
        var options = {
          to: email,
          subject: 'Subject from this email',
          body: 'How are you?',
          isHtml: true
        };
        $cordovaEmailComposer.open(options).then(null, function () {
          console.log('user cancelled email');
        });
      };

    }, false);



  });
