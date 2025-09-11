// Scope
/*
let a=10; // Global scope
function testScope(){
    let b=20; // Local scope
    console.log("Inside function:",a,b);
}
testScope();
console.log("Outside function:",a);
console.log(b); // Error: b is not defined
// b is not accessible here

// Global and Local variables with same name
let x=100; // Global variable
function demo(){
    let x=200; // Local variable
    console.log("Inside function:",x); // 200
}
demo();
console.log("Outside function:",x); // 100

// Modifying global variable inside function
function one(){
    const username="sachin"; // local variable
    console.log(username);
    function two(){
        const website = "Youtube";
        console.log(username); // Accessing outer function variable
    }
     console.log(website); // Error: website is not defined
    two();
}
*/
/*
if(true){
    const username="hitesh";
    if(username==="hitesh"){
        const website= "Youtube";
        console.log(username,website);
    }
    console.log(website); // Error: website is not defined
}
console.log(username); // Error: username is not defined

// +++++ interesting example +++++
function addone(num){
    return num+1;
}
addone(5);
console.log(num); // Error: num is not defined
// num is a local variable to the function addone and cannot be accessed outside the function
// This is because JavaScript uses function scope, meaning that variables declared within a function are not accessible outside of that function.
*/
// Hoisting
addone(5) // 6
function addone(num){
    return num+1;
}
// addone function is hoisted, so it can be called before its declaration but addTwo cannot be called before its declaration
//  because function declarations are hoisted to the top of their containing scope, allowing them to be used before they are defined in the code.
// But in case of function expressions, only the variable declaration is hoisted, not the assignment.
// So, if you try to call a function expression before it is defined, you will get an error.
//  thanks to hoisting

addTwo(5) // Error: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2;
}
// 7
// In JavaScript, function expressions are not hoisted. This means that you cannot call a function expression before it is defined in the code. If you try to do so, you will get a ReferenceError.