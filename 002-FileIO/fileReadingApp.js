console.log("Start of App");

var fs = require("fs");

var allFiles = [];

var FileData = function (_fileName, _fileContent) {
    this.name = _fileName;
    this.content = _fileContent;
}

var numOfFiles = 0;
var readFileAt = 0;

fs.readdir("./TestContent", function (err, files) {
    if (err) throw err;
    numOfFiles = files.length;

    getFileData(files);
});

var getFileData = function (files) {
    fs.readFile("./TestContent/" + files[readFileAt], { encoding: "utf-8", flags: "r" }, function (err, data) {
        if (err) throw err;

        var newFileData = new FileData(files[readFileAt], data);
        allFiles.push(newFileData);

        readFileAt++;

        if (readFileAt < numOfFiles) {
            getFileData(files);
        } else {
            console.log("All files read")
            printAllFilesData();
        }
    });
}

var printAllFilesData = function(){
    for(f in allFiles){
        console.log(allFiles[f].name + ": \n\t" + allFiles[f].content);
    }
}

console.log("End of App");