// Strings

// string concatenation
let Name ="vishal"
let age = 22
let concatStr = "Hello my name is " + Name + " and My age is " +age;
// console.log(concatStr);

/* above is the way of cancatenating a string but can be avoided but instead we can use String 
interpolation to perform the same task 
*/
// String Interpolation
let ipStr = `Hello my name is ${Name} and my age is ${age}`
// console.log(ipStr);
const Gamename = new String("karan")

// String Functions

let Str1 = "kar"
let str2 = "an"
console.log(Str1.__proto__)
console.log(`concated String is ${Str1.concat(str2)}`);
console.log(`charector at a location using charat ${Str1.charAt(2)}`)
console.log(`charector at a location using at ${Str1.at(1)}`);
console.log();



