/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(2);

	__webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	window.app = angular.module('pocketWeatherApp', ['ui.router']).constant("pwConfig", {
	  "fbDomain": "https://tc-pocketwatch.firebaseio.com"
	}).config(function ($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('home');
	  $stateProvider.state('home', {
	    url: '/home',
	    templateUrl: '/pages/home.html',
	    controller: 'mainController'
	  }).state('addLocations', {
	    url: '/addLocations',
	    templateUrl: '/pages/addLocations.html',
	    controller: 'addLocationsController'
	  });
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	app.service("loginService", function ($state, $rootScope, $http) {
	  var _this2 = this;

	  this.ref = new Firebase("https://tc-pocketwatch.firebaseio.com");
	  this.createAccount = function (email, password, phoneNumber) {
	    var _this = this;

	    this.ref.createUser({
	      email: email,
	      password: password
	    }, function (error, userData) {
	      if (error) {
	        console.log(error);
	        alert("There's been an error. Please try again.");
	      } else {
	        alert("Account created successfully");
	        _this.userLogin(email, password);
	        _this.createMongoUser(email, phoneNumber);
	        console.log(email, phoneNumber);
	      }
	    });
	  };

	  this.userLogout = function () {
	    _this2.ref.unauth();
	    $rootScope.email = null;
	  };

	  this.userLogin = function (email, password) {
	    this.ref.authWithPassword({
	      email: email,
	      password: password
	    }, function (error, authData) {
	      if (error) {
	        alert("There has been an error. Please try again.");
	      } else {
	        $rootScope.email = email;
	        $rootScope.isLoggedIn = true;
	        $state.go("addLocations");
	      }
	    });
	  };

	  this.createMongoUser = function (email, phoneNumber) {
	    var body = { email: email, phoneNumber: phoneNumber };
	    $http.post("/user/" + email + "/" + phoneNumber, body).then(function (data) {
	      console.log(data);
	    })["catch"](function (err) {
	      console.log(err);
	    });
	  };
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	app.service("addLocationService", function (ValidateService) {

	  this.storeZip = function (zipcode) {
	    if (ValidateService.validateZipCode) {
	      return $http.put('/user', { zipcode: zipcode });
	    }
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	app.service("ValidateService", function ($http) {
	  this.validateNumber = function (number) {
	    if (number.match(/[a-z]/g) || typeof number === 'undefined') {
	      return false;
	    }
	    number = number.replace(/\D/g, '');
	    if (number.length === 10 || number.length === 11 && number.charAt(0) === '1') {
	      return number;
	    }
	    return false;
	  };
	  this.validateEmail = function (email) {
	    if (/(\w+\.)*\w+@((\w+\.)+\w+)/.test(email)) {
	      return true;
	    }
	    return false;
	  };
	  this.validateZipCode = function (zipcode) {
	    return (/\d{5}/.test(zipcode)
	    );
	  };
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	app.controller('mainController', function ($scope, $rootScope, ValidateService, loginService, pwConfig) {
	  $rootScope.isLoggedIn = false;
	  $scope.createUser = function () {
	    var isValidEmail = ValidateService.validateEmail($scope.userEmail);
	    var phoneNumber = ValidateService.validateNumber($scope.userPhone);
	    if (phoneNumber && isValidEmail) {
	      loginService.createAccount($scope.userEmail, $scope.userPassword, phoneNumber);
	      $scope.userEmail = "";
	      $scope.userPassword = "";
	      $scope.userName = "";
	      $scope.userPhone = "";
	    } else {
	      alert("Invalid entry or entries. Please check email and phone number and try again!");
	    }
	  };

	  $scope.login = function () {
	    loginService.userLogin($scope.userLoginEmail, $scope.userLoginPassword);
	    $scope.userLoginEmail = "";
	    $scope.userLoginPassword = "";
	  };
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	app.controller('navCtrl', function ($scope, $rootScope, $state, loginService) {
	  $scope.logout = function () {
	    $rootScope.isLoggedIn = false;
	    loginService.userLogout();
	    $state.go('home');
	  };
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	app.controller('addLocationsController', function ($scope, $rootScope, $state, $http, addLocationService, ValidateService) {
	  if (!$rootScope.isLoggedIn) {
	    $state.go('home');
	  }

	  $scope.addLocation = function () {
	    if (ValidateService.validateZipCode($scope.zipcode)) {
	      addLocationService.storeZip($scope.zipcode).then(function (data) {})['catch'](function (err) {});
	      $scope.zipcode = "";
	    } else alert("Please enter a five digit zipcode");
	  };
	});

/***/ }
/******/ ]);