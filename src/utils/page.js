import { getCharactersByPage } from "./api";
import { Character } from "../components/Character";
import { createElement } from "./elements";

export function getMoreCharacter(page = 1) {
  const main = createElement("main", {
    className: "main",
  });

  async function getThemAll =  () => {
    const characters = await getCharactersByPage(page);
    characters.forEach((singleCharacter) => {
      main.append(
        Character({
          name: singleCharacter.name,
          imgSrc: singleCharacter.image,
        })
      );
    });
  } 
 
  
  return main;
}
