// Arrays

let arr = [0,1,2,3,4,5];

// console.log(arr);
// console.log(arr.indexOf(9));
// console.log(arr.indexOf(4));
// console.log(arr.includes(7));

let newArr = new Array(0,1,2,3,4,5,6);

// console.log(newArr);

// -------------------methods------------------------------

newArr.push(9)
newArr.push(6)
newArr.pop()
// console.log(newArr);

newArr.unshift(9)
// console.log(newArr);
newArr.shift()
// console.log(newArr);

const myarr = newArr.join();

// console.log(myarr);
console.log('A ', newArr);

const myn1 = newArr.slice(0,3);
console.log(myn1);

console.log('B ', newArr);

const myn2 = newArr.splice(0,4);

console.log(myn2);

console.log('C ', newArr);
