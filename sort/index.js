//sort() = method used to sort elements of an array in place.
//Sorts elements as strings in lexicographic order, not alphabetical
//lexicographic = (alphabet + numbers + symbols) as strings


const numbers = [3, 15, 8, 1, 23, 7];

numbers.sort((a, b) => a - b);
console.log(numbers); 

numbers.sort((a, b) => b - a);
console.log(numbers);



const words = ["banana", "Apple", "orange", "mango"];

words.sort();
console.log(words); 

words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(words); 

words.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));
console.log(words);



const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
  ];
  


const people1 = [...people].sort((a, b) => a.age - b.age);
console.log(people1);
  
const people2 = [...people].sort((a, b) => a.name.localeCompare(b.name));
console.log(people2);
  

  setTimeout(() => {
    people.sort((a, b) => a.name.localeCompare(b.name));
    console.log("После сортировки по имени:", people);
  }, 5000);