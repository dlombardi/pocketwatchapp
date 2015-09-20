window.app = angular.module('pocketWeatherApp', ['ui.router'])
.constant("pwConfig", {
  "fbDomain": "https://tc-pocketwatch.firebaseio.com/"
})

.config(function($stateProvider, $urlRouterProvider){
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
