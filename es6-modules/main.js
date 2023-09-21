// ES6 Modules
import "./style.css";
import { dogFactory } from "./factories/dogFactory.js";

const dog1 = dogFactory("Fido", "Mixed");
console.log(dog1);

document.querySelector("#app").innerHTML = `
  <div>
   <hi>Hello, Vite!</hi>
  </div>
`;
