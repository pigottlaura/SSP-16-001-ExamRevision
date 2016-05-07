console.log("Start of App");

var fs = require("fs");

var onContentReturned = function (err, files) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File contents returned");        
        
        for(f in files){
            console.log("\t" + files[f]);
        }
    }
};

fs.readdir("./", onContentReturned);


console.log("End of App");