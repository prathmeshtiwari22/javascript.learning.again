// stack and heap
// stack - memory for primitive data types (number, string, boolean, null, undefined, symbol, bigint)
// heap - memory for non-primitive data types (objects, arrays, functions)
// primitive data types are stored in stack memory
// non-primitive data types are stored in heap memory and reference to that memory is stored in stack memory

let num1 = 6; // stored in stack
let num2 = num1; // stored in stack
console.log("num1", num1); // 6
console.log("num2", num2); // 6
num1++; // num1 = num1 + 1
console.log("after incrementing num1");
console.log("num1", num1); // 7
console.log("num2", num2); // 6             

let arr1 = ["item1", "item2"]; // stored in heap and reference is stored in stack
let arr2 = arr1; // both arr1 and arr2 point to same reference in stack
console.log("arr1", arr1); // ["item1", "item2"]
console.log("arr2", arr2); // ["item1", "item2"]
arr1.push("item3"); // both arr1 and arr2 will be affected
console.log("after pushing item3 to arr1");
console.log("arr1", arr1); // ["item1", "item2", "item3"]
console.log("arr2", arr2); // ["item1", "item2", "item3"]   

// stack memory example
let myYoutubename = "hitesh choudhary";
let myNewYoutubeName = myYoutubename; // both are independent
console.log("myYoutubename", myYoutubename); // hitesh choudhary
console.log("myNewYoutubeName", myNewYoutubeName); // hitesh choudhary
myYoutubename = "code with harry"; // only myYoutubename will be affected
console.log("after changing myYoutubename");
console.log("myYoutubename", myYoutubename); // code with harry
console.log("myNewYoutubeName", myNewYoutubeName); // hitesh choudhary

// heap memory example
let arr3 = ["item1", "item2"];
let arr4 = arr3; // both point to same reference
console.log("arr3", arr3); // ["item1", "item2"]
console.log("arr4", arr4); // ["item1", "item2"]
arr3.push("item3"); // both will be affected
console.log("after pushing item3 to arr3");
console.log("arr3", arr3); // ["item1", "item2", "item3"]
console.log("arr4", arr4); // ["item1", "item2", "item3"]

// to create independent copy of array use spread operator
let arr5 = ["item1", "item2"];
let arr6 = [...arr5]; // independent copy
console.log("arr5", arr5); // ["item1", "item2"]
console.log("arr6", arr6); // ["item1", "item2"]
arr5.push("item3"); // only arr5 will be affected
console.log("after pushing item3 to arr5");
console.log("arr5", arr5); // ["item1", "item2", "item3"]
console.log("arr6", arr6); // ["item1", "item2"]