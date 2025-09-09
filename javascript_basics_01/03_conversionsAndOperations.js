let value = "-22"
// console.log(typeof(value));
let Num = Number(value)
console.log(typeof(Num));
// console.log(Num);
let Yn = Boolean(Num)
// console.log(Yn);
let BI = BigInt(value)
// console.log(BI);

// ------------------------- Operations -----------------------------------------//

let num =22

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

/*
------------output---------------
12
12
12
122
32
*/

// console.log(num+num);
// console.log(num-num);
// console.log(num*2);
// console.log(num**2);
// console.log(num/2);
// console.log(num%2);

/*
------------output---------------
44
0
44
484
11
0
*/

// post and pre increment and decrement operator

//pre decrement operator and increment operator

let b=2
let c=2
let predec= --b
let preincr = ++c
console.log(predec);
console.log(preincr);

// post decrement and increment operator 
// the value for b and c after pre increment decrement has been changes and they are as b = ,c = 

let postDec = b--
let postInc = c++
console.log(postDec);
console.log(postInc);
