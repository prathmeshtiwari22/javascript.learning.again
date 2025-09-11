// IIFE
// Immediately Invoked Function Expression
(function(){
    console.log("This is an IIFE!");
})();
// Another way to write IIFE
(() => {
    console.log("This is another IIFE using arrow function!");
})();
(()=>{
 console.log("Third IIFE example");
 
})();  // without semicolon also works but it's a good practice to use semicolon before IIFE to avoid issues in concatenated scripts
// it should give error without semicolon if the previous line is not terminated properly
// Example of IIFE with parameters
((name) => {
    console.log(`Hello, ${name}! This is an IIFE with a parameter.`);
})("Alice");    