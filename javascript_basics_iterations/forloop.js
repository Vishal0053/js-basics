// For Loop 
// for loop 
for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log("5 is the best");
    }
    // console.log(element);
}

// multiplication table

for (let i = 1; i <= 10; i++) {
    // console.log(`multiplication table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop ${j}`);
        // console.log(`${i} X ${j} = ${i*j}`);
    }
}

// arrays with for loop

const myArray = ["vishal","Ashish","Aditya"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// break and continue

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log("oops you can't procede further");
        break;
    }
    console.log(`the number is ${index}`);
}
for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log(`multiple of 5 detected ${index}`);
        continue;
    }
    console.log(`the number is ${index}`);
}