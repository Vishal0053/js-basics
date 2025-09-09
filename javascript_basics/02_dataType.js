/*
# Primitive Data types: call by value
String
BigInt
Number
null
Boolean
undefined
Symbol

# Reference (Non-Primitive)
arrays
objects
functions

*/

// String
let nameOf = "Vishal"
console.log(nameOf);

// BigInt
let Population = 2341567891223n
console.log(Population);
// Number
let integer = 12
let floating = 12.33
console.log(integer);
console.log(floating);
// null - "StandAlone data type"
let empty = null
// undefined - "when the value is not assigned usually the undefined data type"
let undefi
console.log(typeof undefi);
// Symbol
let unique = Symbol('dishant')
console.log(typeof unique);

// Non primitive data type : arrays,objects,functions

// arrays
const arr = [12,34,56];

// objects
let myObj = {
    Name : "vishal",
    age : 22
};

// functions

let myfunc = function () {
    console.log("this is a function");
    
}

// info : in primitive data is stored in stack memory and non primitive data type is stored in heap memory