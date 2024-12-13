// DOM = DOCUMENT OBJECT MODEL
// Object{} that represents the page you see in the web browser
// and provides you with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML document,
// and structures all the elements in a tree-like representation.
// JavaScript can access the DOM to dynamically
// change the content, structure, and style of a web page.
// console.dir(document);

const username = "";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;

console.dir(document);


// element selectors = Methods used to target and manipulate HTML elements
//They allow you to select one or multiple HTML elements from the DOM (Document Object Model)

// 1. document.getElementById()
// ELEMENT OR NULL
// 2. document.getElementsClassName()
// HTML COLLECTION
// 3. document.getElementsByTagName()
// HTML COLLECTION
// 4. document.querySelector()
// ELEMENT OR NULL
// 5. document.querySelectorAll()
// NODELIST


const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits");
fruits[1].style.backgroundColor = "yellow";

const h4E = document.getElementsByTagName("h4");
h4E[1].style.backgroundColor = "yellow";
const liE = document.getElementsByTagName("li");
liE[3].style.backgroundColor = "green";


const food = document.querySelector("ul")
food.style.backgroundColor = "pink";


const food1 = document.querySelectorAll(".fruits")
food1[0].style.backgroundColor = "red";

// DOM Navigation = The process of navigating through the structure
//of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

const element = document.getElementById("desserts");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const element1 = document.getElementById("vegetables");
const lastChild = element1.lastElementChild;
lastChild.style.backgroundColor = "pink";


const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const lastChild1 = ulElement.lastElementChild;
    lastChild1.style.textAlign = "center";
});


const element2 = document.getElementById("carrots");
const nextSibling = element2.nextElementSibling;
nextSibling.style.backgroundColor = "red";

const element3 = document.getElementById("ice-cream");
const preSibling = element3.previousElementSibling;
preSibling.style.backgroundColor = "red";


const element4 = document.getElementById("ice-cream");
const parent = element4.parentElement;
parent.style.backgroundColor = "yellow";



const element5 = document.getElementById("fruits1");
const children = element5.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "pink";
});



// -- EXAMPLE 1 <h1>
// STEP 1 CREATE THE ELEMENT 

const newH1 = document.createElement("h1");

const newListItem = document.createElement("li");


// STEP 2 ADD ATTRIBUTES/PROPERTIES 
newH1.textContent = "I like pizza!";
newH1.id = "myH1"; 
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
document.getElementById("fruits").append(newListItem);

//document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes [2]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newLink);
// document.getElementById("box1").removeChild(newLink);