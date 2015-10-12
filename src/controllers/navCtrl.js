app.controller('navCtrl', function($scope, $rootScope, $state, loginService){
  console.log($rootScope.isLoggedIn);
  $scope.logout = function(){
    $rootScope.isLoggedIn = false
    loginService.userLogout();
    $state.go('home');
  };
});
