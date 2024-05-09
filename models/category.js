const mongoose = require("mongoose")

const category = new mongoose.Schema({
    
    categoryName: {type:'string'},
    categoryId: {type:'number'}
  },
  {
    collection:"category"
  }
  )
  
module.exports = mongoose.model('category', category)