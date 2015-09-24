app.controller('mainController', function($scope, ValidateService, loginService, pwConfig){

  $scope.createUser = function(){
    let isValidEmail = ValidateService.validateEmail($scope.userEmail);
    let phoneNumber = ValidateService.validateNumber($scope.userPhone);
    if(phoneNumber && isValidEmail){
      loginService.createAccount($scope.userEmail,
        $scope.userPassword,
        $scope.userName,
        phoneNumber
      );
      $scope.userEmail = "";
      $scope.userPassword = "";
      $scope.userName = "";
      $scope.userPhone = "";
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
