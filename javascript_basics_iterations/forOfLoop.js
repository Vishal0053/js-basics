// For Of Loop 

const arr = ["vishal","Ashish","Aditya"]

for (const val of arr){
    // console.log(val);
}

const greetings = "Hello World"
let i = 0;
for (const greet of greetings){
    // console.log(`Char ${greet} is at ${i}`);
    i++;
}

const map = new Map();
map.set("IN","India");
map.set("USA","United States of America");
map.set("Fr","France");

// console.log(map)
for (const [key,value] of map) {
    console.log(`Short code for ${value} is ${key}`)
}

// normal object can't be accessed using for of loop for it we use for in loop 