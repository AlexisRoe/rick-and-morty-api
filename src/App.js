import "./app.css";
import { createElement } from "./utils/elements";
import { getCharactersByName } from "./utils/api";
import { Character } from "./components/Character";
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";
import { Button } from "./components/Button";

function App() {
  let queryName = null;
  let nextPage = null;

  const page = createElement("div");
  const header = Header();
  const main = createElement("article", { className: "main" });
  
  const searchBar = Searchbar({
    oninput: (event) => {
      main.innerHTML = "";
      searchCharacters(event);
    },
    onsubmit: (event) => {
      main.innerHTML = "";
      searchCharacters(event);
    },
  });

  const infiniteButton = Button({
        innerText: "Load more",
        className: "nextButton",
        disabled: true,
        onclick: () => {
          searchCharacters(queryName, nextPage);
        },
      });
  
  async function searchCharacters(query, page) {
    const characters = await getCharactersByName(query, page);
    const characterElements = characters.results.map((character) => {
      return Character({
        name: character.name,
        imgSrc: character.image,
        status: character.status,
        species: character.species,
        type: character.type,
        origin: character.origin.name,
        location: character.location.name,
      });
    });

    infiniteButton.disabled = !characters.info.next;
    nextPage = characters.info.next?.match(/\d+/)[0];
    queryName = query;
    main.append(...characterElements);
  }
  
  page.append(header);
  page.append(searchBar);
  page.append(main);
  page.append(infiniteButton);
  
  return page;
}

export default App;
