// Dates
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

// let mycreatedDate = new Date(2023,0,23);
// let mycreatedDate = new Date("2023-01-23");
let mycreatedDate = new Date("01-23-2023");
console.log(mycreatedDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000));

let obj = myDate.toLocaleString('default', {
    month: "long",
    day : "2-digit"
})

console.log(obj)