const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

// schema  for client
const user=mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true
    }
})


module.exports=mongoose.model('user',user);