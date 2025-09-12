// singleton
// Object.create

// objects literals in javascript
let lastName = "Giri"

const Mysym = Symbol("key1")
const first_Obj = {
    id : Math.floor(Math.random()*1000+100),
    name : "Vishal Giri",
    [Mysym] : "Goshwami",
    balance : 12345
} 
// console.log(first_Obj.id);
first_Obj.balance =98765;
// Object.freeze(first_Obj);
first_Obj.balance =987609099;
console.log(first_Obj["id"]);
console.log(first_Obj);

first_Obj.greeting = function () {
    console.log("hello Mr. How are you");
}
console.log(first_Obj.greeting());

first_Obj.greetingtwo = function () {
    console.log(`hello Mr.${this.name} How are you`);
}

console.log(first_Obj.greetingtwo());

