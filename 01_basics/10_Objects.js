// Objects
/*
const mysyml = Symbol("Key");
let users = {
    name: "Alice",
    [mysyml]: "key",
    age: 30,
    isAdmin: true,
    courses: ["html", "css", "js"],
    spouse: null
};
console.log(users);
console.log(users.name);    // Accessing property using dot notation
console.log(users['age']);  // Accessing property using bracket notation
users.age = 31;             // Modifying property
console.log(users.age);
users.isAdmin = false;      // Modifying property
console.log(users.isAdmin);
users.courses.push("react"); // Modifying array property
console.log(users.courses);
users.spouse = "Bob";       // Modifying null property
console.log(users.spouse);
delete users.spouse;        // Deleting property
console.log(users.spouse);   // undefined
console.log(users);

// Nested objects
let student = {
    name: "John",
    age: 22,
    marks: {
        math: 90,
        physics: 85,
        chemistry: 88
    }
};
console.log(student);
console.log(student.marks.math); // Accessing nested object property
*/
// Object methods
let person = {
    firstName: "Jane",
    lastName: "Doe",
};
person.greeting= function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
}
person.greeting();

// object methods continued
person.age = 25;
person.isStudent = true;
person.details = function() {
    console.log(`I am ${this.firstName} ${this.lastName}, age ${this.age}. Student: ${this.isStudent}`);
}
person.details();

console.log(Object.keys(person)); // Get all keys of the object
console.log(Object.values(person)); // Get all values of the object
console.log(Object.entries(person)); // Get all key-value pairs of the object