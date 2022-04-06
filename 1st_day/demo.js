var http =require('http');

http.createServer(function(req, res){
res.write("Hello from node js server");
res.end();
}).listen(5000)