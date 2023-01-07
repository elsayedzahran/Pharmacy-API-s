const express= require('express');
const router=express.Router();
const user=require('../models/clients');
const bcrypt=require('bcrypt');

router.post('/',async (req,res)=>{
    const username=req.body.username
    const exist=await user.findOne({username})
    if (exist){
        return res.status(400).json("user name already used")
    }
    try {
        const salt = await bcrypt.genSalt();
        const newPassword = await bcrypt.hash(req.body.password,salt);
        const users=new user({
            username: req.body.username,
            password: newPassword
        })
        //console.log(users)
        const saveuser=await users.save();
        res.json(saveuser);
    } catch {
        res.status(400).json("invalid operation")
    }
}
)

module.exports=router;