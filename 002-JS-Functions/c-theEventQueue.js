console.log("Start of App");

var fs = require("fs");

var count = 0;
var loggingLoop = function () {
    count++;
    console.log("Tick " + count);

    if (count < 10) {
        process.nextTick(loggingLoop);
    }
}

console.log("About to call an asynchronous read dir");
fs.readdir("./", function(err, files){
    if(err) throw err;
    console.log("Async FS has returned files - " + files);
});

console.log("About to call a synchronous read dir");
console.log("Sync FS has returned files - " + fs.readdirSync("./"));

console.log("About to call a setTimeout with no time delay");
setTimeout(function(){
    console.log("setTimeout called");
}, 0);

process.nextTick(function () {
    count++;
    console.log("Tick " + count);
})

process.nextTick(function () {
    count++;
    console.log("Tick " + count);
})

process.nextTick(function () {
    count++;
    console.log("Tick " + count);
})

console.log("About to call the logging loop");

process.nextTick(loggingLoop);

console.log("End of App");