app.controller('addLocationsController', function($scope, $rootScope, $state, $http, addLocationService, ValidateService){
  if(!$rootScope.isLoggedIn){
    $state.go('home')
  }

  $scope.addLocation = function(){
    if (ValidateService.validateZipCode($scope.zipcode)){
      addLocationService.storeZip($scope.zipcode, $rootScope.email)
      .then(data => {
        console.log(data);
      $scope.zipcode = "";
      }).catch(err=>{
        console.log(err);
      })
    }
    else alert("Please enter a five digit zipcode")
  }
});
