
const d = document.getElementById("d");
const r = document.getElementById("r");
const i = document.getElementById("i");
const l = document.getElementById("countLabel");
let count = 0;

i.onclick = function(){
    count++;
    l.textContent = count;
}

d.onclick = function(){
    count--;
    l.textContent = count;
}

r.onclick = function(){
    count = 0;
    l.textContent = count;
}