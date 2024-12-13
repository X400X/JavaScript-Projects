// forEach() = method used to iterate over the elements

//of an array and apply a specified function (callback) to each element


let numbers = [1, 2, 3, 4, 5];

numbers.forEach(triple); 
numbers.forEach(display);

function double (element, index, array){ 
    array [index] = element * 2;
}

function triple (element, index, array){ 
    array[index] = element * 3;
}

function display (element){ 
    console.log(element);
}




let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalize); 
fruits.forEach(display);

function upperCase (element, index, array){ 
    array [index] = element.toUpperCase();
}

function lowercase (element, index, array){ 
    array[index] = element.toLowerCase();
}

function capitalize (element, index, array){
    array [index] = element.charAt(0).toUpperCase() + element.slice(1)
}

function display (element) { 
    console.log(element);
}