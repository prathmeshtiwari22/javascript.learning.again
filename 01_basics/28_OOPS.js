// OBJECT OORIENTED PROGRAMMING
const user={
    name:"prathmesh",
    logincount:9,
    signedIn: true,
    getUserCrendentials: function () {
        console.log("Got user details from database");
        console.log(this);
    }
}
user.getUserCrendentials()

function User(username,logincount,signedIn){
    this.username=username;
    this.logincount=logincount;
    this.signedIn=signedIn;
    this.greeting=function(){
        console.log(`${this.username} has entered ,HELLO`)
    }
    return this
}

const user1=new User('prathmesh',5,false);
const user2=new User('prathm',6,false);
console.log(user1.constructor);
