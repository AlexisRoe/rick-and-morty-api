import { createElement } from "../utils/elements";
import "./Character.css";
import favoritesEnabled from "../assets/favorites-enabled.svg";
import favoritesDisabled from "../assets/favorites-disabled.svg";

export function Character({id, name, src, status, species, type, origin, location, type, isFavorite}) {
  const currentFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const isItThere = currentFavorites.includes(prop.id);

  const favoriteImg = createElement("img", {
    src: isItThere ? favoritesEnabled : favoritesDisabled,
    alt: isItThere ? "Yeah, I´m your favorite" : "Don´t you like me?",
    className: "favorite",
  });

  const characterHeader = createElement("div", {
    className: "characterHeader",
    children: [
      createElement("h3", {
        innerText: prop.name,
      }),
      createElement("button", {
        className: "favoritesButton",
        children: [favoriteImg],
        onclick: () => {
          let currentFavorites = JSON.parse(
            localStorage.getItem("favorites") || "[]"
          );

          if (currentFavorites.includes(prop.id)) {
            currentFavorites = currentFavorites.filter(
              (favorite) => favorite !== prop.id
            );
            favoriteImg.src = favoritesDisabled;
            favoriteImg.alt = "Don´t you like me?";
          } else {
            currentFavorites.push(prop.id);
            favoriteImg.src = favoritesEnabled;
            favoriteImg.alt = "Yeah, I´m your favorite";
          }

          localStorage.setItem("favorites", JSON.stringify(currentFavorites));
        },
      }),
    ],
  });

  const image = createElement("img", {
    className: "character-img",
    src: prop.imgSrc,
    alt: prop.name,
    loading: "lazy",
  });

  if (prop.type == "") prop.type = "unknown";

  const content = createElement("div", {
    className: "character-content",
    children: [
      createElement("p", {
        innerText: `status: ${prop.status}`,
      }),
      createElement("p", {
        innerText: `species: ${prop.species}`,
      }),
      createElement("p", {
        innerText: `type: ${prop.type}`,
      }),
      createElement("p", {
        innerText: `origin: ${prop.origin}`,
      }),
      createElement("p", {
        innerText: `status: ${prop.location}`,
      }),
    ],
  });

  const container = createElement("section", {
    className: "character-Container",
    children: [characterHeader, image, content],
  });

  return container;
}
