const asyncHandler=require('express-async-handler')
const User=require('../models/userModel')
const registerUser=asyncHandler(async(req,res)=>{
    const{name,email,password,pic}=req.body;
    const userExists=await User.findOne({email});
    if(userExists) {
        res.send("USer exits")
    }
    else{
        res.send("User does not exist")
    }
})
module.exports={registerUser};