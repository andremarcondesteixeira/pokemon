import React from 'react';

import './PokemonTypeBadge.css';
import { getTypeIcon } from './PokemonTypeIcons';

export function PokemonTypeBadge(props: {
  typeName: string;
}) {
  return (
    <div
      className={`pokemon-type-badge background-color-${props.typeName.toLowerCase()}`}
    >
      {getTypeIcon(props.typeName)}
      {props.typeName}
    </div>
  );
};
