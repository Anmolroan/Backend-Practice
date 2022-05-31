// node Js - Rayan Dahl
// Javascript :Brendan Eich
// const sum =require('./another');
// import sum from "./another"
// console.log(sum(4,5))
// const assert = require("assert");
const fs = require("fs");
const os = require("os");

const path = require("path");
// const data = fs.readFileSync("./test.txt",{encoding:"utf8"})
// it is Sync function so untill line no 8 is not implemented the below code will not work
// console.log(data)
fs.readFile(path.join(".","test.txt"),{encoding:"utf8"},(err, data) => {
    if(err) {
        console.log("Error occurred ",err.message)
    }else{
        console.log(data)
    }
    
      
})
console.log(os.cpus()[0].model);
console.log(os.version())
 