const express = require('express');
const router =express.Router();
const Student =require('../models/student.model');
router.get("/",async (req,res) => {
    try{
        const students =await Student.find().lean().exec();
        res.send(students)
    }catch(err){
        res.send(err.message)
    }
})
router.post("/",async (req,res) => {
    try{
const student = await Student.create({
    name:req.body.name,
    studentID:req.body.studentID
})
return res.send(student)
    }catch(err){
        res.send(err.message)
    }
})
module.exports =router;