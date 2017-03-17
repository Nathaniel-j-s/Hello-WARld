angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: '../welcome.html',
        controller: 'mainCtrl'
      })
      .state('converter', {
        url: '/converter',
        templateUrl: '../converter.html',
        controller: 'mainCtrl'
      })
      .state('options', {
        url: '/options',
        templateUrl: '../options.html',
        controller: 'mainCtrl'
      })

  })
