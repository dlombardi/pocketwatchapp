/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./ngApp.js */ 1);
	
	__webpack_require__(/*! ./services/loginService */ 2);
	
	__webpack_require__(/*! ./services/addLocationService */ 3);
	
	__webpack_require__(/*! ./services/loginService */ 2);
	
	__webpack_require__(/*! ./services/addLocationService */ 3);
	
	__webpack_require__(/*! ./controllers/loginCtrl */ 4);
	
	__webpack_require__(/*! ./controllers/navCtrl */ 5);
	
	__webpack_require__(/*! ./controllers/addLocationsCtrl */ 6);

/***/ },
/* 1 */
/*!**********************!*\
  !*** ./src/ngApp.js ***!
  \**********************/
/***/ function(module, exports) {

	'use strict';
	
	window.app = angular.module('pocketWeatherApp', ['ui.router']).constant("pwConfig", {
	  "fbDomain": "https://tc-pocketwatch.firebaseio.com/"
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
/*!**************************************!*\
  !*** ./src/services/loginService.js ***!
  \**************************************/
/***/ function(module, exports) {

	"use strict";
	
	app.service("loginService", function ($state) {
	  var _this2 = this;
	
	  console.log('userCtrl loaded');
	
	  this.ref = new Firebase("https://tc-pocketwatch.firebaseio.com");
	
	  this.createAccount = function (email, password, name, phone) {
	    var _this = this;
	
	    this.ref.createUser({
	      email: email,
	      password: password
	    }, function (error, userData) {
	      if (error) {
	        console.log("Error creating user:", error);
	        alert("There's been an error. Please try again.");
	        return;
	      } else {
	        alert("Successfully created user account.");
	        $state.go("./pages/addLocations");
	        var usersRef = _this.ref.child('users');
	        usersRef.child(userData.uid).child('phone').set(phone);
	      }
	    });
	  };
	
	  this.currentAuthData = function (cb) {
	    _this2.ref.onAuth(cb);
	  };
	
	  this.userLogout = function () {
	    _this2.ref.unauth();
	  };
	
	  this.userLogin = function (email, password) {
	    this.ref.authWithPassword({
	      email: email,
	      password: password
	    }, function (error, authData) {
	      if (error) {
	        alert("There has been an error. Please try again.");
	      } else {
	        $state.go("addLocations");
	      }
	    });
	  };
	});

/***/ },
/* 3 */
/*!********************************************!*\
  !*** ./src/services/addLocationService.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	app.service("addLocationService", function (loginService) {
	
	  var ref = loginService.ref;
	  var currentUid;
	
	  ref.onAuth(function (authData) {
	    console.log('location service userdata', authData);
	    currentUid = authData.uid;
	  });
	
	  this.storeZip = function (zip) {
	    var phone;
	    var userRef = ref.child('users').child(currentUid);
	    userRef.child('zips').push(zip);
	    // ref.on("value", function(snapshot) {
	    //   var data = snapshot.val();
	    //   console.log(data);
	    //   console.log(ref);
	    // }, function (errorObject) {
	    //   console.log("The read failed: " + errorObject.code);
	    // });
	    // var zipcode = zip;
	    // var newZipCodes = ref.push();
	    // ref.push({zipcodes: [zip]});
	  };
	});

/***/ },
/* 4 */
/*!**************************************!*\
  !*** ./src/controllers/loginCtrl.js ***!
  \**************************************/
/***/ function(module, exports) {

	'use strict';
	
	app.controller('mainController', function ($scope, loginService, pwConfig) {
	
	  $scope.createUser = function () {
	    loginService.createAccount($scope.userEmail, $scope.userPassword, $scope.userName, $scope.userPhone);
	  };
	
	  $scope.login = function () {
	    loginService.userLogin($scope.userLoginEmail, $scope.userLoginPassword);
	  };
	});

/***/ },
/* 5 */
/*!************************************!*\
  !*** ./src/controllers/navCtrl.js ***!
  \************************************/
/***/ function(module, exports) {

	'use strict';
	
	app.controller('navCtrl', function ($scope, $state, loginService) {
	
	  $scope.logout = function () {
	    loginService.userLogout();
	    $state.go('home');
	  };
	});

/***/ },
/* 6 */
/*!*********************************************!*\
  !*** ./src/controllers/addLocationsCtrl.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	app.controller('addLocationsController', function ($scope, $http, addLocationService) {
	
	  $scope.addLocation = function () {
	    addLocationService.storeZip($scope.zipcode);
	  };
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map