
export default async function getPokemon(query){
  const rawResponse = await fetch(`./netlify/functions/pokemons?query=${query}`);
  const data = await rawResponse.json();

  return data;
}