app.service("addLocationService", function() {

  var ref = new Firebase("https://tc-pocketwatch.firebaseio.com/users/");

  this.storeZip = function(zip){
    var phone;
    ref.on("value", function(snapshot) {
      var data = snapshot.val();
      console.log(data.phone);
      console.log(ref);
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
    var zipcode = zip;
    var newZipCodes = ref.push();
    ref.push({zipcodes: [zip]});
  };


});
