var express = require('express');
var morgan = require('morgan');
var Firebase = require("firebase");

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTHTOKEN = process.env.TWILIO_AUTHTOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
const FIREBASE_REF = process.env.FIREBASE_REF;

var app = express();
app.use(morgan());

app.get('*', function(req, res) {
  res.sendfile(__dirname + '/' + req.params[0]);
});

app.listen(process.env.PORT || 3000);

function sendAlerts(){

  var ref = new Firebase(FIREBASE_REF);

  var userData = {};

  ref.on("value", function(snapshot) {
    var users = snapshot.val().users;
    Object.keys(users).forEach(function(key) {
      var user = users[key];
      userData[user.phone] = [];
      if(user.zips){
        Object.keys(user.zips).forEach(function(key){
          userData[user.phone].push(user.zips[key]);
        });
      }
    });
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

};

setInterval(sendAlerts, 1000 * 60 * 60 * 24);

sendAlerts();
