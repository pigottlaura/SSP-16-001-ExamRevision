var http = require("http");

var server = http.createServer(function (req, res) {
    if(req.url == "/"){
        req.url = "/index.html";
    }
    
    switch (req.url) {
        case "/index.html":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<html><head><title>Home</title><link rel='stylesheet' type='text/css' href='styles.css'></head><body><h1>Home</h1></body></html>");
            res.end();
            break;
        case "/about.html":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<html><head><title>About</title><link rel='stylesheet' type='text/css' href='styles.css'></head><body><h1>About</h1></body></html>");
            res.end();
            break;
        case "/styles.css":
            res.writeHead(200, { "Content-Type": "text/css"});
            res.write("h1 { font-size: 20px; color: #C35AE6;}");
            res.end();
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("<html><head><title>Error</title><link rel='stylesheet' type='text/css' href='styles.css'></head><body><h1>Error 404 - This file does not exist</h1></body></html>");
            res.end();
            break;
    }
    res.end();
    console.log(req.method + " request for " + req.url);
});

server.listen(3000);

console.log("Server Running");