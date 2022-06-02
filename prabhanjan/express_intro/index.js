const express = require('express');
const app = express();
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.get("/", function(req, res){
    res.write("hello");
    res.end("world");
})
app.get("/", function(req, res){
    res.send(JSON.stringify({a:"b",b:"c",c:"d"}));
})
app.post("/", function(req, res){
    res.send(req.body);
})
app.listen(1234, function(){
console.log("server is running on port no 1234")
})