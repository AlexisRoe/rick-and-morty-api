import "./app.css";
import { createElement } from "./utils/elements";
/* import { getCharacterById } from "./utils/api"; */
import { getCharactersByPage } from "./utils/api";

import { Character } from "./components/Character";

function App() {
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

  return main;
}

export default App;
