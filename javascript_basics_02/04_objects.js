// using constructor (singleton objects)

const tinder = new Object();

tinder.id = 123;
tinder.UserName = "Ashish";
tinder.isLoggedin = false

// console.log(tinder);

const regularUser = {
    email:"user@email.com",
    fullName: {
        firstName : "Vishal",
        lastName : "Giri"
    }
}

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// merging two ojects

// const obj3  = Object.assign({},obj1,obj2)
// console.log(obj3)

// spread operation

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        fName:"vish",
        lName:"giri"
    },
    {
        fName : "shal",
        lname : "giri"
    }
]

// console.log(user[0].fName)

// console.log(tinder)
// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))

// console.log(tinder.hasOwnProperty("isLoggedin"))

// object destructuring

const course = {
    corseName : "javaScript",
    price: "999",
    CourseInstructor : "Vishal"
}

const {CourseInstructor : CI} = course;
console.log(CI);
