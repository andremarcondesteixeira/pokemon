import React from 'react';

import { PokemonList } from './features/pokemon-list/PokemonList';


function App() {
  return <>
    <h1>Pokédex</h1>
    <p>Select a Pokemon from the list below</p>
    <PokemonList />
  </>;
}

export default App;
