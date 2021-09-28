// const person = {
//     name: "John Doe",
//     age: 30
// }

class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;

    }

    geetings(){
        console.log(`My name is ${this.name} and I am ${this.age} years of old`)
    }
}
module.exports = Person;