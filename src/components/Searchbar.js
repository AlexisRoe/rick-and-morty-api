import { createElement } from "../utils/elements";
import { searchCharacters } from "../App";

export function Searchbar() {
  const inputField = createElement("input", {
    type: "text",
    placeholder: "Who are you looking for?",
  });

  const searchbar = createElement("article", {
    className: "searchbar",
    children: [
      createElement("form", {
        className: "searchBar",
        onsubmit: (event) => {
          const characterContainer = document.querySelector(".main");
          while (characterContainer.firstChild) {
            characterContainer.removeChild(characterContainer.firstChild);
          }
          event.preventDefault();
          searchCharacters(inputField.value);
          inputField.value = "";
        },
        children: [
          inputField,
          createElement("button", {
            type: "submit",
            innerText: "search",
          }),
        ],
      }),
    ],
  });

  return searchbar;
}
