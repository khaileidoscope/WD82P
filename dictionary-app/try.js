const dictionaryContainer = document.querySelector(".dictionary-container");
const searchInput = document.getElementById("search-input");
const textInfo = document.querySelector(".text-info");

// fetch api function
function fetchApi(word) {
  textInfo.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
}

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && e.target.value) {
    fetchApi(e.target.value);
  }
});
