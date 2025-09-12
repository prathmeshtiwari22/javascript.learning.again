// MAP AND REDUCE IN JAVASCRIPT
/*
for of
const arr=[10,20,30,40,50];
for(let value of arr){
    console.log(value);
}
// for in
for(let index in arr){
    console.log(index,arr[index]);
}
const coding = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

const values = coding.forEach((item) => {
console.log(item);
});

//
*/
const myNums= [1,2,3,4,5,6,7,8,9,10];
//const newNums =myNums.filter((num)=>{
//if (num>4){
 //   return num;
//}
//})
/*

//console.log(newNums);
const newNums = []

myNums.forEach( (num)=> {
 if(num>4){
    newNums.push(num);
 }
})
console.log(newNums);

const books = [
  {
    title: "The Morningside",
    author: "Téa Obreht",
    rating: 4.2,            // approximate
    genre: "historical fiction",
    publishDate: "2024-03-19",
    edition: "1st Hardcover"
  },
  {
    title: "The Book of Elsewhere",
    author: "Keanu Reeves & China Miéville",
    rating: 4.1,
    genre: "fantasy",
    publishDate: "2024-07-23",
    edition: "1st Edition"
  },
  {
    title: "James",
    author: "Percival Everett",
    rating: 4.4,
    genre: "literary fiction",
    publishDate: "2024-05-14",
    edition: "1st U.S. Edition"
  },
  {
    title: "Little Rot",
    author: "Akwaeke Emezi",
    rating: 4.0,
    genre: "young adult",
    publishDate: "2024-06-18",
    edition: "1st Edition"
  },
  {
    title: "The Grey Wolf",
    author: "Louise Penny",
    rating: 4.3,
    genre: "mystery",
    publishDate: "2024-10-29",
    edition: "1st Edition"
  },
  {
    title: "You Like It Darker",
    author: "Akwaeke Emezi",
    rating: 4.2,
    genre: "fantasy",
    publishDate: "2024-08-05",
    edition: "1st Edition"
  },
  {
    title: "Enlightenment",
    author: "Sarah Perry",
    rating: 4.3,
    genre: "fantasy",
    publishDate: "2024-11-01",
    edition: "1st UK Edition"
  },
  {
    title: "The First Quarry",
    author: "Max Allan Collins",
    rating: 4.0,
    genre: "crime",
    publishDate: "2024-04-10",
    edition: "1st Edition"
  },
  {
    title: "The Extinction of Irena Rey",
    author: "Sarai Walker",
    rating: 3.9,
    genre: "science fiction",
    publishDate: "2024-09-03",
    edition: "1st Edition"
  },
  {
    title: "All Fours",
    author: "Akwaeke Emezi",
    rating: 4.1,
    genre: "literary fiction",
    publishDate: "2024-09-24",
    edition: "1st Hardcover"
  }
];
let userBooks = books.filter(
  (book) => book.genre.includes("fiction") && new Date(book.publishDate) > new Date("2000-01-01")
);
console.log(userBooks);

*/

// sabke andhar 10 add karna hai
/*
let myNewNums = MyNums.map((num)=>{
    return num+10;
})
console.log(myNewNums);
*/
// filter and map ka difference
// filter me condition lagate hai
// map me sabke sath kuch karna hota hai
//const newNums =MyNums.map((num) => num*10).map((num) => num+1).filter((num) => num>50);
//console.log(newNums);
// chaining of map and filter
// reduce
// reduce is used to reduce the array into a single value
// sum of all the numbers in the array
/*
let sum =0;
for(let num of MyNums){
    sum = sum + num;
}
console.log(sum);
*/
/*

*/
// accumulator and current value
// acccumulator is the sum of all the previous values
// current value is the current value of the array

//const MyNums = [1,2,3,4,5,6,7,8,11,9,10];
//let initialvalue=0;
//let sum = MyNums.reduce((accumulator, currentValue) => accumulator + currentValue, initialvalue);
//console.log(sum);

// new example
//const newNums = [1,2,3,9,4,5,6,7,8,11,9,10];
//const newSum = newNums.reduce((a,c)=> a+c,0);
//console.log(newSum);
// filter and map and reduce chaining
// find the sum of all the numbers greater than 5 after multiplying them by 2
//const finalSum = newNums.filter((num) => num>5).map((num) => num*2).reduce((a,c) => a+c,0);
// othwer way to write reduce
//const y= newNums.reduce((a,c)=>{ return a+c},0);
//console.log(y);
// what does filter do when i give it two parameters
//const newNums =myNums.filter((num,index)=>{
 // if (num>4){ 


 let shoppingCart = [
    { itemName: 'js course', price: 299},
    { itemName: 'css course', price: 199},
    { itemName: 'html course', price: 99},
    { itemName: 'react course', price: 499},
    { itemName: 'node course', price: 399},
 ]
 let totalAmount = shoppingCart.reduce((a,c)=> a+c.price,0);
 console.log(totalAmount);
 let courselist = shoppingCart.filter((item)=> item.itemName.includes('course'))
    console.log(courselist);
 let totalamountwitgst = shoppingCart.map((item)=> item.price*139/100).reduce((a,c)=>a+c,0);
 console.log(totalamountwitgst);

 //map reduce filter thanks 
