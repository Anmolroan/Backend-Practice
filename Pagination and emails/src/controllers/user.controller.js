const express=require("express");
const router =express.Router();
const User =require("../models/user.model");
const sendMail =require("../utils/send_mail");


router.get("/",async(req,res)=>{
    try{
        const page =+req.query.page ||1
        const size =+req.query.size ||10
        const skip =(page-1)*size ;
        const users =await User.find()
        .skip(skip)
        .limit(size)
        .lean()
        .exec();;
       
        const totalPages =Math.ceil(await User.find().countDocuments()/size);
        console.log(totalPages);
     
        return res.status(201).send(users)
    }catch(e){
       return  res.status(500).send({message:e.message,status:"Failed"})
    }
    
});
// (from ,to,subject,text,html)
router.post("/",async(req,res)=>{
    try{
        const user=await User.create(req.body);
        
        const admins =await User.find({"positions":{$eq:"Admin"}});
        // console.log(admins);
        for(let i =0;i<admins.length;i++){
    sendMail(req.body.email,admins[i].email,`${req.body.first_name}${req.body.last_price} has registered with us`,`Please welcome ${req.body.first_name} ${req.body.last_price}` ,
       `<h1> created a new user ${req.body.first_name}${req.body.last_price} </h1>`
       )
        }
   
        return res.status(201).send(user)
    }catch(e){
       return  res.status(500).send({message:e.message,status:"Failed"})
    }
})
router.patch("/:id",async(req,res)=>{
    try{
     const user= await User.findByIdAndUpdate(req.params.id,req.body,{
         new:true,
     }).lean().exec()
     return res.status(201).send(user)
    }catch(e){
        return res.status(500).send({message:e.message,status:"Failed"})
    }
 })
module.exports =router;