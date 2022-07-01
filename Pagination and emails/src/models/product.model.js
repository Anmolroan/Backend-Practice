const { Schema ,model}= require("mongoose");
const productSchema =new Schema({
    name:{type:String,required:true},
    price:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
});
module.exports =model("product",productSchema);