const express=require('express');
const mongoose = require("mongoose");
const app=express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Mahayan').then(()=>{
    console.log('database connected')
}).catch((e)=>{
    console.log(e)
})

const userSchema= mongoose.Schema({
    
    name:String,
    description: String,

    url:String


})

const User = mongoose.model('User', userSchema);

app.listen(8080, ()=>{
    console.log("server is running on portal 8080")
})