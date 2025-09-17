// Promises
const Promise1=new Promise(function(ressolve,reject){
    // Do and async task
    //DB Calls
    // cryptography , network calls
    setTimeout(function(){
        console.log("async task complete");
        ressolve()
    },1000)
})
Promise1.then(function(){
    console.log("Promise consumed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("ASYNC TASK 2");
        resolve()
    },1000)
}).then(function(){
    console.log("ASYNC 2 RESOLVED")
})
const Promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'prathmesh',email:'prathmesh@example.com'})
    },1000)
}).then(function(u){
console.log(u);
})

// Promise 4
const Promise4 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error= true
        if(!error){
            resolve({username:"prathmesh",password:123})
        }
        else{
            reject('ERROR: Something Went Wrong')
        }
    },1000)
})

const username=Promise4.then((u)=>{
console.log(u);
return u.username
}).then((username)=>{
console.log(username)
}).catch(function(e){
    console.log(e);
}).finally(()=>{
    console.log("ALWAYS EXECUTED")
})

//Promise 5
const Promise5=new Promise((resolve,reject)=>{
   setTimeout(()=>{
        let error= true
        if(!error){
            resolve({username:"prathmesh",password:123})
        }
        else{
            reject('ERROR: JS Went Wrong')
        }
    },1000) 
});
 // ASYNC AWAIT
async function consumePromiseFive(){
      try{
        const response= await Promise5
        console.log(response)
      } catch(e){
        console.log(e)
      }
}
consumePromiseFive()


// // Learning FETCH
// async function GetAllUsers(){
//     try{
//     const Response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const Data=await Response.json()
//     //console.log(Data);
//     } catch(e){
//         console.log("E:",e);
//     }

// }
// GetAllUsers()
 // THEN CHAINING CATCH
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
 return response.json()
}).then((Data)=>{
console.log(Data);
}).catch((e)=>{
console.log(e);
})