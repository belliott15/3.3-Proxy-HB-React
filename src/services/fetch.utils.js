
export default async function getPokemon(query){
  const response = await fetch(`http://localhost:8888/.netlify/functions/pokemon?name=${query}`);
  const data = response.json();

  return data;
}