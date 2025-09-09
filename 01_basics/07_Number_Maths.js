// Numbers
"use strict"; // treat all JS code as newer version

let num1 = 6;
let num2 = 3;

console.log("num1 + num2 =", num1 + num2); // addition
console.log("num1 - num2 =", num1 - num2); // subtraction
console.log("num1 * num2 =", num1 * num2); // multiplication
console.log("num1 / num2 =", num1 / num2); // division
console.log("num1 % num2 =", num1 % num2); // modulus
console.log("num1 ** num2 =", num1 ** num2); // exponentiation

// Increment and Decrement
console.log("num1 before increment:", num1); // 6
num1++;
console.log("num1 after increment:", num1); // 7
num1--;
console.log("num1 after decrement:", num1); // 6

// Compound Assignment Operators
num1 += 2; // equivalent to num1 = num1 + 2
console.log("num1 after += 2:", num1); // 8
num1 -= 2; // equivalent to num1 = num1 - 2
console.log("num1 after -= 2:", num1); // 6
num1 *= 2; // equivalent to num1 = num1 * 2
console.log("num1 after *= 2:", num1); // 12
num1 /= 2;          // equivalent to num1 = num1 / 2
console.log("num1 after /= 2:", num1);

// prathmesh
const balanace = new Number(123.342);
console.log(balanace);
console.log(typeof balanace);
console.log(balanace.toString().length);
console.log(balanace.toFixed(2)); // decimal points
console.log(balanace.toPrecision(4)); // total digits
console.log(balanace.valueOf()); // primitive value
console.log(typeof balanace.valueOf());
console.log(balanace.toLocaleString('en-IN')); // Indian currency format

// parseInt and parseFloat
let mystr = "123.456abc";
let mynum = Number(mystr); // NaN
console.log(mynum);
mynum = parseInt(mystr); // 123
console.log(mynum);
mynum = parseFloat(mystr); // 123.456
console.log(mynum);

// Math object      
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.sqrt(16):", Math.sqrt(16));   // square root
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // exponentiation
console.log("Math.abs(-5):", Math.abs(-5));   // absolute value
console.log("Math.ceil(4.2):", Math.ceil(4.2)); // round up
console.log("Math.floor(4.7):", Math.floor(4.7)); // round down
console.log("Math.round(4.5):", Math.round(4.5)); // round to nearest integer
console.log("Math.min(1, 2, 3, -4, 5):", Math.min(1, 2, 3, -4, 5)); // minimum value
console.log("Math.max(1, 2, 3, -4, 5):", Math.max(1, 2, 3, -4, 5)); // maximum value
console.log("Math.random():", Math.random()); // random number between 0 and 1  
console.log("Math.floor(Math.random() * 10):", Math.floor(Math.random() * 10)); // random integer between 0 and 9           
