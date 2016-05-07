var http = require("http");

var server = http.createServer(function(req, res){
   console.log("Request for " + req.url); 
   
   res.writeHead(200, {"Content-Type": "text/html"});
   res.write("<html><head><title>Server Response</title></head><body><h1>Hello World</h1></body></html>");
   res.end();
});

server.listen(3000);

console.log("Server setup complete");