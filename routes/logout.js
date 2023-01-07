const express= require('express');
const router=express.Router();
const user=require('../models/clients');

router.get('/',(req,res,next)=>{
    res.clearCookie('token')
    res.status(200).json({messsage:"logged out"})
})




module.exports=router; 
