// Arrays Aditional functions 

const marvel_heros = ["Spiderman","Iron Man","Thor"]
const dc_heros =  ["Superman","Batman","Flash"]

// --------Push function
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// --------Concat function
// const new_heros = marvel_heros.concat(dc_heros);
// console.log(new_heros);

// --------spread operation 
const all_heros = [...marvel_heros,...dc_heros];
// console.log(all_heros);

// converting an array consisting of multiple arrays within it to a single array with all th values 
const another_array = [[1,2,3],[4,5,6],7,[8,[9,10]]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

//------More Functions

console.log(Array.isArray("Vishal"));
console.log(Array.from("Vishal"));
console.log(Array.from({name :"Vishal"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));



