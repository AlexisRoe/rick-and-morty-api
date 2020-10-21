export async function getCharacterById(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const character = await response.json();

  return character;
}

export async function getCharactersByPage(page = 1) {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const response = await fetch(url);
  const characterPage = await response.json();

  return characterPage.results;
}
export async function getCharactersByName(query) {
  const url = `https://rickandmortyapi.com/api/character/?name=${query}`;
  const response = await fetch(url);
  const charactersQuery = await response.json();

  return charactersQuery.results;
}
