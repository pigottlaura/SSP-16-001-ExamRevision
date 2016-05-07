var fs = require("fs");

var Person = function(_name, _age){
    this.name = _name;
    this.age = _age;
    this.count = 0;
}

var a = new Person("Teresa", 21);
var b = new Person("Laura", 28);
var c = new Person("Marie", 27);
var d = new Person("David", 25);
var e = new Person("Barry", 24);
var f = new Person("Joseph", 23);

var family = [a, b, c, d, e, f];

var filename = "./family.json";

console.log(family);

fs.writeFile(filename, JSON.stringify(family), function(err){
    if(err) throw err;
    console.log("Family saved to file as JSON");
    rebuildFromFile();
});

function rebuildFromFile(){
    fs.readFile(filename, function(err, data){
        if(err) throw err;
        
        var recreatedFamilyArray = JSON.parse(data);
        
        for(f in recreatedFamilyArray){
            recreatedFamilyArray[f].count++;
        }
        
        console.log(recreatedFamilyArray);
    });
}
