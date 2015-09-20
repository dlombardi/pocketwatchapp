app.service("loginService", function() {

  console.log('userCtrl loaded');

  var ref = new Firebase("https://tc-pocketwatch.firebaseio.com");



  this.createAccount = function(email, password, name, phone) {
    console.log(email);
    ref.createUser({
      email    : email,
      password : password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData);
        var usersRef = ref.child('users');
        usersRef.push({phone: phone});
      }
    });
  };

  this.userLogin = function(email, password){
    ref.authWithPassword({
      email    : email,
      password : password
    }, function(error, authData) {
      if (error) {
        console.log(error);
      } else {
        console.log(authData);
      }
    }, {
      remember: "sessionOnly"
    });
  };

});
