import { createElement } from "../utils/elements";
import "./Header.css";

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
