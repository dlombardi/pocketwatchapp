"use strict";

app.service("loginService", function($state, $rootScope, $http) {

  this.ref = new Firebase("https://tc-pocketwatch.firebaseio.com");
  this.createAccount = function(email, password, phoneNumber) {
    this.ref.createUser({
      email    : email,
      password : password
    }, (error, userData) => {
      if (error) {
        console.log(error);
        alert("There's been an error. Please try again.");
      } else {
        alert("Account created successfully");
        this.userLogin(email, password);
        this.createMongoUser(email, phoneNumber);
        console.log(email, phoneNumber);
      }
    });
  };

  this.userLogout = () => {
    this.ref.unauth();
    $rootScope.email = null;
  };

  this.userLogin = function(email, password){
    this.ref.authWithPassword({
      email    : email,
      password : password
    }, function(error, authData) {
      if (error) {
        alert("There has been an error. Please try again.");
      } else {
        $rootScope.email = email;
        $rootScope.isLoggedIn = true;
        $state.go("addLocations");
      }
    });
  };

  this.createMongoUser = (email, phoneNumber) => {
    let body = {email, phoneNumber}
    $http.post(`/user/${email}/${phoneNumber}`, body)
    .then(data => {
      console.log(data);
    }).catch(err =>{
      console.log(err);
    })
  }

});
