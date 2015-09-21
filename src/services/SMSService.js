app.service('SMSService', function(){
  
    var client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTHTOKEN);

    this.sendMessage = function(phoneNumber, zip, alert){
        client.messages.create({
            to: phoneNumber,
            from: TWILIO_PHONE_NUMBER,
            body: `Alert in ${zip}: ${alert}`,
        }, function(err, message) {
            console.log(message.sid);
        });
    }
});
