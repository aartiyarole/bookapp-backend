const mongoose = require("mongoose")

let book = new mongoose.Schema({
  bookName: {type: 'string'},
  categoryName: {type: 'string'},
  categoryId: {type:'string'},
  price:{type:'number'},
  imageUrl: {type: 'string'},
  availability:{type:'boolean'},
},
{ collection:"books"}
)

module.exports = mongoose.model('books',book)
