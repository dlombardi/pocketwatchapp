app.service("loginService", function() {

  console.log('userCtrl loaded');

  var ref = new Firebase("https://tc-pocketwatch.firebaseio.com");



  this.createUser = function(email, password) {
    ref.createUser({
      email    : email,
      password : password
    }, function(error, userData) {
      if (error) {
        alert("Error creating user:", error);
      } else {
        alert("Successfully created user account with uid:", userData.uid);
      }
    });
  };


  this.userLogin = function(email, password){
    console.log(email);
    ref.authWithPassword({
        email    : email,
        password : password
      }, function(error, authData) {
        if (error) {
          alert("Login Failed!", error);
        } else {
          alert("Authenticated successfully with payload:", authData);
        }
      },{
        remember: "sessionOnly"
      });
    };

});
