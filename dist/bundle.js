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
	
	__webpack_require__(/*! ./controllers/loginCtrl */ 3);
	
	__webpack_require__(/*! ./controllers/AddLocationsCtrl */ 4);

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
	  $urlRouterProvider.otherwise('#');
	  $stateProvider.state('/', {
	    url: '/home',
	    templateUrl: 'pages/home.html',
	    controller: 'mainController'
	  }).state('/addLocations', {
	    url: '/addLocations',
	    templateUrl: 'pages/addLocations.html',
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
	
	app.service("loginService", function () {
	
	  console.log('userCtrl loaded');
	
	  var ref = new Firebase("https://tc-pocketwatch.firebaseio.com");
	
	  this.createUser = function (email, password) {
	    ref.createUser({
	      email: email,
	      password: password
	    }, function (error, userData) {
	      if (error) {
	        alert("Error creating user:", error);
	      } else {
	        alert("Successfully created user account with uid:", userData.uid);
	      }
	    });
	  };
	
	  this.userLogin = function (email, password) {
	    console.log(email);
	    ref.authWithPassword({
	      email: email,
	      password: password
	    }, function (error, authData) {
	      if (error) {
	        alert("Login Failed!", error);
	      } else {
	        alert("Authenticated successfully with payload:", authData);
	      }
	    }, {
	      remember: "sessionOnly"
	    });
	  };
	});

/***/ },
/* 3 */
/*!**************************************!*\
  !*** ./src/controllers/loginCtrl.js ***!
  \**************************************/
/***/ function(module, exports) {

	'use strict';
	
	app.controller('mainController', function ($scope, loginService, pwConfig) {
	
	  $scope.login = function () {
	    loginService.userLogin($scope.userEmail, $scope.userName);
	  };
	  $scope.createUser = function () {
	    loginService.createAccount($scope.userEmail, $scope.userName);
	  };
	});

/***/ },
/* 4 */
/*!*********************************************!*\
  !*** ./src/controllers/AddLocationsCtrl.js ***!
  \*********************************************/
/***/ function(module, exports) {

	"use strict";
	
	app.controller('addLocationsController', function ($scope, $http, pwConfig) {
	
	  $scope.message = "enter your location or the location of a person you care about to receive notifications when thy experience severe weather";
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map