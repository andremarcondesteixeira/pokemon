import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import comparisonFunction from './PokemonListComparison';
import { PokemonListItem } from './PokemonListItem/PokemonListItem';
import { loadPokemonList, selectAllPokemons } from './PokemonListSlice';

export function PokemonList() {
  const pokemons = useSelector(selectAllPokemons, comparisonFunction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPokemonList());
  });

  return <ul>
    {pokemons.map((pokemon, index) => <li key={index}><PokemonListItem pokemon={pokemon} /></li>)}
  </ul>
}
