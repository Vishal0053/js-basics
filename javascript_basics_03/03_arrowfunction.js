// arrow functions

const user = {
    Uname: "Vishal",
    price: 999,

    welcomeMessage : function (){
        console.log(`${this.Uname}, Welcome to Website`);     
        console.log(this)   

    }
}

user.welcomeMessage();
user.Uname = "Ashish";
user.welcomeMessage()
// note-- this when used with object returns the context of the structure which is nothing but the values assigned to the variables and the function declared

// Arrow Function 
// syntax () => {}

// this is an explicit arrow function 
const addTwo = (num1,num2) =>{
    return num1+num2;
}

console.log(addTwo(5,4));

// now implicit arrow function where we don't use return keyword

const addNum = (num1,num2) => (num1+num2)

// now for object using implicit arrow function 

const addN = () => ({user:"Uname"})

console.log(addN())