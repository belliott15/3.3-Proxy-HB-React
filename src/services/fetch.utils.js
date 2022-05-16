
export default async function getPokemon(){
  const rawResponse = await fetch(`http://localhost:8888/.netlify/functions/Pokemon`);
  const data = await rawResponse.json();
  
  return data;
}