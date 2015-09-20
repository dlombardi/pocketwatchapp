// // app.service('SMSService', function(city_name, alert){
	const accountSid = 'AC74dd59800c3f1b9b013a88b08d486a72';
	const authToken = '790383efee4c34e89288e8ea55ab7855';
	const twilPhnNum = '+18182736634'

	var client = require('twilio')(accountSid, authToken);
	sendMessage = function(){
		client.messages.create({
			to: "+18188364433",
			from: twilPhnNum,
			body: `TEST ONE TWO`,
		}, function(err, message) {
			console.log(message.sid);
		});
	}
sendMessage()
// })




// var accountSid = 'AC74dd59800c3f1b9b013a88b08d486a72';
// var authToken = '790383efee4c34e89288e8ea55ab7855';
//
// //require the Twilio module and create a REST client
// var client = require('twilio')(accountSid, authToken);
//
// client.messages.create({
// 	to: "+18188364433",
// 	from: "+18182736634",
// 	body: "There's a storm! ",
// }, function(err, message) {
// 	console.log(message.sid);
// });


// function UnicornLauncher(apiToken) {
//
//   this.launchedCount = 0;
//   this.launch = function() {
//     // Make a request to the remote API and include the apiToken
//     ...
//     this.launchedCount++;
//   }
// }

// Twilio Credentials
// var accountSid = 'AC74dd59800c3f1b9b013a88b08d486a72';
// var authToken = '790383efee4c34e89288e8ea55ab7855';
//
// //require the Twilio module and create a REST client
// var client = require('twilio')(accountSid, authToken);
//
// client.messages.create({
// 	to: "8188364433",
// 	from: "+18182736634",
// 	body: "There's a storm! ",
// }, function(err, message) {
// 	console.log(message.sid);
// });
//
//
// // function UnicornLauncher(apiToken) {
// //
// //   this.launchedCount = 0;
// //   this.launch = function() {
// //     // Make a request to the remote API and include the apiToken
// //     ...
// //     this.launchedCount++;
// //   }
// // }
//
// // Twilio Credentials
// var accountSid = 'AC74dd59800c3f1b9b013a88b08d486a72';
// var authToken = '790383efee4c34e89288e8ea55ab7855';
//
// //require the Twilio module and create a REST client
// var client = require('twilio')(accountSid, authToken);
//
// client.messages.create({
// 	to: "8188364433",
// 	from: "+18182736634",
// 	body: "There's a storm! ",
// }, function(err, message) {
// 	console.log(message.sid);
// });
