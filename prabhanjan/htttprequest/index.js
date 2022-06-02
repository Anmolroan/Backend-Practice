const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // res.write("hello world");
//     console.log(req.url)
//     res.setHeader("content-type","text/html");
// res.end("<h1>hello</h1>")
if(req.url==="/"){
return res.end("welcome to homepage")
}
if(req.url==="/products"){
    res.setHeader("content-type","application/json")
    return res.end(JSON.stringify([1,2,3,4,5,6]))
}
if(req.url==="/file"){
    // const data = fs.readFileSync("./data.txt",{encoding: "utf8"});
    // return res.end(data)
    fs.readFile("./data.txt",{encoding: "utf8"},(err,data)=>{
        if(err){
            console.log("Erorr while reading file")
        }

        // Stream 
        if(req.url ==="/stream"){;

            const readStream =fs.createReadStream("./data.txt");
            readStream.pipe(res);
        }
        // res.setHeader("content-type","text/html");
        // res.end(data)
    })
    
}
})
server.listen(8000,() => {
    console.log('listening on port 8000')
})