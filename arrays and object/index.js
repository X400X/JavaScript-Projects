const fruits = [{name: "apple", color: "red",calories: 95},
                {name: "orange",color:"orange",calories: 45},
                {name: "banana", color:"yellow",calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];    

console.log(fruits[3].calories);
console.log(" ");



fruits.push({name: "apple123", color: "red",calories: 95})

console.log(fruits);
console.log(" ");



fruits.forEach(fruit => console.log(fruit.name));

const fruitsName = fruits.map(fruit => fruit.name);
console.log(fruitsName);
console.log(" ");


const col = fruits.filter(fruit => fruit.color === "yellow");
const col1 = fruits.filter(fruit => fruit.calories >= 100);
console.log(col);
console.log(col1);
console.log(" ");



const maxFruit = fruits.reduce((max, fruit) =>
                        fruit.calories > max.calories ? fruit: max);

console.log(maxFruit);
console.log(" ");

const minFruit = fruits.reduce((min, fruit) =>
    fruit.calories < min.calories ? fruit: min);

console.log(minFruit);
console.log(" ");



fruits.filter(fruit => console.log(fruit.name));
