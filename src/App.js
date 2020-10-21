import "./app.css";
import { createElement } from "./utils/elements";
import { getCharactersByName } from "./utils/api";

import { Character } from "./components/Character";
import { Header } from "./components/Header";
/* 
import { getCharactersByPage } from "./utils/api";
import { Searchbar } from "./components/Searchbar";
*/


function App() {
  const page = createElement("div");

  const header = Header();
  page.append(header);

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
          };
          event.preventDefault();
          searchCharacters(inputField.value);
          inputField.value ="";
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

  page.append(searchbar);

  const main = createElement("article", { className: "main" });
  page.append(main);

 /*
 *
 * Get one page after another

  async function getMoreCharacter(page = 1) {
    const characters = await getCharactersByPage(page);
    // if lesser are needed: const newArray = characters.slice(startIndex, amountItems);
    const characterElements = characters.map((singleCharacter) => {
      return Character({
        name: singleCharacter.name,
        imgSrc: singleCharacter.image,
      });
    });
    main.append(...characterElements);
  } 
  
  getMoreCharacter();
  
  */

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

  return page;
}

export default App;
