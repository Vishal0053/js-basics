// ------------------Number--------------------

const Score = 400;
console.log(Score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.554456;
console.log(otherNumber.toPrecision(3));

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-In'));

// -----------------------Math-------------------------

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.9))
console.log(Math.max(2,3,4,8))
console.log(Math.min(2,3,4,8))
console.log(Math.round(Math.random()*10 + 1));
let min = 3
let max = 15
console.log(Math.round(Math.random() * (max-min+1)+min))
