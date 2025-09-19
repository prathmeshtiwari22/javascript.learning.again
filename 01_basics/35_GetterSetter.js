// class User{
//     constructor(email,password){
//         this.email=email
//         this.password=password
//     }
//     get password(){
//         return this._password.toUpperCase()
//     }
//     set password(value){
//         this._password=value.toUpperCase();
//     }
// }

// const prathmesh= new User("f","d")
// console.log(prathmesh.password);

// function User(email,password){
//     this._email=email;
//     this._password=password
//     Object.defineProperty(this,'email',{
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this.email=value
//         }
//     })
// }
// const chai = new User("vgdgdgds","sasfgg")
// // console.log(chai.email);

const User={
    _email:'gdgd',
    _password:"abc"
}
const userWithGetters = Object.create(User, {
    email: {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    },
    password: {
        get: function() {
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value;
        }
    }
});

// Example usage:
userWithGetters.email = "test@example.com";
userWithGetters.password = "mypassword";
console.log(userWithGetters.email);    // Output: TEST@EXAMPLE.COM
console.log(userWithGetters.password); // Output: MYPASSWORD

