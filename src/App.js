import { useState, useEffect } from 'react';
import './App.css';
import getPokemon from './services/fetch.utils';
import PokemonList from './PokemonList';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('char');

  useEffect(() => {
    async function getAllPokemon(){
      const response = await getPokemon(query);
      setPokemon(response.data.results);
    }
    
    getAllPokemon();
  }, [query]);

  

  async function handleQuery(e){
    e.preventDefault();

    async function getAllPokemon(){
      const { data } = await getPokemon(query);
      setPokemon(data.results);
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
        <PokemonList pokemon={pokemon}/>
      </header>
    </div>
  );
}

export default App;
