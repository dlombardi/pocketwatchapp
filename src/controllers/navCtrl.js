app.controller('navCtrl', function($scope, $state, loginService){

  $scope.logout = function(){
    loginService.userLogout();
    $state.go('home');
  };
});
