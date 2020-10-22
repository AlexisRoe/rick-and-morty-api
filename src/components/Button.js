import { createElement } from "../utils/elements";
import "./Button.css";

export function Button (props) {
    const button = createElement("button", {
        ...props,
    })
    return button;
}