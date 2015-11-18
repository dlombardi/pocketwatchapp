app.service("addLocationService", function(ValidateService) {

  this.storeZip = (zipcode) =>{
    if (ValidateService.validateZipCode){
      return $http.put('/user', {zipcode})
    }
  }
});
