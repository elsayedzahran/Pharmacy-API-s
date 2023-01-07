const express= require('express');
const router=express.Router();
const medicine=require('../models/medicine');
const seller=require('../models/seller');




router.put('/update-sellerinfo/:sellerId',async (req,res)=>{
    try{
        const sellers=await seller.updateOne({_id: req.params.sellerId},{
            $set:{name:req.body.name,address:req.body.address,phone:req.body.phone}
        })
        res.json(sellers);
    }catch{
        res.json("erooooor")
    }
})

// add new medicine
router.post('/add',async(req,res)=>{
    const medicines=new medicine({
        name: req.body.name,
        desc: req.body.desc,
        effects: req.body.effects,
        cost: req.body.cost
    })
    try{
        const savemed=await medicines.save();
        res.json(savemed);
    }catch{
        res.json("eroooor");
    }
})

router.put('/update-medicine/:medId',async (req,res)=>{
    try{
        const medicines=await medicine.updateOne({_id: req.params.medId},{
            $set:{name:req.body.name,desc:req.body.desc,effects:req.body.effects,cost:req.body.cost}
        })
        res.json(medicines);
    }catch{
        res.json("erooooor")
    }
})


router.delete('/delete-medicine/:medId',async (req,res)=>{
    try{
        const medicines=await medicine.deleteOne({_id: req.params.medId})
        res.json(medicines);
    }catch{
        res.json("erooooor")
    }
})


module.exports=router;