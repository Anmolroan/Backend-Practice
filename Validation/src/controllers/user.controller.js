const express = require("express");
const {body,validationResult} =require("express-validator")
const router = express.Router();
const User =require("../models/user.model")
router.post("/",
body("id").isLength({min:1}), 
body("first_name").isLength({min:1}).withMessage("first_name is required") ,
body("last_name").isLength({min:1}),
body("email").isEmail(),
body("gender").isLength({min:1}),
async(req,res)=>{
    const errors =validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).send({data: errors})
    }else{
        const user = await User.create(req.body)
       return res.send(user)
    }
  
})
module.exports = router