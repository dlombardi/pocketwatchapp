app.service("loginService", function($state) {

  console.log('userCtrl loaded');

  this.ref = new Firebase("https://tc-pocketwatch.firebaseio.com");

  this.createAccount = function(email, password, name, phone) {
    this.ref.createUser({
      email    : email,
      password : password
    }, (error, userData) => {
      if (error) {
        console.log("Error creating user:", error);
        alert("There's been an error. Please try again.");
        return;
      } else {
        alert("Successfully created user account.");
        $state.go("./pages/addLocations");
        var usersRef = this.ref.child('users');
        usersRef.child(userData.uid).child('phone').set(phone);
      }
    });
  };

  this.currentAuthData = cb => {
    this.ref.onAuth(cb);
  };

  this.userLogout = () => {
    this.ref.unauth();
  };

  this.userLogin = function(email, password){
    this.ref.authWithPassword({
      email    : email,
      password : password
    }, function(error, authData) {
      if (error) {
        alert("There has been an error. Please try again.");
      } else {
        $state.go("addLocations");
      }
    });
  };

});
