const { Schema ,model} = require('mongoose');
const userSchema =new Schema({
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    email:{type:String, required:true},
    gender:{type:String, required:true},
    ip_address:{type:String, required:false},
    age:{type:Number, required:true},
})
module.exports=model("user",userSchema)