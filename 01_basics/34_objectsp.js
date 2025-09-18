// Objects

// console.log(Math.PI)

const desciptor= Object.getOwnPropertyDescriptor(Math,"PI")
console.log(desciptor)
desciptor.writable=true


const chai= {
    name:"ginger chai",
    price:"250",
    isAvailable:true
}

// console.log(Object.getOwnPropertyDescriptors(chai));
 Object.defineProperty(chai,'name',{
//     writable:false,
     enumerable:false
 })
for(let [key,value] of Object.entries(chai)){
    if(typeof value!== 'function'){
        console.log(key,value);
        
    }
}