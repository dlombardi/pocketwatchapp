app.controller('mainController', function($scope, loginService, pwConfig){

  $scope.login = function(){
    loginService.userLogin($scope.userEmail, $scope.userName);
  }
  $scope.createUser = function(){
    loginService.createAccount($scope.userEmail, $scope.userName);
  };
});
