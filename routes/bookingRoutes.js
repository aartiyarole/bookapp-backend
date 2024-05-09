var express = require('express');
var Booking = require('../models/booking');
var router = express.Router();


router.get('/', function(req, res){
    console.log('getting all bookings');
        Booking.find({}).exec(function(err, bookings){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(bookings);
            res.json(bookings);
        }
    });
});


router.post('/', function(req, res){
    console.log('saving one booking')
    var newBooking = new Booking();
    newBooking.userName = req.body.userName;
    newBooking.userEmailId = req.body.userEmailId;
    newBooking.bookName = req.body.bookName;
    newBooking.categoryName = req.body.categoryName;
    newBooking.categoryId = req.body.categoryId;
    newBooking.checkOutDate = req.body.checkOutDate;
    newBooking.returnDate = req.body.returnDate;
    newBooking.readDuration = req.body.readDuration;
    newBooking.totalRentCost = req.body.totalRentCost;
    newBooking.bookPicUrl = req.body.bookPicUrl;

    newBooking.save(function(err, booking){
        if(err) {
            res.send('error saving new booking');
        } else {
            console.log(booking);
            res.send(booking);
        }
    });
});
module.exports = router;