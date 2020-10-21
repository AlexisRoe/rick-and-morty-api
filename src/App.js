import "./app.css";
import { createElement } from "./utils/elements";
import { getCharactersByPage } from "./utils/api";

import { Character } from "./components/Character";
import { Header } from "./components/Header";

function App() {
  const page = createElement("div");

  const header = Header();
  /* const header = createElement("header", { className: "header", innerText: "Rick and Morty" }); */
  page.append(header);

  const main = createElement("main", { className: "main" });

  async function getMoreCharacter(page = 1) {
    const characters = await getCharactersByPage(page);
    characters.forEach(singleCharacter => {
      main.append(
        Character({
          name: singleCharacter.name,
          imgSrc: singleCharacter.image,
        })
      );
    });
  }

  getMoreCharacter();

  page.append(main);
  return page;
}

export default App;
