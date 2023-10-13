import "/Styles/style.css";
import "/Styles/animated.css";
import { countries } from "./countries.js"; //data-object

const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const selectTag = document.querySelectorAll("select");
const exchangeIcon = document.querySelector(".exchange");
const translateBtn = document.querySelector("button");
const icons = document.querySelectorAll(".row i");

selectTag.forEach((tag, id) => {
  // console.log(tag);
  for (const countryCode in countries) {
    // console.log(countries[countryCode]);

    // Selecting ENG Lang by default as FROM language and Tagalog as TO language
    let selected;
    if (id == 0 && countryCode == "en-GB") {
      selected = "selected";
    } else if (id == 1 && countryCode == "tl-PH") {
      selected = "selected";
    }

    let option = `<option value="${countryCode}" ${selected}>${countries[countryCode]}</option>`;
    // Adding options tag inside select tag in HtMl
    tag.insertAdjacentHTML("beforeend", option);
  }
});

// exchangeIcon
exchangeIcon.addEventListener("click", () => {
  // exchanging textarea and select tag values
  let tempText = fromText.value;
  let tempLang = selectTag[0].value;

  fromText.value = toText.value;
  selectTag[0].value = selectTag[1].value;

  toText.value = tempText;
  selectTag[1].value = tempLang;
});

// translateBtn
translateBtn.addEventListener("click", () => {
  let textInput = fromText.value.trim(); // trim() removes empty spaces before and after the string
  let translateFrom = selectTag[0].value; // Getting fromSelect tag value
  let translateTo = selectTag[1].value; // Getting toSelect tag value
  if (!textInput) return; // returning from function if textInput is empty
  toText.setAttribute("placeholder", "Translating..."); // setting placeholder as translating... while translating
  // console.log(textInput, translateFrom, translateTo);
  let apiUrl = `https://api.mymemory.translated.net/get?q=${textInput}!&langpair=${translateFrom}|${translateTo}`;
  // fetching API response and returning it with parsing into js obj and in another then method receiving that obj
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      toText.value = data.responseData.translatedText;
      data.matches.forEach((data) => {
        if (data.id === 0) {
          toText.value = data.translation;
        }
      });
      toText.setAttribute("placeholder", "Translation");
    });
});

// icons
icons.forEach((icon) => {
  icon.addEventListener("click", ({ target }) => {
    // console.log(target);
    if (target.classList.contains("fa-copy")) {
      if (target.id == "from") {
        // console.log("From copy icon clicked");
        navigator.clipboard.writeText(fromText.value);
      } else {
        // console.log("To copy icon clicked");
        navigator.clipboard.writeText(toText.value);
      }
    } else {
      // console.log("Speech icon clicked");
      let TTS; // Text to Speech
      // if clicked icon has "from" id, speak the fromTextarea value else speak the toTextarea.value
      if (target.id == "from") {
        TTS = new SpeechSynthesisUtterance(fromText.value);
        TTS.lang = selectTag[0].value; // Setting TTS language from the first select tag
      } else {
        TTS = new SpeechSynthesisUtterance(toText.value);
        TTS.lang = selectTag[1].value; // Setting TTS language from the second select tag
      }
      speechSynthesis.speak(TTS); // Speaks the passed TTS
      console.log(TTS);
    }
  });
});
