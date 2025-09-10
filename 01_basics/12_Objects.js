// DE-Structure and JSON API Basics

// 1. Object Creation
let obj1 = {}; // Using object literal syntax
let obj2 = new Object(); // Using the Object constructor

// 2. Adding Properties
obj1.name = "Alice";
obj1.age = 30;
obj2["name"] = "Bob";
obj2["age"] = 25;

// 3. Accessing Properties
console.log(obj1.name); // Dot notation
console.log(obj2["age"]); // Bracket notation

// 4. Deleting Properties
delete obj1.age;
console.log(obj1.age); // undefined

// 5. Checking Property Existence
console.log("name" in obj1); // true
console.log(obj2.hasOwnProperty("age")); // true

// 6. Iterating Over Properties
for (let key in obj2) {
    console.log(key + ": " + obj2[key]);
}

// 7. Object Methods
obj1.greet = function() {
    console.log("Hello, " + this.name);
};
obj1.greet(); // Hello, Alice

// 8. Object.assign
let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // Merged object

// 9. Spread Operator
let obj4 = {...obj1, ...obj2};
console.log(obj4); // Merged object

// 10. Object.keys, Object.values, Object.entries
console.log(Object.keys(obj4)); // ['name', 'greet', 'name', 'age']
console.log(Object.values(obj4)); // ['Alice', [Function], 'Bob', 25]
console.log(Object.entries(obj4)); // [['name', 'Alice'], ['greet', [Function]], ['name', 'Bob'], ['age', 25]]

// 11. JSON Methods
let jsonString = JSON.stringify(obj4);
console.log(jsonString); // JSON string representation

const course={
    title:"JavaScript",
    price:999,
    instructor:"Sachin",
    isActive:true,
    students:["Alice","Bob","Charlie"],
    details:{
        duration:"3 months",
        level:"Beginner"
    }
}
const {title}=course; // Destructuring to extract title
console.log(title);

const jsonCourse=JSON.stringify(course); // Convert object to JSON string
console.log(jsonCourse);
const parsedCourse=JSON.parse(jsonCourse); // Parse JSON string back to object
console.log(parsedCourse);
console.log(parsedCourse.details.duration); // Access nested property


const {title : nameofcourse}=course; // Destructuring with renaming
console.log(nameofcourse);

const {details:{duration}}=course; // Nested destructuring
console.log(duration);


