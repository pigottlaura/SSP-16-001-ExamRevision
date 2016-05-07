var fs = require("fs");

var filename = "./myObject.js";
var me = {};

fs.exists(filename, function(exists){
    if(exists){
        fs.readFile(filename, function(err, data){
            me = JSON.parse(data);
            me.updated++;
            updateFile();
        });
    } else {
        me = {
            name: "Laura",
            age: 28,
            updated: 0
        }
        updateFile();
    }
});

function updateFile(){
    fs.writeFile(filename, JSON.stringify(me), function(err){
        console.log("File Updated");
    })
}