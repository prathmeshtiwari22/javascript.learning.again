"use strict" //treat all JS code as newer version

// alert( 3+ 3) // we are using nodejs , not browser
/*
console.log(typeof "hff");


// Datatypes        
console.log(typeof 3.14);
console.log(typeof 3);
console.log(typeof -3);
console.log(typeof -3.14);

console.log(typeof true);
console.log(typeof false);

console.log(typeof NaN); // special numeric value

console.log(typeof ""); // string can be empty also
console.log(typeof "hello");
console.log(typeof 'hello');
console.log(typeof `hello`); // ES6 feature

console.log(typeof undefined); // when variable is not assigned any value

console.log(typeof null); // bug in JS , it shows object but it should be null

console.log(typeof {name: "harshit", age: 22}); // object datatype
console.log(typeof [1,2,3,4,5]); // array is also object in JS
console.log(Array.isArray([1,2,3,4,5])); // to check if array or not

console.log(typeof function(){}); // function is also datatype in JS    
*/
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {   
    name: "harshit",
    age: 22,
    isMarried: false,
    hobbies: ["coding", "reading", "gaming"],
    greet: function(){
        console.log("hello");
    },
    myHero: heros
}

console.log(myObj);
console.log(myObj.name);
console.log(myObj.hobbies);
myObj.greet();
console.log(myObj.myHero);

// loops        
for(let i=0; i<heros.length; i++){
    console.log(heros[i]);
}