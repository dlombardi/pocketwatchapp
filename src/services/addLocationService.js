app.service("addLocationService", function(loginService) {

  $http.put('/user', {zipcode})

  // ref.onAuth(function(authData) {
  //   console.log('location service userdata', authData);
  //   currentUid = authData.uid;
  // });

  // this.storeZip = function(zip){
  //   console.log(zip);
  //   var phone;
  //   var userRef = ref.child('users').child(currentUid);
  //   userRef.child('zips').push(zip);
  // ref.on("value", function(snapshot) {
  //   var data = snapshot.val();
  //   console.log(data);
  //   console.log(ref);
  // }, function (errorObject) {
  //   console.log("The read failed: " + errorObject.code);
  // });
  // var zipcode = zip;
  // var newZipCodes = ref.push();
  // ref.push({zipcodes: [zip]});
  // };


});
