const express =require('express');
const app = express();
const port =1234;
// app.use(logger);
app.use(express.json())
app.get('/',(req,res)=>{
    // console.log("home page get request");
    res.send("home page get request");
    
})
app.post('/',(req,res)=>{
    console.log(req.body);
    console.log("home page post request");
})
function logger(req,res,next){
    console.log("logging");
    next();
}
app.listen(port,() => {
    console.log(` listening on port no ${port}`)
});