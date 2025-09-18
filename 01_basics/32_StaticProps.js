//STatic props
class MyClass {
    static staticProperty = 'I am static';

    static staticMethod() {
        return 'This is a static method';
    }
}

console.log(MyClass.staticProperty); // I am static
console.log(MyClass.staticMethod()); // This is a static method

class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
    /**
     * Generates and returns a static ID string.
     * @returns {string} The generated ID.
     */
    static createId(){
        return `123`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone = new Teacher('iphone', 'i422');
console.log(Teacher.createId());




