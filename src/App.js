import "./app.css";
import { createElement } from "./utils/elements";
import { getCharactersByName } from "./utils/api";
import { Character } from "./components/Character";
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";

function App() {
  const page = createElement("div");
  const header = Header();
  const main = createElement("article", { className: "main" });
  
  const searchBar = Searchbar({
    oninput: (event) => {
      searchCharacters(event);
    },
    onsubmit: (event) => {
      searchCharacters(event);
    },
  });
  
  async function searchCharacters(query) {
    const characters = await getCharactersByName(query);
    const characterElements = characters.map((singleCharacter) => {
      return Character({
        name: singleCharacter.name,
        imgSrc: singleCharacter.image,
      });
    });
    main.innerHTML = "";
    main.append(...characterElements);
  }
  
  page.append(header);
  page.append(searchBar);
  page.append(main);

  return page;
}

export default App;
