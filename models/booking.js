const mongoose = require("mongoose")

let booking = new mongoose.Schema({
    userName: {type: 'string'},
    userEmailId: {type: 'string'},
    bookName: {type: 'string'},
    categoryName: {type: 'string'},
    categoryId: {type:'string'},
    checkOutDate:{type:'string'},
    returnDate:{type:'string'},
    readDuration:{type:'number'},
    totalRentCost: {type:'number'},
    bookPicUrl: {type: 'string'}
},
{ collection:"bookings"}
)

module.exports = mongoose.model('bookings',booking)
