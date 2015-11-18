"use strict";

var morgan = require('morgan');
var Firebase = require("firebase");
require('mongoose').connect(process.env.MONGO_URI || "mongodb://localhost/pocketwatch");
var User = require('./models/userSchema')

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTHTOKEN = process.env.TWILIO_AUTHTOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
const FIREBASE_REF = process.env.FIREBASE_REF;
var app = require('express')();

app.use(morgan('dev'));
app.use('/user', require('./router'))

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/' + req.params[0]);
});

app.listen(process.env.PORT || 3000);



let checkForAlerts = () => {
  User.find({}, (err, users)=>{
    user.forEach(user => {
      user.zipCodes.forEach(zip =>{
        
      })
    })
  })

}

function sendAlerts(){
  User.find({}, (err, users)=>{
    user.forEach(user => {

    })
  })

};
//
// setInterval(sendAlerts, 1000 * 60 * 60 * 24);
//
// sendAlerts();
