import { getCharactersByPage } from "./api";
import { Character } from "../components/Character";
import { createElement } from "./elements";

export async function getMoreCharacters(page = 1) {
  const container = createElement("section", {
    className: "main",
  });

  const characters = await getCharactersByPage(page);

  characters.forEach((singleCharacter) => {
    container.append(
      Character({
        name: singleCharacter.name,
        imgSrc: singleCharacter.image,
      })
    );
  });

  return container;
}
