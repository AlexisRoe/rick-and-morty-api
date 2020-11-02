import { createElement } from "../utils/elements";
import "./Character.css";
import favoritesEnabled from "../assets/favorites-enabled.svg";
import favoritesDisabled from "../assets/favorites-disabled.svg";

export function Character({id, name, src, status, species, type, origin, location, type, isFavorite}) {
  const currentFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const isFavorite = currentFavorites.includes(id);

  const favoriteImg = createElement("img", {
    src: isFavorite ? favoritesEnabled : favoritesDisabled,
    alt: isFavorite ? "Yeah, I´m your favorite" : "Don´t you like me?",
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
        children: [favoriteImg],
        onclick: () => {
          let currentFavorites = JSON.parse(
            localStorage.getItem("favorites") || "[]"
          );

          if (currentFavorites.includes(id)) {
            currentFavorites = currentFavorites.filter(
              (favorite) => favorite !== id
            );
            favoriteImg.src = favoritesDisabled;
            favoriteImg.alt = "Don´t you like me?";
          } else {
            currentFavorites.push(id);
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
