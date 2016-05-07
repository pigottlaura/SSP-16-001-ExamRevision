var http = require("http");
var fs = require("fs");

var resourceFiles;

fs.readdir("./html", function (err, files) {
    if (err) throw err;

    resourceFiles = files;
    console.log(resourceFiles);

    server.listen(3000);
    console.log("Server is Running on port 3000");
});

fs.watch("./html", function (event, filename) {
    if (filename) {
        console.log("Detected a change to " + filename);
    }

    fs.readdir("./html", function (err, files) {
        if (err) throw err;

        resourceFiles = files;
        console.log(resourceFiles);
    });
});

var server = http.createServer(function (req, res) {
    console.log(req.method + " request for " + req.url);

    var requestedResource = req.url == "/" ? "index.html" : req.url.split("/")[1];
    var fileExt = requestedResource.split(".")[1];
    var contentType = "text/html";

    if (fileExt == "css") {
        contentType = "text/css";
    } else if (fileExt == "jpeg") {
        contentType = "image/jpeg";
    }

    var foundFile = false;

    for (r in resourceFiles) {
        if (resourceFiles[r] == requestedResource) {
            foundFile = true;
        }
    }

    if (foundFile) {
        fs.readFile("./html/" + requestedResource, function (err, data) {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.write("<html><head><title>Error</title><link rel='stylesheet' type='text/css' href='styles.css'></head><body><h1>Error 404 - This file does not exist</h1></body></html>");
                res.end();
            }
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<html><head><title>Error</title><link rel='stylesheet' type='text/css' href='styles.css'></head><body><h1>Error 404 - This file does not exist</h1></body></html>");
        res.end();
    }
});