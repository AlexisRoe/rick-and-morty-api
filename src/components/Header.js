import "./header.css";
import { createElement } from "../utils/elements";

function Header() {

  const header = createElement("header", {
    className: "header",
    innerText: "Rick and Morty"
  });
  return header;
}

export default Header;
