// Strings
// 1. Create a string variable and log it to the console
let myString = "Hello, World!";
console.log(myString); // Output: Hello, World!
const name = "Hitesh";
const repoCount=50;
console.log("Hello my name is "+name+" and I have "+repoCount+" repositories on my github");
console.log(`Hello my name is ${name} and I have ${repoCount} repositories on my github`); // ES6 feature
const GameName = new String("Fall Guys");
console.log(GameName);
console.log(typeof GameName);
// 2. Find the length of a string
console.log("Length of myString:", myString.length); // Output: Length of myString: 13

// 3. Access characters in a string using indexing
console.log("First character:", myString[0]); // Output: First character: H
console.log("Last character:", myString[myString.length - 1]); // Output: Last character: !

// 4. String methods
let sampleString = "  JavaScript is Awesome!  ";
console.log("Original String:", sampleString);

// a. toUpperCase() and toLowerCase()
console.log("Uppercase:", sampleString.toUpperCase()); // Output: "  JAVASCRIPT IS AWESOME!  "
console.log("Lowercase:", sampleString.toLowerCase()); // Output: "  javascript is awesome!  "

// b. trim()
console.log("Trimmed String:", sampleString.trim()); // Output: "JavaScript is Awesome!"    

// c. indexOf() and lastIndexOf()
console.log("Index of 'is':", sampleString.indexOf("is")); // Output: Index of 'is': 13
console.log("Last Index of 'a':", sampleString.lastIndexOf("a")); // Output: Last Index of 'a': 4

// d. slice()
console.log("Sliced String (0, 10):", sampleString.slice(0, 10)); // Output: Sliced String (0, 10): "  JavaScri"

// e. replace()
console.log("Replaced String:", sampleString.replace("Awesome", "Great")); // Output: Replaced String: "  JavaScript is Great!  "                       

// f. substring()
console.log("Substring (2, 12):", sampleString.substring(2, 12)); // Output: Substring (2, 12): "JavaScript"

// g. split()
let csvString = "apple,banana,cherry";
let fruitsArray = csvString.split(",");
console.log("Fruits Array:", fruitsArray); // Output: Fruits Array: [ 'apple', 'banana', 'cherry' ]

// h. includes()
console.log("Includes 'Java':", sampleString.includes("Java")); // Output: Includes 'Java': true
console.log("Includes 'Python':", sampleString.includes("Python")); // Output: Includes 'Python': false

// i. charAt()
console.log("Character at index 5:", sampleString.charAt(5)); // Output: Character at index 5: S

// j. startsWith() and endsWith()
console.log("Starts with '  Java':", sampleString.startsWith("  Java")); // Output: Starts with '  Java': true
console.log("Ends with 'Awesome!  ':", sampleString.endsWith("Awesome!  ")); // Output: Ends with 'Awesome!  ': true

// k. repeat()
console.log("Repeat String 3 times:", "Ha! ".repeat(3)); // Output: Repeat String 3 times: Ha! Ha! Ha! 

// l. template literals
let user = "Hitesh";
let repo = 50;
let message = `Hello, my name is ${user} and I have ${repo} repositories on GitHub.`;
console.log(message); // Output: Hello, my name is Hitesh and I have 50 repositories on GitHub. 



const url = "https://www.codewithharry.com";
const url2 = "https://www.codewithharry.com/harry";
console.log(url.length);
console.log(url2.length);
console.log(url.charAt(url.length-1));
console.log(url2.charAt(url2.length-1));
if(url.charAt(url.length-1)==='/'){
    console.log("url ends with /");
}else{
    console.log("url does not end with /");
}
if(url2.charAt(url2.length-1)==='/'){
    console.log("url2 ends with /");
}else{
    console.log("url2 does not end with /");
}
// to avoid this problem use endsWith method
console.log(url.endsWith('/'));
console.log(url2.endsWith('/'));

// to add / at the end of url if not present
if(!url.endsWith('/')){
    url = url + '/';
}
if(!url2.endsWith('/')){
    url2 = url2 + '/';
}
console.log(url);
console.log(url2);

// to check if string is present in another string use includes method
console.log(url.includes('codewithharry'));
console.log(url2.includes('codewithharry'));
console.log(url.includes('codewithhary')); // false

// to get part of string use slice method
let str = "Hello, my name is Hitesh Choudhary. I am a web developer.";
let newStr = str.slice(0, 20); // from index 0 to 19
console.log(newStr); // Hello, my name is Hi
newStr = str.slice(18); // from index 18 to end
console.log(newStr); // Hitesh Choudhary. I am a web developer.
newStr = str.slice(-12); // from index -12 to end
console.log(newStr); // web developer.
newStr = str.slice(-12, -5); // from index -12 to -6
console.log(newStr); // web de

// to replace part of string use replace method
let myBioData = "I am Hitesh Choudhary. I am a web developer. I love coding.";
console.log(myBioData); // I am Hitesh Choudhary. I am a web developer. I love coding.
let replacedData = myBioData.replace("Hitesh", "Harry");
console.log(replacedData); // I am Harry Choudhary. I am a web developer. I love coding.
replacedData = myBioData.replace("web", "frontend");
console.log(replacedData); // I am Hitesh Choudhary. I am a frontend developer. I love coding.
// only first occurrence is replaced
replacedData = myBioData.replace("I", "We");
console.log(replacedData);                      
