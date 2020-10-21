import { createElement } from "../utils/elements";

export function Searchbar () {

  const searchbar = createElement("article", {
    className: "searchbar",
    children: [
      createElement("form", {
        className: "searchBar",
        children: [
          createElement("input", {
            type: "text",
            id: "input",
            placeholder: "Who are you looking for?",
          }),
          createElement("button", {
            type: "submit",
            innerText: "search",
          }),
        ],
      }),
    ],
  });

  return searchbar;
}
