var express = require('express');
var Category = require('../models/category');
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all categories');
        Category.find({}).exec(function(err, categories){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(categories);
            res.json(categories);
        }
    });
});


router.get('/:id', function(req, res){
    console.log('getting one category');
    Category.findOne({
        _id: req.params.id
    }).exec(function(err, category){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(category);
            res.json(category);
        }
    });
});
module.exports = router;