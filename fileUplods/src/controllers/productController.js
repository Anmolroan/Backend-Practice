const express = require('express');
const router =express.Router();
const Product =require("../models/productModel")
const upload = require("../utils/file-upload")
router.post('/',upload.single("productImages") ,async(req, res)=>{
    const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        image_url:req.file.path
    })
    res.status(201).send(product)
})
router.post("/multiple",upload.array("productImages") ,async(req, res)=>{
    const files =req.files.map((file)=>file.path)
    const products = await Product.create({
        name: req.body.name,
        price: req.body.price,
        image_url:files
    })
    res.status(201).send(products)
})
module.exports = router;