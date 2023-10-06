const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const wordKeyword = document.querySelector(".word-keyword h2");
const wordType = document.querySelector(".word-type span");
const wordMeaning = document.querySelector(".word-meaning span");
const wordSamples = document.querySelector(".word-samples span");
const wordSynonyms = document.querySelector(
  ".word-synonyms .synonyms-list span"
);
const wordAntonyms = document.querySelector(
  ".word-antonyms .antonyms-list span"
);

searchBtn.addEventListener("click", searchWord);

async function searchWord() {
  const word = searchInput.value.trim();

  if (word === "") {
    alert("Please enter a word to search.");
    return;
  }

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      const entry = data[0];

      // Display the word and type
      wordKeyword.textContent = word;
      wordType.textContent = entry.meanings[0]?.partOfSpeech || "Not Available";

      // Display the first definition's meaning, example, synonyms, and antonyms
      if (entry.meanings[0]?.definitions) {
        wordMeaning.textContent =
          entry.meanings[0].definitions[0].definition || "Not Available";
        wordSamples.textContent =
          entry.meanings[0].definitions[0].example || "Not Available";
        wordSynonyms.textContent =
          entry.meanings[0].definitions[0].synonyms?.join(", ") ||
          "Not Available";
        wordAntonyms.textContent =
          entry.meanings[0].definitions[0].antonyms?.join(", ") ||
          "Not Available";
      }
    } else {
      alert("Word not found in the dictionary.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while fetching data. Please try again later.");
  }
}
