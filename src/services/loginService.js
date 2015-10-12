app.service("loginService", function($state, $rootScope) {

  console.log('userCtrl loaded');

  this.ref = new Firebase("https://tc-pocketwatch.firebaseio.com");
  var userEmail, userPassword;
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
        var usersRef = this.ref.child('users');
        usersRef.child(userData.uid).child('phone').set(phone);
        alert("Account created successfully");
        this.userLogin(email, password);
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
        $rootScope.isLoggedIn = true;
        $state.go("addLocations");
      }
    });
  };

});
