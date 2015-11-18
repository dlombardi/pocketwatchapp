"use strict";

app.controller('mainController', function($scope, $rootScope, ValidateService, loginService, pwConfig){
  $rootScope.isLoggedIn = false;
  $scope.createUser = function(){
    let isValidEmail = ValidateService.validateEmail($scope.userEmail);
    let phoneNumber = ValidateService.validateNumber($scope.userPhone);
    if(phoneNumber && isValidEmail){
      loginService.createMongoUser($scope.userEmail, phoneNumber)
      .then(data => {
        console.log(data);
        loginService.createAccount($scope.userEmail, $scope.userPassword, phoneNumber)
        $scope.userEmail = "";
        $scope.userPassword = "";
        $scope.userName = "";
        $scope.userPhone = "";
      })
      .catch(err =>{
        console.log(err);
      })
    }

    else{
      alert("Invalid entry or entries. Please check email and phone number and try again!")
    }
  };
  
  $scope.login = function(){
    loginService.userLogin($scope.userLoginEmail, $scope.userLoginPassword);
    $scope.userLoginEmail = "";
    $scope.userLoginPassword = "";
  };
});
