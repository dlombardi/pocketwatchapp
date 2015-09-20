app.service("addLocationService", function() {

  var ref = new Firebase("https://tc-pocketwatch.firebaseio.com/users/phone");


  this.storeZip = function(zip){
    var zipcode = zip;
    var newZipCodes = ref.push();
    ref.push({zipcodes: [zip]})
  }
});
