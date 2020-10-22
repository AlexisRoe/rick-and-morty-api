import { createElement } from "../utils/elements";
import "./Character.css";
import favoritesEnabled from "../assets/favorites-enabled.svg";
import favoritesDisabled from "../assets/favorites-disabled.svg";

export function Character({
  name,
  imgSrc,
  status,
  species,
  type,
  origin,
  location,
  id,
}) {
  let currentFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const isItThere = currentFavorites.includes(id);

  const favoriteImg = createElement("img", {
    src: isItThere ? favoritesEnabled : favoritesDisabled,
    alt: isItThere ? "It´s my favorite" : "Like me?",
    className: "favorite",
  });

  const characterHeader = createElement("div", {
    className: "characterHeader",
    children: [
      createElement("h3", {
        innerText: name,
      }),
      createElement("button", {
        className: "favoritesButton",
        onclick: () => {
          if (isItThere) {
            currentFavorites = currentFavorites.filter(
              favorite => favorite !== id
            );
          } else {
            currentFavorites.push(id);
          }

          localStorage.setItem("favorites", JSON.stringify(currentFavorites));
          favoriteImg.src = !isItThere ? favoritesEnabled : favoritesDisabled;
          favoriteImg.alt = !isItThere ? "It´s my favorite" : "Like me?";
        },
        children: [favoriteImg]
      })
    ],
  });

  const image = createElement("img", {
    className: "character-img",
    src: imgSrc,
    alt: name,
    loading: "lazy",
  });

  if (type == "") type = "unknown";

  const content = createElement("div", {
    className: "character-content",
    children: [
      createElement("p", {
        innerText: `status: ${status}`,
      }),
      createElement("p", {
        innerText: `species: ${species}`,
      }),
      createElement("p", {
        innerText: `type: ${type}`,
      }),
      createElement("p", {
        innerText: `origin: ${origin}`,
      }),
      createElement("p", {
        innerText: `status: ${location}`,
      }),
    ],
  });

  const container = createElement("section", {
    className: "character-Container",
    children: [characterHeader, image, content],
  });

  return container;
}
