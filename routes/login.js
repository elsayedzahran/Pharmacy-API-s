const express= require('express');
const router=express.Router();
const user=require('../models/clients');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

require('dotenv').config();

router.post('/',async (req,res)=>{
    const users=await user.find({ username: req.body.username }).exec();
    if (users==null){
        return res.status(400).send('cannot find user')
    }
    console.log(users)
    try{
        if (await bcrypt.compare(req.body.password,users[0].password)){

            jwt.sign({users}, process.env.JWT_SECRET, (err, token )=>{
                if(err){
                    res.json({message:"username or pass not correct"})
                }
                res.cookie("token",token,{
                    httpOnly:true
                })
                res.json({token})
            })

        }
        else{
            return res.status(400).send('password in correct')
        }
    }catch(error){
        res.status(500).send("error")
    }
})


module.exports=router;