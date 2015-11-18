"use strict";

app.controller('addLocationsController', function($scope, $rootScope, $state, addLocationService, ValidateService){

  let getZips = () => {
    addLocationService.getZips($rootScope.email)
    .then(data=> {
      $scope.zipCodes = data.data.zipCodes;
    })
    .catch(err =>{
      alert(err.data);
    })
  }

  if(!$rootScope.isLoggedIn){
    $state.go('home');
  }
  else getZips()
  $scope.addLocation = function(){
    if (ValidateService.validateZipCode($scope.zipcode)){
      addLocationService.storeZip($scope.zipcode, $rootScope.email)
      .then(data => {
        $scope.zipCodes = data.data.zipCodes;
        $scope.zipcode = "";
      }).catch(err=>{
        alert(err.data);
      })
    }
    else alert("Please enter a five digit zipcode")
  }

});
