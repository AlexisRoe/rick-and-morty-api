  /*
 * Get one page after another, as an archive
*/

  async function getMoreCharacter(page = 1) {
    const characters = await getCharactersByPage(page);
    // if lesser are needed: const newArray = characters.slice(startIndex, amountItems);
    const characterElements = characters.map((singleCharacter) => {
      return Character({
        name: singleCharacter.name,
        imgSrc: singleCharacter.image,
      });
    });
    main.append(...characterElements);
  } 
  
  getMoreCharacter();
  