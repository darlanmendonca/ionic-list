'use strict';

/**
 * @ngdoc overview
 * @name AppTest
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular
  .module('AppTest', [
    'ionic',
    'ngResource',
    'ionicLazyLoad',
    // 'ngCordova'
  ])

  .run(function($ionicPlatform) {

    $ionicPlatform.ready(function() {
      // save to use plugins here
    });

    // add possible global event handlers here

  })

  .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    // Application routing
    $stateProvider
      .state('app', {
        url: '/',
        abstract: true,
        templateUrl: 'templates/main.html'
      })
      .state('app.users', {
        url: 'users',
        cache: true,
        views: {
          viewContent: {
            templateUrl: 'templates/views/users.html',
            controller: 'UsersController'
          }
        }
      })
      .state('app.users.get', {
        url: '/:id',
        cache: true,
        views: {
          'viewContent@app': {
            templateUrl: 'templates/views/user.html',
            controller: 'UsersController'
          }
        }
      });


    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/users');
  });


