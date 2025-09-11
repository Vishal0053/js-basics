// objects in javascript
let lastName = "Giri"
const first_Obj = {
    id : Math.floor(Math.random()*1000+100),
    name : "Vishal Giri",
    [lastName] : "Goshwami",
    balance : 12345
} 
// console.log(first_Obj.id);

console.log(first_Obj["id"]);
console.log(first_Obj[lastName]);
