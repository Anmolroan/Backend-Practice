const express = require("express");
const router =express.Router();
const User =require("../models/user.model")
router.get('/', async function(req, res){
const users =await User.find({}).select("-password").lean().exec();
return res.status(200).json({data: users});
})
module.exports = router