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
	
	__webpack_require__(/*! ./services/loginService */ 2);
	
	__webpack_require__(/*! ./controllers/loginCtrl */ 3);
	
	// import "./controllers/AddLocationsCtrl";

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
	    templateUrl: './pages/home.html',
	    controller: 'mainController'
	  }).state('/addLocations', {
	    url: '/addLocations',
	    templateUrl: './pages/addLocations.html',
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
	
	  this.createAccount = function (email, password, name, phone) {
	    console.log(email);
	    ref.createUser({
	      email: email,
	      password: password
	    }, function (error, userData) {
	      if (error) {
	        console.log("Error creating user:", error);
	      } else {
	        console.log("Successfully created user account with uid:", userData);
	        ref.child(name).set(phone);
	      }
	    });
	  };
	
	  this.userLogin = function (email, password) {
	    ref.authWithPassword({
	      email: email,
	      password: password
	    }, function (error, authData) {
	      if (error) {
	        console.log(error);
	      } else {
	        console.log(authData);
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
	
	  $scope.createUser = function () {
	    loginService.createAccount($scope.userEmail, $scope.userPassword, $scope.userName, $scope.userPhone);
	  };
	
	  $scope.login = function () {
	    loginService.userLogin($scope.userLoginEmail, $scope.userLoginPassword);
	  };
	});
	
	// {
	// email:$scope.userEmail,
	// password: $scope.userPassword,
	// username: $scope.userName,
	// phone: $scope.userPhone
	// }

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map