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
    'ngCordova',
    'ngResource'
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
        url: '/app',
        abstract: true,
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
      .state('app.about', {
        url: '/about',
        cache: true,
        views: {
          viewContent: {
            templateUrl: 'templates/views/about.html',
            controller: 'HomeController'
          }
        }
      })
      .state('app.users', {
        url: '/users',
        cache: true,
        views: {
          viewContent: {
            templateUrl: 'templates/views/users.html',
            controller: 'UsersController'
          }
        }
      })
      .state('app.user', {
        url: '/user/:id',
        cache: true,
        views: {
          viewContent: {
            templateUrl: 'templates/views/user.html',
            controller: 'UsersController'
          }
        }
      });


    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/about');
  });


