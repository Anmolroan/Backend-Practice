const jwt =require("jsonwebtoken");
require("dotenv").config();
const {body,validationResult} =require("express-validator")
const User =require("../models/user.model")
const newToken =(user) => {
    return jwt.sign({id: user.id},process.env.JWT_SECRET_KEY)
}
const signup =async(req,res)=>{
    try{
        const user =await User.create(req.body);
    const token = newToken(user)
    return res.status(200).json({data:token})
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}
const signin =async(req,res)=>{
   //we will find the user 
//  we will match the password the user has already
// create a new token and return it;
    return res.status(200).json({data:user})
}
module.exports ={signup, signin}