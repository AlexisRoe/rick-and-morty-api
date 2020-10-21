import "./app.css";
import { createElement } from "./utils/elements";
import { getCharactersByPage } from "./utils/api";

import { Character } from "./components/Character";
import { Header } from "./components/Header";

function App() {
  const page = createElement("div");

  const header = Header();
  page.append(header);

  const main = createElement("article", { className: "main" });
  page.append(main);

  async function getMoreCharacter(page = 1) {
    const characters = await getCharactersByPage(page);
    const characterElements = characters.map((singleCharacter) => {
      return Character({
        name: singleCharacter.name,
        imgSrc: singleCharacter.image,
      });
    });
    main.append(...characterElements);
  }

  getMoreCharacter();


  return page;
}

export default App;
