// Arrow Functions - ES6 feature
// Arrow functions provide a shorter syntax for writing functions and do not have their own 'this' context.

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice"));
console.log(greet("Bob"));

// THIS keyword in arrow functions
// IT DOES NOT HAVE ITS OWN 'THIS' CONTEXT
// THIS KEYWORD IS USED TO REFER TO THE OBJECT THAT IS EXECUTING THE CURRENT FUNCTION
const user = {
    name: "sachin",
    price: 999,
    welcomeMessage: function(){
       console.log(`${this.name}, welcome to our website!`);
       console.log(this); // 'this' refers to the user object
       const displayPrice = () => {
           console.log(`The price of the product is $${this.price}`); // 'this' still refers to the user object
       };
       displayPrice();

    }
};

user.welcomeMessage();
user.name = "hitesh";
user.price = 1999;
user.welcomeMessage();
 // In the global context, 'this' refers to the global object (window in browsers, global in Node.js)
// In the above example, the arrow function displayPrice inherits 'this' from its enclosing context, which is the welcomeMessage method of the user object. Therefore, 'this.price' correctly refers to user.price.

//Arrow functions cannot be used as constructors and will throw an error if you try to use them with the 'new' keyword.

// Arrow functions do not have the 'arguments' object. If you need to access the arguments of an arrow function, you can use rest parameters instead.
// Example of rest parameters
const chai = () => {
    let username = "sachin";
    console.log(this);
}
// This in arrow function refers to the enclosing context, which is the global object in this case.
// while in regular function it will be undefined in strict mode
const addTwo = (num1,num2)=> {
    return num1 + num2;
}
console.log(addTwo(5,3)); // 8
const addThree = (num1,num2,num3) => num1 + num2 + num3; // Implicit return
console.log(addThree(5,3,2)); // 10

const myArray = [1, 2, 3, 4, 5];
myArray.forEach(function(element) {
    console.log(element); // Regular function
});
myArray.forEach((element) => {
    console.log(element); // Arrow function
});