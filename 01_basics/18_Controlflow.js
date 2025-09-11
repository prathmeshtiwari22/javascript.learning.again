// Control flow
let x = 10; 

// if-else statement
if (x > 0) {
    console.log("x is positive");
} else if (x < 0) {
    console.log("x is negative");
} else {
    console.log("x is zero");
}
// for loop

for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}
// while loop
let count = 0;
while (count < 3) {
    console.log(`Count is ${count}`);
    count++;
}

// do-while loop    
let num = 0;
do {
    console.log(`Number is ${num}`);
    num++;
} while (num < 2);

// switch statement 
switch (x) {
    case 10:
        console.log("x is ten");
        break;
    case 20:
        console.log("x is twenty");
        break;
    default:
        console.log("x is neither ten nor twenty");
}
// break and continue
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip the rest of the loop when i is 2
    }
    if (i === 4) {
        break; // Exit the loop when i is 4
    }
    console.log(i);
}
// Ternary operator
// condition ? exprIfTrue : exprIfFalse
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
let candrink = (age>=21) ? "you can drink": "you cannot drink";
console.log(candrink);
console.log(canVote);

// nullish coalescing operator
let userInput = null;
let defaultValue = "Default Value";
let finalValue = userInput ?? defaultValue; // finalValue will be "Default Value"
console.log(finalValue); // either null or undefined    
let final= null??10??20; // it will return first defined value
console.log(final); // 10
// Optional chaining operator