import React from 'react';
import './PokemonTypeBadge.css';
import { getTypeIcon } from './PokemonTypeIcons';

export function PokemonTypeBadge(props: { typeName: string }) {
  const typeName = props.typeName.toLowerCase();
  return (
    <li className={`pokemon-type-badge background-color-${typeName}-primary`}>
      {getTypeIcon(typeName)}
      {typeName}
    </li>
  );
};
