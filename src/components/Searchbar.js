import { createElement } from "../utils/elements";
import { getCharactersByName } from "./utils/api";
import { Character } from "./components/Character";

export function Searchbar(main) {
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

  async function searchCharacters(query) {
    const characters = await getCharactersByName(query);
    // if lesser are needed: const newArray = characters.slice(startIndex, amountItems);
    const characterElements = characters.map((singleCharacter) => {
      return Character({
        name: singleCharacter.name,
        imgSrc: singleCharacter.image,
      });
    });
    main.append(...characterElements);
  }

  return searchbar;
}
