import { useState, useEffect } from 'react';
import './App.css';
import getPokemon from './services/fetch.utils';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function getAllPokemon(){
      const { data: { results } } = await getPokemon(query);
      setPokemon(results);
    }
    getAllPokemon();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
