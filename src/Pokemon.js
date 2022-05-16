import React from 'react';

export default function Pokemon({ poke }) {
  return (
    <div>
      <h1>{poke.pokemon}</h1>
      {poke.type2 === 'NA' ? <p>{poke.type_1}</p>
        : <p>{poke.type_1} / {poke.type_2}</p>
      }
    </div>
  );
}
