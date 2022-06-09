const express = require('express');
const app = express();
const {connection,Movie} = require('./db')
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.get("/", async function(req, res){
    const movies = await Movie.find({});
    res.send(movies)
})
app.listen(8080,async() => {
    try{
        await connection;
        console.log("connected to db")
    }catch(err){
        console.log("err",err)
    }
    console.log('server started on port 2345');
})