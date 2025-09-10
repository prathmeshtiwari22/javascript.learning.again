// Functions 
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Bob"));

// Function with default parameter
function add(a, b = 0) {
    return a + b;
}
console.log(add(5, 3)); // 8
console.log(add(5));    // 5

// Function expression
const multiply = function(x, y) {
    return x * y;
};
console.log(multiply(4, 5)); // 20

// Arrow function
const divide = (x, y) => x / y;
console.log(divide(20, 4)); // 5

// Arrow function with multiple lines
const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};
console.log(factorial(5)); // 120

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This is an IIFE!");
})();


// Function with objects and arrays 
function calculateTotal(...num){ //Rest operator it collects all arguments into an array
    return num;
}
console.log(calculateTotal(5,2,3,2,3,4,5,6,7,8,9));

const user={name:"sachin",age:24}
function displayUser(anyobject){ // destructuring in function parameter
    console.log(`Name: ${anyobject.name}, Age: ${anyobject.age}`);
}
displayUser(user);