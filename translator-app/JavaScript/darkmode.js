import moon from "../images/moon.png";
import sun from "../images/sun.png";

let darkMode = document.getElementById("dark-mode");

darkMode.onclick = function () {
  let sunIcon = sun;
  let moonIcon = moon;

  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    darkMode.src = sunIcon;
  } else {
    darkMode.src = moonIcon;
  }
};
