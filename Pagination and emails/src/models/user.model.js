const mongoose = require("mongoose");
const { Schema ,model}= require("mongoose");
const userSchema =new Schema({
    first_name:{type:String,required:true},
    last_price:{type:String,required:true},
    email:{type:String,required:true},
    positions:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
});
module.exports =model("user",userSchema);