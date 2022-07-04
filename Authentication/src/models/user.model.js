const {model,Schema} =require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minLength:8}
},{
    timestamps:true,
    versionKey:false,
});
userSchema.pre("save", function(next) {
    if(!this.isModified("password")){
        return next();
    }
    bcrypt.hash(this.password,8,(err,hash) => {
        if(err) return next(err);
        this.password = hash;
        return next();
    })
})
module.exports =model("user",userSchema)