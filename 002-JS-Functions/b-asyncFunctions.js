console.log("Start of App");

// Synchronous Function (blocking)

var addSync = function (a, b) {
    var answer = a + b;
    console.log("addSync() completed - answer = " + answer);
}

console.log("About to call addSync()");
addSync(5, 6);

// Simulated asynchronous Function

var addAsync = function (a, b, cb) {
    var timeDelay = Math.round(Math.random() * 1000);

    setTimeout(function () {
        var answer = a + b;
        cb(answer);
    }, timeDelay);
};

addAsync(10, 20, function (result) {
    console.log("First addAsync() completed - answer = " + result);
});

addAsync(5, 30, function (result) {
    console.log("Second addAsync() completed - answer = " + result);
});

// Random wait for function to return

console.log("End of App");

