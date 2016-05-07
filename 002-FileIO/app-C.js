console.log("Start of App \n");

var fs = require("fs");

fs.readFile("./TestContent/LoremIpsum.txt", { encoding: "utf-8", flags: "r" }, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("Original file data = \n\t" + data + "\n");

        fs.writeFile("./duplicateOfLoremIpsum.txt", data, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("File Duplicated \n");
            }
        });
    }
});


fs.readdir("./TestContent", function (err, files) {
    if (err) throw err;

    var fileNamesSeperated = "";
    for (f in files) {
        fileNamesSeperated += files[f] + "\n";
    }

    fs.writeFile("NameOfAllDocs.txt", fileNamesSeperated, function (err) {
        if (err) throw err;
        console.log("File names array saved to new file \n");
    })
});

fs.readFile("./appendTextToThisFile.txt", { encoding: "utf-8", flags: "r" }, function (err, data) {
    if (err) throw err;
    console.log("Read Contents of file - \n" + data + "\n");
});

fs.appendFile("./appendTextToThisFile.txt", "\nThis line was appended on " + new Date(), function (err) {
    if (err) throw err;
    console.log("New line appended to file \n");

    fs.readFile("./appendTextToThisFile.txt", { encoding: "utf-8", flags: "r" }, function (err, data) {
        if (err) throw err;
        console.log("Read Contents of file again - \n" + data + "\n");
    });
});

console.log("End of App \n");