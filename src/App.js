import { useState, useEffect } from 'react';
import './App.css';
import getPokemon from './services/fetch.utils';
import Pokemon from './Pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function getAllPokemon(){
      const { data } = await getPokemon(query);
      setPokemon(data.results);
    }
    getAllPokemon();
  }, [query]);

  async function handleQuery(e){
    e.preventDefault();

    async function getAllPokemon(){
      const { data: { results } } = await getPokemon(query);
      setPokemon(results);
    }
    getAllPokemon();
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleQuery}>
          <input required onChange={(e) => setQuery(e.target.value)} />
          <button>Search</button>
        </form>
        {pokemon.map((poke, i) => <Pokemon key={poke.id + i + poke.name} poke={poke}/>)}
      </header>
    </div>
  );
}

export default App;
