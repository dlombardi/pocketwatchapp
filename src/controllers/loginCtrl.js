app.controller('mainController', function($scope, loginService, pwConfig){

  $scope.createUser = function(){
    loginService.createAccount($scope.userEmail, $scope.userPassword, $scope.userName, $scope.userPhone);
    $scope.userEmail = "";
    $scope.userPassword = "";
    $scope.userName = "";
    $scope.userPhone = "";
  };

  $scope.login = function(){
    loginService.userLogin($scope.userLoginEmail, $scope.userLoginPassword);
    $scope.userLoginEmail = "";
    $scope.userLoginPassword = "";
  };
});
