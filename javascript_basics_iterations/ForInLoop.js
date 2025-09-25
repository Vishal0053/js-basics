// for in loop 

const myObject = {
    js: "JavaScript",
    Cpp: "C++",
    py: "python"
}

for (const key in myObject){
    // console.log(`the key ${key} holds the value ${myObject[key]}`);
}

const myArray = [10,20,30,40,50];

for (const index in myArray){
    // console.log(`the index is ${index} and the value is ${myArray[index]}`);
}

const myMap = new Map();
myMap.set(1,"one");
myMap.set(2,"two");
myMap.set(3,"three");

// for (const key in myMap){
//     console.log(key); // this will not work as expected because it is not iterable with for...in loop 
// }
