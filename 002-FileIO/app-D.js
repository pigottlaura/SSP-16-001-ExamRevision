var fs = require("fs");

fs.readdir("C:/TestContent", function(err, files){
	if(err) throw err;
	for(var i = 0; i < files.length; i++){
		fs.appendFile("C:/TestContent/" + files[i], "\r\nI love javascript", function(err){
			if(err) throw err;
			console.log("The data was appended to the file");
		});
	}
});