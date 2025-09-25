// truthy values in javaScript

// truthy and falsey values in control statements 

const userName = []

if (userName) {
    console.log(`Hello Mr. ${userName}, Welcome`);
}

// falsy values 
// false ,0 ,-0 ,BigInt On,"",null,undefined,NaN

// truthy values
// "0",'false'," ",[],{},function(){}

if (userName.length === 0){
    console.log("Array is empty");
}

const obj = {
    val1:"val1",
    val2:"val2",
    val3:"val3",
    val4:"val4",
    val5:"val5"
}

if ((Object.keys(obj)).length === 0){
    console.log("the object is empty");
}
else {
    console.log(`${(Object.keys(obj)).length} is the length of the object`);
}