var fristName = "Jenni";
var lastName = "kim";
var fullName = fristName + " " + lastName;
console.log(fullName);


// for addition string number integer
var onionPrice = "40";
var eggPrice = "30";
// A string to convert into a number. Converts a string to an integer. parseint()
var onionPriceNumber = parseInt(onionPrice);
var eggPriceNumber = parseInt(eggPrice);
console.log(onionPriceNumber + eggPriceNumber);

// parseFloat() A string that contains a floating-point number.Converts a string to a floating-point number.

// for addition the string number float
var onionPrice = "40.50";
var eggPrice = "30.23";

var onionPriceNumber = parseFloat(onionPrice);
var eggPriceNumber = parseFloat(eggPrice);
console.log(onionPriceNumber + eggPriceNumber); 

// speacial edition

var firstNumber = 0.2;
var lastNumber = 0.3;

var total = firstNumber + lastNumber;

total = total.toFixed(1);
total = parseFloat(total);

console.log(total);


