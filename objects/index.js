// object = A collection of related properties and/or methods

//Can represent real world objects (people, products, places)

//object = {key:value,

//function()}

const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: () => {console.log("Hey, I am Spongebob")}
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);
person.sayHello();