import React from 'react';
import { PokemonResponse } from '../../../app/api';
import { PokemonTypeBadge } from '../../../components/PokemonTypeBadge';
import './PokemonListItem.css';

export function PokemonListItem(props: { pokemon: PokemonResponse }) {
  const types = props.pokemon.types.map((type, index) => <PokemonTypeBadge typeName={type.type.name} key={index} />);
  const mainTypeName = props?.pokemon?.types?.[0]?.type?.name?.toLowerCase();
  const className = `pokemon-list-item background-color-${mainTypeName}-secondary`;
  return (
    <li className={className}>
      <div className={'id'}>#{props.pokemon.id.toString().padStart(3, '0')}</div>
      <h2>{props.pokemon.name}</h2>
      <ul>{types}</ul>
    </li>
  );
}