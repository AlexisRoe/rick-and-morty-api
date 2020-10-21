import "./app.css";
import { createElement } from "./utils/elements";
import { getCharacterById } from "./utils/api";
import { Character } from "./components/Character";

function App() {
  const main = createElement("main");

  async function getCharacter() {
    const character1 = await getCharacterById(1);
    const character2 = await getCharacterById(2);
    main.append(
      Character({ name: character1.name, imgSrc: character1.image }),
      Character({ name: character2.name, imgSrc: character2.image })
    );
  };

  getCharacter();

  const container = createElement("div", { children: [main] });
  return container;
}

export default App;
