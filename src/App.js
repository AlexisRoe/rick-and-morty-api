import "./app.css";
import { createElement } from "./utils/elements";
import { getCharacterById } from "./utils/api";
import { Character } from "./components/Character";

function App() {
  const main = createElement("main", {className: "main"});

 function getMoreCharacter(...characterIDs){
    characterIDs.forEach(async element => {
      const character = await getCharacterById(element);
      main.append(Character({name: character.name, imgSrc:character.image}));
    });
  };

  getMoreCharacter(1,2,3,4,5,6,7,8,9,10,11);

  return main;
}

export default App;
