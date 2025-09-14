// why var is not used 

var c= 300;

if (true) {
    let a =10;
    const b= 20;
    c = 30;   
}

// console.log(a);
// console.log(b);
console.log(c);

// above var dosen't follow scope concept so whether it's decalered inside a block or outside the value will be global 

function one(){
    const username = "Vishal";
    function two(){
        const website = "vishal.com";
        // console.log(username);
        // console.log(website);
    }
    // console.log(val2) this val2 is out of scope so it will return error
    two() // this two must be called here it can't be called outside as its scope is within this loop 
}
one() 

if (true){
    const username = "vishal"
    if(username === "vishal"){
        const website = " github.com"
        // console.log(username + website);
    }
    // console.log(website); this will give error because its out of its scope
}
// console.log(username); this will give error because its out of its scope

// this type of function can be called above the function and then be declared
function addOne(num){
    return num+1;
}

addOne(5)

// this function can be called once its declared
const addTwo = function addTwo(num){
    return num+2;
}

addTwo(5)