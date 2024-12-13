//this reference to the object where THIS is use
//(the object depends on the immediate context)
//person.name = this.name

const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log(`Hey, I am ${this.firstName}`)}
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);
person.sayHello();