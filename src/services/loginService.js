app.service("loginService", function() {

  console.log('userCtrl loaded');

  this.ref = new Firebase("https://tc-pocketwatch.firebaseio.com");

  this.createAccount = function(email, password, name, phone) {
    console.log(email);
    this.ref.createUser({
      email    : email,
      password : password
    }, (error, userData) => {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData);
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
        console.log(error);
      } else {
        console.log(authData);
      }
    });
  };

});
