import "./app.css";
import { createElement } from "./utils/elements";
import { getCharactersByName } from "./utils/api";
import { Character } from "./components/Character";
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";
import { Button } from "./components/Button";

function App() {
  let queryName = null;
  let nextPage = null;

  const page = createElement("div", {
    className: "page",
  });
  const header = Header();
  const main = createElement("article", { className: "main" });

  const searchBar = Searchbar({
    oninput: (event) => {
      main.innerHTML = "";
      searchCharacters(event);
    },
    onsubmit: (event) => {
      main.innerHTML = "";
      searchCharacters(event);
    },
  });

  const toTopButton = createElement("div",{
    className: "button-to-top",
    innerText: "⇧",
    onclick: () => {
      window.scrollTo(0,0);
    }
  })

  //not in usuage anymore
  // 
  // const infiniteButton = Button({
  //   innerText: "Load more",
  //   className: "nextButton",
  //   disabled: true,
  //   onclick: () => {
  //     searchCharacters(queryName, nextPage);
  //   },
  // });

  let intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.intersectionRatio > 0 && nextPage > 1
          ? searchCharacters(queryName, nextPage)
          : console.log("nothing to load");
      });
    },
    {
      root: null,
      margin: `0px`,
      threshold: 0,
    }
  );

  async function searchCharacters(query, page) {
    const characters = await getCharactersByName(query, page);
    const characterElements = characters.results.map((character) => {
      return Character({
        name: character.name,
        imgSrc: character.image,
        status: character.status,
        species: character.species,
        type: character.type,
        origin: character.origin.name,
        location: character.location.name,
      });
    });

    // infiniteButton.disabled = !characters.info.next;

    nextPage = characters.info.next?.match(/\d+/)[0];
    queryName = query;
    main.append(...characterElements);
    intersectionObserver.observe(document.querySelector(".main > :last-child"));
    toTopButton.style.display = "block";
  }

  page.append(header);
  page.append(searchBar);
  page.append(main);
  page.append(toTopButton);

  // infinite loading make it useless
  // page.append(infiniteButton);
  

  return page;
}

export default App;
