// Callback Functions / Callbacks

// const container = document.getElementById("data-container");

// function displayData(obj) {
//   const p = document.createElement("p");
//   p.textContent = obj.quote;

//   container.appendChild(p);
// }

// container.addEventListener("click", function () {
//   console.log("You clicked me!");
// });

function displayData(data) {
  const container = document.getElementById("data-container");
  const p = document.createElement("p");
  p.textContent = data.quote;
  container.appendChild(p);
}

function displayError(error) {
  const container = document.getElementById("data-container");
  const p = document.createElement("p");
  p.textContent = error.message;
  container.appendChild(p);
}

// XMLHttpRequest - oldway
// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const data = JSON.parse(xhr.responseText);
//     console.log(data.quotes);

//   }
// };

// xhr.open("GET", "https://dummyjson.com/quotes", true);
// xhr.send();

// Promise Object

// const p = new Promise(function (resolve, reject) {
//      // Do an async task

//      if(/*good condition */){
//         resolve("Success");
//     } else {
//         reject("Failure");
//     }
// });

// Create a fetchData function that accepts a url parameter and returns the data
// async function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           const data = JSON.parse(xhr.responseText);
//           resolve(data); // Yay! the food is ready.
//         } else {
//           const data = JSON.parse(xhr.responseText);
//           reject(xhr.statusText); // Oops! Something went wrong
//         }
//       }
//     };

//     xhr.open("GET", url, true);
//     xhr.send();
//   });
// }

/* --easier way--

function fetchData(url) {
  return fetch(url).then((response) => response.json());
}
// .catch((error) => error);

fetchData("https://dummyjson.com/quotes/1").then((data) => {
  displayData(data);
});

***/

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();

  displayData(data);
}

fetchData("https://dummyjson.com/quotes/1");
