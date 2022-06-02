const express= require('express');
const app = express();
app.get('/public/other', function(req, res){
    res.status(200).send("data")
})
// app.listen(1234, function(req, res){
// console.log('listening on port 1234');
// })