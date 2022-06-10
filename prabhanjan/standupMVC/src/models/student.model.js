const mongoose = require('mongoose');
const {Schema,model} = require('mongoose');
const studentSchema =new Schema({
    name:{type: 'string',required: true},
    studentID: {type: Number,required: true}
},{
    versionKey:false,
    timestamp:true
})
module.exports =model("student",studentSchema);