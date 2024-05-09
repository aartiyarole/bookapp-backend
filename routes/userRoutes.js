var express = require('express');
var User = require('../models/user');

var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all users');
        User.find({}).exec(function(err, users){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(users);
            res.json(users);
        }
    });
});


router.post('/', function(req, res){
    console.log('regestering new user');
    var newUser = new User();
    newUser.name = req.body.name;
    newUser.emailId = req.body.emailId;
    newUser.mobileNo = req.body.mobileNo;
    newUser.password = req.body.password;
    
    newUser.save(function(err, user){
        if(err) {
            res.send('error saving user');
        } else {
            console.log(user);
            res.send(user);
        }
    });
});
module.exports = router;