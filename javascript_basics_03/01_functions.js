// functions without return type and parameters
function hello1(){
    console.log("V");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");
}
// hello1()
// function with parameters without return type
function addTwoNumbers2(number1,number2) {
    console.log(number1+number2);    
}
// addTwoNumbers2(43,23)

// function without parameters but with return type

function addTwoNumbers3() {
    return 5+2;
}
// console.log(addTwoNumbers3())
// function with parameters and return type

function addTwoNumbers4(number1,number2) {
    return number1+number2;
}

// console.log(addTwoNumbers4(45,34))

// using string interpolation with functions 

function user(Username) {
    return `${Username} just logged in`
}

// giving default value to a function

function userDef(Username = "Vishal") {
    return `${Username} just logged in`
}


// cart price problem solution using functions using rest method

function cartPriceAdition(...val){
    return val;
}

console.log(cartPriceAdition(12,23,4,56,7));

const userDetails = {
    username : "vishal",
    country : "India"
} 

function Details(anyobj) {
    console.log(`Username ${anyobj.username} and the country he belongs is ${anyobj.country}`);
}

// Details(userDetails)
 

// We even can define object when we call the function 

Details({
    username: "Vishal",
    country: "India"
})

// Array implementation in functions 

const data = [100,200,300,400,500];

function DataRetrive(anyarr){
    return anyarr[0]
}

console.log(DataRetrive([1,2,3,4,5,6,7,8,9]));

// 5:05:30 