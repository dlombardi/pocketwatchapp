app.service('SMSService', function(city_name, alert){
    const accountSid = 'AC74dd59800c3f1b9b013a88b08d486a72';
    const authToken = '790383efee4c34e89288e8ea55ab7855';
    const twilPhnNum = '+18182736634'

    var client = require('twilio')(accountSid, authToken);

    var message = "whatever"
    sendMessage = function(phoneNumber){
        client.messages.create({
            to: phoneNumber,
            from: twilPhnNum,
            body: `${message}`,
        }, function(err, message) {
            console.log(message.sid);
        });
    }
});
