import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke, i) => <Pokemon key={poke.id + i + poke.name} poke={poke}/>)}
    </div>
  );
}
