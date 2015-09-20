app.service("authService", function(email, password) {

  console.log('userCtrl loaded');

  var ref = new Firebase("https://tc-pocketwatch.firebaseio.com");

  

  this.createUser = ref.createUser({
    email    : email,
    password : password
  }, function(error, userData) {
    if (error) {
      alert("Error creating user:", error);
    } else {
      alert("Successfully created user account with uid:", userData.uid);
    }
  });


  this.userLogin = ref.authWithPassword({
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

});








