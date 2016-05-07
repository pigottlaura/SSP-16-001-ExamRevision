// Functions as Variables
var add = function (a, b) {
    return a + b;
}

var subtract = function (a, b) {
    return a - b;
}

console.log("IN VARIABLES - " + add(2, 5));
console.log("IN VARIABLES - " + subtract(7, 4));

// Functions in Arrays

var myFunctions = [
    add,
    subtract,
    function (a, b) {
        return a * b;
    }
];

for (var i = 0; i < myFunctions.length; i++) {
    console.log("IN ARRAYS - " + myFunctions[i](8, 7));
}

// Functions in Objects

var myCalculator = {
    addMe: add,
    subtractMe: subtract,
    multiplyMe: function (a, b) {
        return a * b;
    },
    divideMe: function (a, b) {
        return a / b;
    }
}

console.log("IN OBJECTS - " + myCalculator.addMe(2, 2));

// Functions as arguments to other functions

var invokeFunction = function (func, a, b) {
    console.log("AS ARGUMENTS - " + func(a, b));
};

invokeFunction(add, 1, 4);
invokeFunction(function (a, b) {
    return a / b;
},
    25,
    5
);

// Returning functions from other functions (using switch)

var invokeFunctionAt = function (index) {
    var functionToInvoke;

    var multiply = function (a, b) {
        return a * b;
    }

    if (typeof index == "number") {
        switch (index) {
            case 0:
                functionToInvoke = add;
                break;
            case 1:
                functionToInvoke = subtract;
                break;
            case 2:
                functionToInvoke = multiply;
                break;
            case 3:
                functionToInvoke = function (a, b) {
                    return a / b
                }
                break;
            default:
                functionToInvoke = add;
        }

        return functionToInvoke;
    }
};

for (var i = 0; i < 4; i++) {
    console.log("RETURNING FROM OTHER FUNCTIONS - " + invokeFunctionAt(i)(4, 2));
}

// Function Properties
subtract.operationName = "Subtraction";
add.operationName = "Addition";

console.log("The subtract function performs " + subtract.operationName);
console.log("The add function performs " + add.operationName);