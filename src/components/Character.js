import { createElement } from "../utils/elements";
import "./Character.css";

export function Character({ name, imgSrc, status, species, type, origin, location }) {
  const fullName = createElement("h3", {
    className: "character-fullName",
    innerText: name,
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
    children:
    [
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
    ]
  });

  const container = createElement("section", {
    className: "character-Container",
    children: [fullName, image, content],
  });

  return container;
}
