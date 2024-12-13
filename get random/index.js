
const myb = document.getElementById("myButton");
const myl1 = document.getElementById("myLabel1");
const myl2 = document.getElementById("myLabel2");
const myl3 = document.getElementById("myLabel3");


let min = 1;
let max = 6;
let ram;

myb.onclick = function() {
    ram = Math.floor(Math.random() * max) + min;
    myl1.textContent = ram;
    ram = Math.floor(Math.random() * max) + min;
    myl2.textContent = ram;
    ram = Math.floor(Math.random() * max) + min;
    myl3.textContent = ram;
}

