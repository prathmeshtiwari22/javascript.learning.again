// for of 
/*
const arr=[1,2,3,4,5];
for(let num of arr){
    console.log(num);
}

const greeting="Hello";
for(let char of greeting){
    console.log(`${char} froM Noah`);
}

// for in 
const arr2=[10,20,30,40,50];
for(let index in arr2){
    console.log(index, arr2[index]);
}
*/
// Maps
const map=new Map();
map.set("IN","India");  
map.set("US","United States");
map.set("UK","United Kingdom");

for(let key of map.keys()){
    console.log(key);
}

for(let value of map.values()){
    console.log(value);
}

for(let entry of map.entries()){
    console.log(entry);
}
for(let [key,value] of map){
    console.log(key,value);
}

myobjs=[{name:"Noah",age:10},{name:"Emma",age:8},{name:"Liam",age:12}];
for(let obj of myobjs){
    console.log(obj.name,obj.age);
}
for(let obj of myobjs){
    console.log(`${obj.name}: ${obj.age} years old`);  
} // i want name,age in this format
for(let [key,value] in myobjs){
    console.log(myobjs[key]);
}
for(let key in myobjs){ 
    console.log(Object.keys(myobjs[key]));
} // this is  working

// Map
const mymap=new Map();
mymap.set("name","Noah");
mymap.set("age",10);
mymap.set("city","New York");
for(let [key,value] of mymap){
    console.log(`${key}: ${value}`);
}

for( let key of mymap.keys()){
    console.log(key);
}

for( let value of mymap.values()){
    console.log(value);
}

// Set
const myset=new Set();
myset.add(1);
myset.add(2);
myset.add(3);
myset.add(4);
myset.add(5);
for(let value of myset){
    console.log(value);
}   

//vfor Each
const arr=[1,2,3,4,5];
arr.forEach(function(value, index) {
    const sum = value + index;
    console.log(`Index: ${index}, Value: ${value}, Sum: ${sum}`);
});

const MyCoding = [
    {
        langaugename: "JavaScript",
        languageFileExtension: ".js"
    },
    {
        langaugename: "Python",
        languageFileExtension: ".py"
    },
    {
        langaugename: "Java",
        languageFileExtension: ".java"
    },
    {
        langaugename: "C++",
        languageFileExtension: ".cpp"
    }
]

MyCoding.forEach(function(index,value){
console.log(`Index: ${index}, Value: ${value.langaugename}`);
});
MyCoding.forEach(function(item){
console.log(`Value: ${item.langaugename}`);
});