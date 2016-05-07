console.log("Hello World");

function printToConsole(message){
    console.log(message);
}

printToConsole("Hello Again");


var printMultiple = function(message, count){
    for(i = 0; i < count; i++){
        console.log((i + 1) + " - " + message);
    }
}

printMultiple("Print Me", 6);


// Variable Scope

var globalVar = 10;

var myFunction = function(){
    var localVar = 5;
    console.log("In function - globalVar = " + globalVar);
    console.log("In function - localVar = " + localVar);
    
    // This variable has not yet been declared, and so will be hoisted
    newVar = 20;
    
}

myFunction();

console.log("Outside of function - globalVar = " + globalVar);

try{
    console.log("Outside of function - localVar = " + localVar);
} catch(e){
    console.log("Outside of function - localVar = " + e);
}

console.log("Outside of function - newVar = " + newVar);

// Objects
var myObject1 = {
    name: "Laura",
    age: 28,
    modules: ["Server Side Programming", "Video 2", "Team Project", "Work Experience"],
    increaseAge: function(){
        this.age++;
        console.log(this.name + "'s age is now " + this.age);
    }
}

console.log(myObject1.name);
console.log(myObject1.age);
for(mod in myObject1.modules){
    console.log(myObject1.modules[mod]);
}
myObject1.increaseAge();


var myObject2 = new Object();
myObject2.name = "Laura";
myObject2.age = 28;
myObject2.favMovies = ["Revenge of the Sith", "Iron Man", "A New Hope"];
myObject2.addNewFavMovie = function(newMovie){
  this.favMovies.push(newMovie);  
};

console.log(myObject2.name);
console.log(myObject2.age);
myObject2.addNewFavMovie("The Day After Tomorrow");
for(mov in myObject2.favMovies){
    console.log(myObject2.favMovies[mov]);
}

var Person = function(_name, _age){
    this.name = _name;
    this.age = _age;
    this.sayHi = function(){
        console.log("Hi from " + this.name + " aged " + this.age);
    }
}

var p = new Person("Laura", 28);
p.sayHi();