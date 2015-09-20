var scotchApp = angular.module('scotchApp', ['ui.router']);
var ref = new Firebase("https://tc-pocketwatch.firebaseio.com/");
var Locations = ref.child('tracked-locations');

scotchApp.config(function($stateProvider, $urlRouterProvider){
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

scotchApp.controller('mainController', function($scope){
  $scope.message = "";

});

scotchApp.controller('addLocationsController', function($scope, $http){


  $scope.message = "enter your location or the location of a person you care about to receive notifications when thy experience severe weather";


});
