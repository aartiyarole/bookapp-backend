const mongoose = require("mongoose")

const user = new mongoose.Schema({
    name: {type:'string'},
    emailId: {type:'string'},
    mobileNo: {type:'string'},
    password: {type:'string'}
  },
  { collection:"users"}
  );
  
  module.exports = mongoose.model('users', user);
  