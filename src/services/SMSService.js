app.service('SMSService', function(){

  const accountSid = 'AC74dd59800c3f1b9b013a88b08d486a72';
  const authToken = '790383efee4c34e89288e8ea55ab7855';
  const twilPhnNum = '+18182736634'
	
function init() {
  $('#go').on('click', scana);
  var client = require('twilio')(accountSid, authToken);
}

var warnings = [];

function scana(){
  var arr = [94539, 82301]
  window.setInterval(function(){
    arr.forEach(function(item) {
      getWarnings(item)}
      );
    function getWarnings(zip) {
      var promise = $.getJSON("http://api.wunderground.com/api/7a10e87424a9a29a/alerts/q/" + zip + ".json");
      promise.success(function(alerts) {
        console.log(alerts)
        var Warn = alerts.alerts[0].description
        if(typeof Warn !== 'undefined'){
          warnings.push({zip: Warn});
          console.log(Warn)
          alertToPhone(Warn);
        }
      });
      promise.fail(function(error) {
        console.log('error:', error);
      });
    }
  }, 24*3600*1000);
}

function alertToPhone(Warn) {

  var message = "Warn"
  sendMessage("+14153195475")
  sendMessage = function(phoneNumber){
    client.messages.create({
      to: phoneNumber,
      from: twilPhnNum,
      body: `${message}`,
    }, function(err, message) {
      console.log(message.sid);
    });
  }
}


// });
