import React from 'react';

import './PokemonTypeBadge.css';

export function PokemonTypeBadge(props: {
  typeName: string;
  icon: JSX.Element;
}) {
  return (
    <div
      className={`pokemon-type-badge background-color-${props.typeName.toLowerCase()}`}
    >{props.icon}{props.typeName}</div>
  );
};
