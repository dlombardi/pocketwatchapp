app.service("addLocationService", function(ValidateService, $http) {

  this.storeZip = (zipcode, email) =>{
    if (ValidateService.validateZipCode){
      return $http.put(`/user/${email}/${zipcode}`)
    }
  }
  
  this.getZips = (email) => {
    return $http.get(`/user/${email}`)
  }

});
