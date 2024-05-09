var express = require('express');
var Feedback = require('../models/feedback');
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all feedbacks');
        Feedback.find({}).exec(function(err, feedbacks){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(feedbacks);
            res.json(feedbacks);
        }
    });
});


router.post('/', function(req, res){
    console.log('posting a feedback');
    var newFeedback = new Feedback();
    newFeedback.name = req.body.name;
    newFeedback.emailId = req.body.emailId;
    newFeedback.message = req.body.message;
    newFeedback.save(function(err, feedback){
        if(err) {
            res.send('error saving feedback');
        } else {
            console.log(feedback);
            res.send(feedback);
        }
    });
});
module.exports = router;