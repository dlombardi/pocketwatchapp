"use strict";

var morgan = require('morgan');
var Firebase = require("firebase");
var User = require('./models/userSchema');
require('mongoose').connect(process.env.MONGO_URI || "mongodb://localhost/pocketwatch");

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTHTOKEN = process.env.TWILIO_AUTHTOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
const FIREBASE_REF = process.env.FIREBASE_REF;

var app = require('express')();
app.use(morgan());

app.get('*', function(req, res) {
  res.sendfile(__dirname + '/' + req.params[0]);
});

app.post('/user', (req, res)=> {
  User.create(req.body, (err, user)=>{
    if (err) return res.status(499).send(err);
    res.cookie('email', user.email);
    res.end('ok');
  });
});

app.get('/user', (req, res) => {
  User.findOne({email: req.cookies.email}, (err, user)=>{
    if (err) return res.status(499).send(err);

    res.send(user.zipcodes);
  });
});

app.put('/user', (req, res) => {
  User.findOne({email: req.cookies.email}, (err, user) =>{
    if (err) return res.status(499).send(err);

    let zipcode = req.body.zipcode
    if (user.zipCodes.indexOf(zipcode) === -1) {
      uer.zipCodes.push(zipcode);

      user.save((err)=>{
        if (err) return res.status(499).send(err);

        res.send(user.zipCodes);
      })
    }
    else res.status(499).send("Zip code already watched!");

  });
});

app.listen(process.env.PORT || 3000);

// function sendAlerts(){
//
//   var ref = new Firebase(FIREBASE_REF);
//
//   var userData = {};
//
//   ref.on("value", function(snapshot) {
//     var users = snapshot.val().users;
//     Object.keys(users).forEach(function(key) {
//       var user = users[key];
//       userData[user.phone] = [];
//       if(user.zips){
//         Object.keys(user.zips).forEach(function(key){
//           userData[user.phone].push(user.zips[key]);
//         });
//       }
//     });
//   }, function (errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   });
//
// };
//
// setInterval(sendAlerts, 1000 * 60 * 60 * 24);
//
// sendAlerts();
