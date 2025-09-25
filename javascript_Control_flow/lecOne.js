 
/* the comparison operators are used with control statements they are listed below:-
    <,>,<=,>=,!=,==,===(strict equal to),!==
    here the difference between "strict equal too" and "normal equal too" is 
    strict equal to compares values along with with there data type it will return true only if the
    comparison is between same data type and is equal on the other hand normal equal to compares only values
    for eg. 2=="2" is true when comparing with "normal equal too" 
    while 2==="2" is false when used with strict or "triple equal too"
*/

// if control flow statement 

if (2=="2"){
    console.log("Executed with double equal too");
}

if (2==="2") {
    // this scope block will never be executed
    console.log("executed with triple equal too ");
    
}

// control flow statement 
/* 
-------------Syntax if else ------------------
if (condition) {
    
}else {
    
}
    here are some conditional operators used with control flow statements which are as follows:-
    ==,!=,<=,>=,<,>,===,!==,??,&&,||
*/

const isloggedIn = true;
const temperatureIs = 41;
// strict equal too or triple equal too
// if (temperatureIs === 41){
//     console.log("yes temperature is high");
// }

if (temperatureIs <=40) {
    console.log("temperature is moderate");
}
else if (temperatureIs <=30) {
    console.log("temperature is lively");
}
else if(temperatureIs<=20 && temperatureIs>=0){
    console.log("winters have arrived");
}
else {
    console.log("temperature is unbearable");
}

// single line if-else condition (note :- generaly this way of using if-else conditions is not recomended)
const balance = 30
if (balance >=100) console.log(`${balance} is the amoumn left`);
else console.log(`${balance} is the amount which is low please maintain it to prevent penalty`);

//  Nullish coalescing opperator (??): null undefined

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20
// console.log(val1);

// ternary operator

// condition ? true:false
