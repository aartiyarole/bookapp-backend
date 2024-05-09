var express = require('express');
var Book = require('../models/book');
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all books');
    Book.find({}).exec(function(err, books){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(books);
            res.json(books);
        }
    });
});

router.get('/:id', function(req, res){
    console.log('getting one book');
    Book.findOne({
        _id: req.params.id
    }).exec(function(err, book){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(book);
            res.json(book);
        }
    });
});

router.post('/', function(req, res){
    console.log('creating a book');
    var newBook = new Book();
    newBook.bookName = req.body.bookName;
    newBook.categoryName = req.body.categoryName;
    newBook.categoryId = req.body.categoryId;
    newBook.price = req.body.price;
    newBook.imageUrl = req.body.imageUrl;
    newBook.availability = req.body.availability;
    newBook.save(function(err, book){
        if(err) {
            res.send('error saving book');
        } else {
            console.log(book);
            res.send(book);
        }
    });
});

router.put('/:id', function(req, res){
    Book.findOneAndUpdate({
        _id: req.params.id
    },{
        $set: {
            bookName: req.body.bookName,
            categoryName: req.body.categoryName,
            categoryId: req.body.categoryId,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            availability: req.body.availability
        }
    },{
        upsert: true
    },function(err, newBook){
        if(err) {
            res.send('error updating book');
        } else {
            console.log(newBook);
            res.send(newBook);
        }
    });
});

router.delete('/:id', function(req, res){
    Book.findByIdAndRemove({
        _id: req.params.id
    },function(err, book){
        if(err) {
            res.send('error deleting book');
        } else {
            console.log(book);
            res.send(book);
        }
    });
});

module.exports = router;