var express = require('express');
var morgan = require('morgan');

const TWILIO_ACCOUNT_SID = process.env.FIREBASE_REF;
const TWILIO_AUTHTOKEN = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_AUTHTOKEN;
const FIREBASE_REF = process.env.TWILIO_PHONE_NUMBER;

var app = express();
app.use(morgan());

app.get('*', function(req, res) {
  res.sendfile(__dirname + '/' + req.params[0]);
});

app.listen(process.env.PORT || 3000);

function sendAlerts(){

};

setInterval(sendAlerts, 1000 * 60 * 60 * 24);

sendAlerts();
