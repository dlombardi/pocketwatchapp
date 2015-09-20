// app.service('SMSService', function(city_name, alert){
	const accountSid = 'AC74dd59800c3f1b9b013a88b08d486a72';
	const authToken = '790383efee4c34e89288e8ea55ab7855';
	const twilPhnNum = '+18182736634'

	var client = require('twilio')(accountSid, authToken);

	var message = "whatever"
	sendMessage("+17073631877")
	sendMessage = function(phoneNumber){
		client.messages.create({
			to: phoneNumber,
			from: twilPhnNum,
			body: `${message}`,
		}, function(err, message) {
			console.log(message.sid);
		});
	}
// });

// var warnings = [];
// function scana(){
// 	var arr = [94539, 82301]
// 	arr.forEach(function(item) {
// 		getWarnings(item)}
// 	);
// 	function getWarnings(zip) {
// 		// var warnings = [];
// 		var promise = $.getJSON("http://api.wunderground.com/api/7a10e87424a9a29a/alerts/q/" + zip + ".json");
// 		promise.success(function(alerts) {
// 			console.log(alerts)
// 			if(typeof alerts.alerts[0].description !== 'undefined'){
// 				warnings.push({zip: alerts.alerts[0].description});
// 				console.log(alerts.alerts[0].tz_long)
// 				// sendMessage(/*zip, alerts.alerts[0].description, phone*/);
// 			}
// 		});
// 		promise.fail(function(error) {
// 			console.log('error:', error);
// 		});
// 	}
// }
