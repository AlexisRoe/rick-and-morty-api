import "./app.css";
import { createElement } from "./utils/elements";
import { getCharactersByName } from "./utils/api";

import { Character } from "./components/Character";
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";

function App() {
  const page = createElement("div");

  const header = Header();
  page.append(header);

  const searchBar =  Searchbar();
  page.append(searchbar);

  const main = createElement("article", { className: "main" });
  page.append(main);

 /*
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

 export async function searchCharacters(query) {
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
