// forEachLoop 

// for Each loop 

const codding = ["JavaScript","C++","python","Java","Ruby"];

// first way of declaration
codding.forEach( function (value) {
    console.log(value);
})

codding.forEach ( (value) => {
    console.log(value);
})

codding.forEach( (value,index,arr) => {
    console.log(`the value is ${value} at index ${index} in array ${arr}`);
});

const myCodding = [
    {name: "JavaScript", type: "language"},
    {name: "C++", type: "language"},
    {name: "python", type: "language"},
    {name: "Java", type: "language"},
    {name: "Ruby", type: "language"}
]

mycodding = myCodding.sort( (a,b) => {
    console.log(a.name);
});
