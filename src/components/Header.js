import { createElement } from "../utils/elements";

export function Header() {
  const header = createElement("header", {
    className: "header",
    children: [
      createElement("H1", {
        innerText: "Rick and Morty",
      }),
    ],
  });
  return header;
}
