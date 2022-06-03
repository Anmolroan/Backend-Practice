// const express = require('express');
// const app = express();
// const fs = require('fs');
// app.use(express.urlencoded({ extended:true }));
// app.use(express.json());
// app.get("/", function(req, res){
//     res.write("hello");
//     res.end("world");
// })
// // app.get("/", function(req, res){
// //     res.send(JSON.stringify({a:"b",b:"c",c:"d"}));
// // })
// app.post("/", function(req, res){
//     fs.readFile("./db.json",{encoding: "utf8"},(err, data)=>{
//         const parsed = JSON.parse(data);
//         parsed.products =[...parsed.products,req.body];
//         fs.writeFile("./db.json",JSON.stringify(parsed),{encoding: "utf8"},()=>{
//             res.send("product created")
//         });
//     })
   
// })

// // delete product
// app.delete("/product/:id", function(req, res){
//     fs.readFile("./db.json",{encoding: "utf8"},(err, data)=>{
//         const parsed = JSON.parse(data);
//         parsed.products = parsed.products.filter(el=>el.id!=1)
//         fs.writeFile("./db.json",JSON.stringify(parsed),{encoding: "utf8"},()=>{
//             res.send("product de;eted")
//         });
//     })
// })
// // put product
// app.put("//product/:id", function(req, res){
//     fs.readFile("./db.json",{encoding: "utf8"},(err, data)=>{
//         const parsed = JSON.parse(data);
//         parsed.products = parsed.products.filter(el=>el.id!=1)
//         fs.writeFile("./db.json",JSON.stringify(parsed),{encoding: "utf8"},()=>{
//             res.send("product update")
//         });
//     })

// })
// app.listen(1234, function(){
// console.log("server is running on port no 1234")
// })
console.log(process.argv)
if(process.argv[2] === "add"){
    console.log((+process.argv[3])+(+process.argv[4]))
}