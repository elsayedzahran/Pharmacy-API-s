const express= require('express');
const router=express.Router();
const medicine=require('../models/medicine');


router.get('/showall',async(req,res)=>{
    try{
        const medicines=await medicine.find()
        res.json(medicines);
    }catch{
        res.json("erooooor")
    }
})

router.get('/search/:medId',async (req,res)=>{
    try{
        const medicines=await medicine.findById(req.params.medId)
        res.json(medicines);
    }catch{
        res.json("erooooor")
    }
})



module.exports=router;