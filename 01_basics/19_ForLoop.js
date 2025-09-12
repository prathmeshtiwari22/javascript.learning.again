// For Loop and Break and Continue
for (let index = 0; index < array.length; index++) {
    const element = array[index];   
}

// for loop 
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit the loop when i is 5
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // skip the iteration when i is 5
    }
    console.log(i);
}

// nested for loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// label in for loop
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // exit the outer loop when i is 1 and j is 1
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}

// for...of loop
const array = ['a', 'b', 'c'];
for (const element of array) {
    console.log(element);
}

// for...in loop
const object = {a: 1, b: 2, c: 3};
for (const key in object) {
    console.log(`${key}: ${object[key]}`);
}

// forEach loop
array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
});

