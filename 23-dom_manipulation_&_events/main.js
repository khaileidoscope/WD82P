// DOM Manipulation & Events

//document is the node
//queryselector is the method

// Select nodes in the DOM
// const container = document.querySelector("#container");
// const display = document.querySelector(".display");

// // Create nodes in the DOM
// const div = document.createElement("div");
// div.classList.add("box");

// // Append elements in the DOM or another node
// container.appendChild(div);

// // Remove elements from the DOM or another node
// container.removeChild(div);

// container.style.height = "100px";
// container.style.width = "100px";
// container.style.backgroundColor = "red";

// // Apply style to elements in the DOM or another node
// const div2 = document.createElement("div");
// container.appendChild(div2);
// // oneliner
// // div2.setAttribute("style", "height: 100px; background-color: blue;");
// div2.classList.add("red-box");
// div2.classList.remove("red-box");
// div2.classList.toggle("red-box");

// // add txt content
// div2.textContent = "Hello World!";

// add span to content
// div2.innerHTML = "<span>I'm a span!</span>"; //pero dont use nga

// exercise
// call the container
// const container = document.querySelector("#container");
// // create new div inside the container
// const content = document.createElement("div");
// // name the class on new div
// content.classList.add("content");
// // add text on div
// content.textContent = "This is a text content!";
// // append to print
// container.appendChild(content);

/* 
Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.

1. a <p> with red text that says “Hey I’m red!”
2. an <h3> with blue text that says “I’m a blue h3!”
3. a <div> with a black border and pink background color with the following elements inside of it:
  3.1. another <h1> that says “I’m in a div”
  3.2. a <p> that says “ME TOO!”
  3.3. Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
***/

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p2);

container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);

const btn = document.querySelector("#btn");
// btn.onclick = function () {
//   alert("Hello World!");
// };
// another way
// btn.addEventListener("click", function () {
//   alert("Hello World!");
// });
// clean way
btn.addEventListener("click", turnActive);

function alertFunction() {
  alert("Hello World!");
}

function changeWord() {
  btn.textContent = "You clicked me!";
}

function turnActive() {
  btn.classList.toggle("active");
  btn.textContent = "clicked!";
}
