window.app = angular.module('pocketWeatherApp', ['ui.router'])
.constant("pwConfig", {
  "fbDomain": FIREBASE_REF
})

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl : '/pages/home.html',
      controller : 'mainController'
    })
    .state('addLocations', {
      url: '/addLocations',
      templateUrl : '/pages/addLocations.html',
      controller : 'addLocationsController'
    })
});
