// // //classes

// // class Person {
// //     constructor(name, age) {
// //         this.name = name;
// //         this.age = age;
// //     }

// //     greet() {
// //         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
// //     }
// //     changeUsername(){
// //         console.log(`name changed to ${this.name.toLowerCase()}`);
        
// //     }
// // }

// // const alice = new Person('Alice', 30);
// // alice.changeUsername(); // Output: Hello, my name is Alice and I'm 30 years old.


// // behind the scene

// function User(username,email,password){
//     this.username=username
//     this.email=email
//     this.password=password
// }
// User.prototype.encryptPassword=function(){
//     return `${this.password} is this`
// }
// User.prototype.changeUsername=function(){
//     return `${this.password} is this`
// }

// const tea = new User("tea","545sdsw",'klfedsjnf')
// console.log(tea.encryptPassword());
// console.log(tea.changeUsername())


// inheritance

class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username) // leleta hai udhar se this context 
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A NEW COURSE WAS ADDED BY ${this.username}`);
        
    }
}

const chai=new Teacher("chai","fssffs","dadaffs")
chai.addCourse()
chai.logMe() // le sakta yeh udhar ka kuch bhi cheez bro
let MasalaChai = new User("Masala")
MasalaChai.logMe()