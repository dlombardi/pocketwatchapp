app.controller('navCtrl', function($scope, $rootScope, $state, loginService){
  $scope.logout = function(){
    $rootScope.isLoggedIn = false
    loginService.userLogout();
    $state.go('home');
  };
});
