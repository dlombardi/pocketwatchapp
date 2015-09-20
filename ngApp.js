var app = angular.module('scotchApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('#');
  $stateProvider
    .state('/', {
      url: '/home',
      templateUrl : 'pages/home.html',
      controller : 'mainController'
    })
    .state('/addLocations', {
      url: '/addLocations',
      templateUrl : 'pages/addLocations.html',
      controller : 'addLocationsController'
    })
});
