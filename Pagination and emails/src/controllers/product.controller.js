const express=require("express");
const router =express.Router();
const Product =require("../models/product.model");
const sendMail =require("../utils/send_mail")
router.get("/",async(req,res)=>{
    try{
        const page =+req.query.page ||1
        const size =+req.query.size ||2
        const skip =(page-1)*size ;
        const products =await Product.find()
        .skip(skip)
        .limit(size)
        .lean()
        .exec();;
       
        const totalPages =Math.ceil(await Product.find().countDocuments()/size);
        console.log(totalPages)
        return res.status(201).send(products)
    }catch(e){
       return  res.status(500).send({message:e.message,status:"Failed"})
    }
    
});
// (from ,to,subject,text,html)
router.post("/",async(req,res)=>{
    try{
        const product=await Product.create(req.body);
       sendMail("a@aagmail.com","b@bbgmail.com",`creating a product with a name${req.body.name}`,"Created a new product",
       "<h1> created a new  product</h1>"
       )
        return res.status(201).send(product)
    }catch(e){
       return  res.status(500).send({message:e.message,status:"Failed"})
    }
})
module.exports =router;