const express= require('express');
const mongoose=require('mongoose');
const app=express();
const port=4000

const cookieparser=require('cookie-parser')
require('dotenv/config');


const logger=require("./middleware/logger");
const bodyparser = require("body-parser");


app.use(bodyparser.json());
app.use(logger);
app.use(cookieparser())

mongoose.connect(process.env.DB_CONNECT,()=>{
    console.log("coonect to database")
})

// routes
app.use('/medicine',require('./routes/medicine.js'))
app.use('/seller',require('./routes/seller.js'))
app.use('/admin',require('./routes/admin.js'))
app.use('/login',require('./routes/login.js'))
app.use('/signup',require('./routes/signup.js'))
app.use('/logout',require('./routes/logout.js'))

app.listen(port,()=>{
    console.log(`example on mongos port ${port}`);
});