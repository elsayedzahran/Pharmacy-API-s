const express= require('express');
const router=express.Router();
const medicine=require('../models/medicine');
const seller=require('../models/seller');
const user=require('../models/clients');


router.post('/add-seller',async(req,res)=>{
    const sellers=new seller({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
    })
    try{
        const saveseller=await sellers.save();
        res.json(saveseller);
    }catch{
        res.json("eroooor");
    }
})

router.get('/showall-seller',async(req,res)=>{
    try{
        const sellers=await seller.find()
        res.json(sellers);
    }catch{
        res.json("erooooor")
    }
})

router.delete('/delete-seller/:Id',async (req,res)=>{
    try{
        const sellers=await seller.deleteOne({_id: req.params.Id})
        res.json(sellers);
    }catch{
        res.json("erooooor")
    }
})


router.get('/showall',async(req,res)=>{
    try{
        const users=await user.find()
        res.json(users);
    }catch{
        res.json("erooooor")
    }
})

router.delete('/delete-user/:userId',async (req,res)=>{
    try{
        const users=await user.remove({_id: req.params.userId})
        res.json(users);
    }catch{
        res.json("erooooor")
    }
})


module.exports=router;