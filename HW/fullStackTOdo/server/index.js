const express = require('express');
const app = express();
const fs = require('fs')
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.get("/", function(req, res){
    fs.readFile("./db.json",{encoding: "utf8"},(err, data)=>{
        const parsed = JSON.parse(data);
        res.send(parsed.todos)
    })
   
})
app.post("/", function(req, res){
    fs.readFile("./db.json",{encoding: "utf8"},(err, data)=>{
        const parsed = JSON.parse(data);
        parsed.todos =[...parsed.todos,req.body];
        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding: "utf8"},()=>{
            res.send(parsed.todos)
        });
    })
   
})
app.delete("/:id",function(req,res){
    fs.readFile("./db.json",{encoding: "utf8"},(err, data)=>{
        const parsed = JSON.parse(data);
        parsed.todos = parsed.todos.filter((el)=>el.userId!==req.params.id)
        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding: "utf8"},()=>{
            res.send(parsed.todos)
        });
    })
    console.log(req.params.id)
    
})
app.patch("/:id",function(req,res){
    fs.readFile("./db.json",{encoding: "utf8"},(err, data)=>{
        const parsed = JSON.parse(data);
        // console.log(req.params.id,req.body.userId);
      parsed.todos.forEach((el)=>{
            if(el.userId == req.params.id){
                console.log(el,req.params.id);
               el.name= req.body.name;
               el.status= req.body.status;
            }
        })
        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding: "utf8"},()=>{
            res.send(parsed.todos)
        });
    })
})
app.listen(1234,() => {
    console.log('listening on http://localhost:1234');
});