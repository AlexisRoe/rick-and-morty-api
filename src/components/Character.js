import { createElement } from "../utils/elements";

export function Character({ name, imgSrc }) {
  const fullName = createElement("h3", {
    className: "character-fullName",
    innerText: name,
  });

  const image = createElement("img", {
    className: "character-img",
    src: imgSrc,
    alt: name,
  });

  const container = createElement("div", {
    className: "character-Container",
    children: [fullName, image],
  });

  return container;
}
