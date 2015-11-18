"use strict";
let User = require('./models/userSchema');
let router = require('express').Router();

router.post('/:email/:phoneNumber', (req, res)=> {
  console.log(req.params);
  User.create(req.params, (err, user)=>{
    if (err) return res.status(499).send(err);

    res.send('ok');
  });
});

router.get('/:email', (req, res) => {
  User.findOne({email: req.params.email}, (err, user)=>{
    if (err) return res.status(499).send(err);

    res.send(user.zipcodes);
  });
});

router.put('/:email/:zipcode', (req, res) => {
  console.log(req.params);
  User.findOne({email: req.params.email}, (err, user) =>{
    if (err) return res.status(499).send(err);

    let zipcode = req.params.zipcode
    if (user.zipCodes.indexOf(zipcode) === -1) {
      user.zipCodes.push(zipcode);

      user.save((err)=>{
        if (err) return res.status(499).send(err);

        res.send(user.zipCodes);
      });
    }
    else res.status(499).send("Zip code already watched!");

  });
});

module.exports = router;
