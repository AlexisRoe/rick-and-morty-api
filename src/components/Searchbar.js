import { createElement } from "../utils/elements";
import "./Searchbar.css";

export function Searchbar({ oninput, onsubmit }) {
  const input = createElement("input", {
    type: "text",
    id: "input",
    placeholder: "Who are you looking for?",
  });

  const button = createElement("button", {
    type: "submit",
    innerText: "search",
  });

  const searchbar = createElement("form", {
    className: "searchBar",
    oninput: (event) => {
      event.preventDefault();
      oninput(input.value);
    },
    onsubmit: (event) => {
      event.preventDefault();
      onsubmit(input.value);
      input.value = "";
    },
    children: [input, button],
  });
  return searchbar;
}
