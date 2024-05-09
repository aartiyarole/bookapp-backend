var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
var mongoose = require('mongoose');
var port = 8000;
var db = 'mongodb://0.0.0.0:27017';

var books = require('./routes/books');
var category = require('./routes/categoryRoutes');
var user = require('./routes/userRoutes');
var booking = require('./routes/bookingRoutes');
var feedback = require('./routes/feedbackRoutes')

mongoose.connect(db);

app.use(cors({origin: 'http://localhost:4200'}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/books', books);
app.use('/category', category);
app.use('/user',user);
app.use('/booking',booking);
app.use('/feedback',feedback)


app.listen(port, function(){
    console.log('app listening on port: '+port);
});