"use strict"

let mongoose = require('mongoose');


let userSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true},
  zipCodes: [{type: Number}],
  phoneNumber: {type: Number, required: true}
});

module.exports = mongoose.model('User', userSchema)
