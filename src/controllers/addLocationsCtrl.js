app.controller('addLocationsController', function($scope, $rootScope, $state, $http, addLocationService, ValidateService){
  if(!$rootScope.isLoggedIn){
    $state.go('home')
  }

  $scope.addLocation = function(){
    if (ValidateService.validateZipCode($scope.zipcode)){
      addLocationService.storeZip($scope.zipcode)
      .then(data => {

      }).catch(err=>{
      
      })
      $scope.zipcode = "";
    }
    else alert("Please enter a five digit zipcode")
  }
});
