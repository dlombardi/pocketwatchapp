app.controller('addLocationsController', function($scope, $http, addLocationService){

  $scope.addLocation = function(){
    addLocationService.storeZip($scope.zipcode);
  }
});
