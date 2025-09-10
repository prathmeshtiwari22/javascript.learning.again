// 
/*
let fruits= ['Apple','Banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); // Last item

// Looping over an array
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Array methods
fruits.push('Orange'); // Add to the end
console.log(fruits);

const myarray = new Array(10);
myarray.push('Melon');
myarray.push('Grapes');
myarray.push('Pineapple');
myarray.push('Mango');
myarray.push('Papaya');
myarray.push('Kiwi');
myarray.push('Strawberry');
myarray.push('Blueberry');
myarray.push('Raspberry');
myarray.push('Blackberry');
myarray.push('Cranberry'); // This will work, but the initial length was 10
myarray.push('Watermelon'); // This will also work, array can grow dynamically
myarray.pop();
myarray.pop();
myarray.shift(); // Remove first item
myarray.unshift('Peach'); // Add to the beginning
myarray.splice(2, 1); // Remove 1 item at index 2
myarray.splice(2, 0, 'Lemon', 'Lime'); // Add items at index 2
myarray.reverse(); // Reverse the array
myarray.sort(); // Sort the array
console.log(myarray.includes('Mango')); // Check if 'Mango' is in the array
console.log(myarray.indexOf("Grapes")); // Get index of 'Grapes'

const mynewarray = myarray.join(); // Join array into a string
console.log(mynewarray);
console.log(typeof mynewarray);
*/
/*
// Slice and splice
let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
let citrus = fruits.slice(1, 4); // Extract from index 1 to 3
console.log(citrus);
console.log(fruits); // Original array remains unchanged

fruits.splice(1,4); // At index 2, remove 1 item and add 'Lemon' and 'Lime'
console.log(fruits); // Original array is modified
*/
const marvel_heroes = ['Ironman', 'Thor', 'Hulk', 'Captain America'];
const dc_heroes = ['Superman', 'Batman', 'Wonder'];
const all_heroes = marvel_heroes.concat(dc_heroes); // Combine two arrays
console.log(all_heroes);
const allheros = [...marvel_heroes,...dc_heroes]; // Spread operator to combine arrays
console.log(allheros);

const another_array = new Array(1,2,3,[1,2,3,4],7,3,[34,3,2,[3232,2323,232]]); // Array with nested arrays
let new_rreal_another_array = another_array.flat(Infinity); // Flatten the array to depth 2
console.log(new_rreal_another_array);

/*
// multi-dimensional arrays
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][0]); // 1
console.log(matrix[1][1]); // 5
console.log(matrix[2][2]); // 9

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j]);
    }
}

// for..of loop
for(let hero of all_heroes){
    console.log(hero);
}

// for..in loop
for(let index in all_heroes){
    console.log(index, all_heroes[index]);
}

// forEach method
all_heroes.forEach(function(hero, index){
    console.log(index, hero);
});

// map method
const hero_lengths = all_heroes.map(function(hero){
    return hero.length;
});
console.log(hero_lengths);
*/
