const mongoose=require('mongoose');

// schema  for seller
const seller=mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique: true
    },
    address:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    }
})

module.exports=mongoose.model('seller',seller);