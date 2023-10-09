import fetchData from "./src/fetchData";
// import displayData from "./src/displayData";

const searchBox = document.querySelector(".search-box");
const textInfo = document.querySelector(".text-info");
const wordContainer = document.querySelector(".word-container");
const sound = document.getElementById("sound");

async function main(submitEvent) {
  submitEvent.preventDefault();

  const searchInput = document.getElementById("search-input").value;
  console.log(searchInput);

  const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

  const INPUT_URL = `${API_URL}${searchInput}`;

  // const dictionaryData = await fetchData(INPUT_URL);

  // displayData({ dictionaryData });

  fetch(INPUT_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      wordContainer.innerHTML = `
      <ul>
            <li class="word-keyword">
              <div class="details">
                <h2 id="keyword">${searchInput}</h2>
                <button onclick="playSound()" alt="text-to-speech">
                  <i class="fas fa-volume-up"></i>
                </button>
              </div>
            </li>
            <li class="word-type">
              <div class="details">
                <span id="pronunciation">/${data[0].phonetics[1].text}/</span>
              </div>
            </li>

            <div class="word-content">
              <!-- partOfSpeech -->
              <li class="word-speech">
                <h4 id="partOfSpeech">${data[0].meanings[0].partOfSpeech}</h4>
              </li>
              <!-- meaning of keyword -->
              <li class="word-meaning">
                <h3>Meaning:</h3>
                <p id="meaning">${
                  data[0].meanings[0].definitions[0].definition
                }</p>
                <!-- <div class="details">
                  <span></span> -->
                </div>
              </li>
              <!-- sentence samples -->
              <li class="word-samples">
                <div class="details">
                  <h3>Example:</h3>
                  <span id="example">${
                    data[0].meanings[0].definitions[0].example || ""
                  }</span>
                </div>
              </li>
              <!-- synonyms of keyword -->
              <li class="word-synonyms">
                <div class="details">
                  <h3>Synonyms</h3>
                  <div class="synonyms-list">
                    <span id="synonym">${data[0].meanings[0].synonyms}</span>
                  </div>
                </div>
              </li>
              <!-- antonyms of keyword -->
              <li class="word-antonyms">
                <div class="details">
                  <h3>Antonyms</h3>
                  <div class="antonyms-list">
                    <span id="antonym">lorem</span>
                  </div>
                </div>
              </li>
            </div>
      </ul>`;
    })
    .catch(() => {
      textInfo.innerHTML = `<p class="error">Couldn't Find The Word</p>`;
    });
}
function playSound() {
  sound.play();
}
searchBox.addEventListener("submit", main);

// Add an event listener to the form element to call the main function on form submission

// must read:
// introduction-roles-contri-demo-q&a

//create new project called translator. abandon project
