// DATE AND TIME
// JavaScript provides the Date object to work with dates and times.
/*
let now = new Date(); // Current date and time
console.log(now);
console.log(now.toString());
console.log(now.toDateString()); // Date portion
console.log(now.toTimeString()); // Time portion
console.log(now.toISOString()); // ISO format
console.log(now.toLocaleString('en-IN')); // Localized format
console.log(now.getFullYear()); // Year
console.log(now.getMonth() + 1); // Month (0-11, so add 1)
console.log(now.getDate()); // Day of the month
console.log(now.getHours()); // Hours
console.log(now.getMinutes()); // Minutes
console.log(now.getSeconds()); // Seconds
console.log(now.getMilliseconds()); // Milliseconds
console.log(now.getDay()); // Day of the week (0-6, 0 is Sunday)

let specificDate = new Date('2023-01-01T10:00:00'); // Specific date and time
console.log(specificDate);

let timestamp = Date.now(); // Current timestamp in milliseconds since Jan 1, 1970
console.log(timestamp);
*/
// Getting individual components
let noah= new Date();
noah.toLocaleString('default', {weekday: 'long'}); // Full weekday name
noah.toLocaleString('default', {month: 'long'}); // Full month name
console.log(noah);
console.log(noah.toLocaleString('default', {time: 'short'})); // Short time format