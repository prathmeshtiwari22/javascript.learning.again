// Prototype
function multi5(num){
    return num*5
}
console.log(multi5.power)
console.log(multi5.prototype)

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    score++
}
createUser.prototype.printMe=function(){
    console.log(`score ${this.score}`);
    
}
const chai=new createUser("chai",25)
const tea=createUser("tea",225)

chai.printMe()


//Prototype detail
let myName= "prathmesh    "
console.log(myName.truelength);

let myHeros=['thor','ironman','captain']
let heroPower = {
    thor:'hammer',
    ironman:'genuis',
    captain: 'brave',
    getSpiderPower: function(){
        console.log(`power is ${this.ironman}`);
        
    }
}

Object.prototype.prathmesh = function(){
    console.log(`prathmesh is present in all object`);
    
}
Array.prototype.heyprathmesh= ()=>{
    console.log(`hey prathmesh`);
    
}
myHeros.heyprathmesh() //array to array kissing
const Teacher = {
    makeVideos: true
}
const TeachingSupoort={
    isAvailable: false
}
const TASupport={
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__: TeachingSupoort
}
const User = {
    name: 'chai',
    email:"chai@google.com"
}
Teacher.__proto__=User

// new approach

Object.setPrototypeOf(TeachingSupoort,Teacher)
let anotherUsername = 'chaiwithcode   '
String.prototype.trueLength= function(){
    console.log(`${this}`);
    console.log(`TRUE LENGTH IS: ${this.trim().length}`)
}
anotherUsername.trueLength()
'Prathmesh'.trueLength()


