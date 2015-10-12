app.controller('addLocationsController', function($scope, $rootScope, $state, $http, addLocationService){
    if(!$rootScope.isLoggedIn){
      $state.go('home')
    }
  $scope.addLocation = function(){
    addLocationService.storeZip($scope.zipcode);
    $scope.zipcode = "";
  }
});
