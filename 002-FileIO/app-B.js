var fs = require("fs");

fs.readdir("./TestContent", function(err, files){
   if(err){
       console.log(err);
   } else {
       console.log("Files returned");
       console.log(files);
   }
});