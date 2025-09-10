// singleton object
let tinder =  new Object();
tinder.name = "Tinder";     
tinder.users = 1000000;
tinder.isActive = true;
console.log(tinder);
console.log(tinder.name);
console.log(tinder['users']);
tinder.users += 5000; // Increment users
console.log(tinder.users);
delete tinder.isActive; // Delete property
console.log(tinder.isActive); // undefined
console.log(tinder);

// Array of objects
let products = [
    {id: 1, name: "Laptop", price: 1000},
    {id: 2, name: "Phone", price: 500},
    {id: 3, name: "Tablet", price: 300}
];
console.log(products);
console.log(products[0]); // First product
console.log(products[1].name); // Name of second product
products[2].price = 350; // Modify price of third product
console.log(products[2]);
products.push({id: 4, name: "Monitor", price: 200}); // Add new product
console.log(products);
products.pop(); // Remove last product
console.log(products);
for(let i = 0; i < products.length; i++){
    console.log(`${products[i].name} costs $${products[i].price}`);
}

const array=[1,2,3]
const array1= [2,3,4]
const array2=array.concat(array1)
console.log(array2)

const object={name:"sachin",age:24}
const object1={city:"pune",country:"india"}
const object2=Object.assign({},object,object1)
console.log(object2);

// spread operator
const object3={...object,...object1}
console.log(object3);

console.log(Object.keys(object3));
console.log(Object.values(object3));
console.log(Object.entries(object3));

console.log(Object.hasOwnProperty('isLoggednIn'));
