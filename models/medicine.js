const mongoose=require('mongoose');

// schema  for medicine
const medicine=mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique: true
    },
    desc:{
        type: String,
        required:true
    },
    effects:{
        type: String,
        required:true
    },
    cost:{
        type: Number,
        required:true
    }
})

module.exports=mongoose.model('medicine',medicine);