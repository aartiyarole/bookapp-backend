const mongoose = require("mongoose")

const feedback = new mongoose.Schema({
    name: {type:'string'},
    emailId: {type:'string'},
    message: {type:'string'},
    
  },
  { collection:"feedbacks"}
  );
  
  module.exports = mongoose.model('feedbacks', feedback);
  