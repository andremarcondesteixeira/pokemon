import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PokemonList.css';
import comparisonFunction from './PokemonListComparison';
import { PokemonListItem } from './PokemonListItem/PokemonListItem';
import { loadPokemonList, selectAllPokemons } from './PokemonListSlice';

export function PokemonList() {
  const pokemons = useSelector(selectAllPokemons, comparisonFunction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPokemonList());
  });

  return <ul className={'pokemon-list'}>
    {pokemons.map((pokemon, index) => <PokemonListItem pokemon={pokemon} key={index} />)}
  </ul>
}
