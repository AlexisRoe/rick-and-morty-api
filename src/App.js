import "./app.css";
import { createElement } from "./utils/elements";
import { getCharacterById } from "./utils/api";
import { Character } from "./components/Character";

function App() {
  const main = createElement("main", {className: "main"});

  async function getCharacter() {
    const character1 = await getCharacterById(1);
    const character2 = await getCharacterById(2);
    main.append(
      Character({ name: character1.name, imgSrc: character1.image }),
      Character({ name: character2.name, imgSrc: character2.image })
    );
  };

  async function getMoreCharacter(...characterIDs){
    characterIDs.forEach(async function (element) {
      const character = await getCharacterById(element);
      main.append(Character({name: character.name, imgSrc:character.image}));
    });
  };

  /* getCharacter(); */
  getMoreCharacter(1,2,3,4,6);

  return main;
}

export default App;
