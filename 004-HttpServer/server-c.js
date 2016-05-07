var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    req.url = req.url == "/" ? "/index.html" : req.url;

    fs.readFile("./html" + req.url, function (err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("<html><head><title>Error</title><link rel='stylesheet' type='text/css' href='styles.css'></head><body><h1>Error 404 - This file does not exist</h1></body></html>");
            res.end();
        } else {
            var fileExt = req.url.split(".")[1];
            var contentType = "text/html";
            
            if(fileExt == "css"){
               contentType = "text/css";
            } else if (fileExt == "jpeg"){
                contentType = "image/jpeg";
            }
            
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
        }
    });

    console.log(req.method + " request for " + req.url);
});

server.listen(3000);

console.log("Server Set Up");