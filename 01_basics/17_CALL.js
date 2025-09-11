// exceution code + call stack

/*
Javascript execution context has two phases:
1. Creation phase
2. Execution phase
3.Function execution context
4. Evaluation phase

1. Creation phase:
   - Global object (In browsers, it's the 'window' object)
   - 'this' keyword (In global context, it refers to the global object)
   - Memory allocation for variables and functions (variables are initialized with 'undefined', functions are fully hoisted)

2. Execution phase:
   - Code is executed line by line
   - Variables are assigned their actual values
   - Functions can be invoked
   */


   // 1- Memory creation phase
   // it is also called as hoisting phase or creation phase
   // 2- Code execution phase
   // it is also called as execution phase or activation phase

   // Global Execution Context (GEC)
   // It is the default or base execution context where the code starts executing.
   // In a browser, the global object is 'window', and in Node.js, it is 'global'.
   // what is window?
   // it is a global object that represents the browser window or tab in which the script is running.
   // It provides various properties and methods to interact with the browser, such as manipulating the DOM, handling events, and managing cookies.
   // In the global execution context, 'this' refers to the global object (window in browsers, global in Node.js).

   // Function Execution Context (FEC)
   // Each time a function is invoked, a new execution context is created for that function.
   // This context contains the function's arguments, local variables, and the value of 'this'.

   // STEPS HOW JAVASCRIPT CODE IS EXECUTED
   // 1. The global execution context is created and pushed onto the call stack.
   // 2. The code is executed line by line.
   // 3. When a function is called, a new function execution context is created and pushed onto the call stack.
   // 4. The function's code is executed.
   // 5. Once the function completes, its execution context is popped off the call stack, and control returns to the previous context.
   // 6. This process continues until all code has been executed and the call stack is empty.

   // example of call stack and execution context
   let val1=10; // GEC
   let val2=20; // GEC
   function multiply(num1,num2){ // FEC1
       return num1*num2;
   }
   let result=multiply(val1,val2); // GEC
   let results=multiply(5,6); // GEC
   // 1. global execution -> this created here
   // 2. memory creation phase -> val1,val2,multiply,result,results (initialized with undefined)
   // 3. code execution phase -> val1=10,val2=20,multiply=function, result=200, results=30
   // 4. multiply function execution context created when it is called
   // 5. memory creation phase of multiply function -> num1,num2 (initialized with undefined)
   // 6. code execution phase of multiply function -> num1=10,num2=20 (first call) and num1=5,num2=6 (second call)
   // 7. multiply function execution context is popped off the call stack after execution
   console.log(result); // 200
   console.log(results); // 30

// Note: Each function call creates a new execution context, which is pushed onto the call stack. When the function completes, its context is popped off the stack, and control returns to the previous context.
// multiple functions 
function add(num1,num2){ // FEC2    
    return num1+num2;       
}       
let sum=add(5,10); // GEC
function subtract(num1,num2){ // FEC3
    return num1-num2;
}
let difference=subtract(20,5); // GEC
console.log(sum); // 15
console.log(difference); // 15

// Note: Each function call creates a new execution context, which is pushed onto the call stack. When the function completes, its context is popped off the stack, and control returns to the previous context.
//1. first global context is created
//2. memory creation phase of global context -> val1,val2,multiply,add,subtract,sum,difference (initialized with undefined)
//3. code execution phase of global context -> val1=10,val2=20,multiply=function,add=function,subtract=function,sum=15,difference=15
//4. multiply function execution context is created when it is called
//5. memory creation phase of multiply function -> num1,num2 (initialized with undefined)
//6. code execution phase of multiply function -> num1=10,num2=20
//7. multiply function execution context is popped off the call stack after execution
//8. add function execution context is created when it is called
//9. memory creation phase of add function -> num1,num2 (initialized with undefined)
//10. code execution phase of add function -> num1=5,num2=10
//11. add function execution context is popped off the call stack after execution
//12. subtract function execution context is created when it is called
//13. memory creation phase of subtract function -> num1,num2 (initialized with undefined)
//14. code execution phase of subtract function -> num1=20,num2=5
//15. subtract function execution context is popped off the call stack after execution
//16. finally global context is popped off the call stack after execution is complete
// 17. it is stack so last in first out (LIFO) order
// 18. first subtract function context is popped off
//19. then add function context is popped off
//20. then multiply function context is popped off
//21. finally global context is popped off