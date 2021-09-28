console.log("It works!")
// const person = require('./person');
// console.log(`Age of the person is ${person.age}`);

const Person = require('./person');
const person1 = new Person('Aref', 26);
console.log(person1)
person1.geetings()