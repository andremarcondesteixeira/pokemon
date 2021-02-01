import React from 'react';

import './PokemonTypeBadge.css';

export interface PokemonTypeBadgeProps {
  typeName: string;
  backgroundColor: string;
  icon: JSX.Element;
}

export const PokemonTypeBadge: React.FC<PokemonTypeBadgeProps> = ({
  typeName,
  backgroundColor,
  icon,
  ...props
}) => {
  return (
    <div
      className={`pokemon-type-badge pokemon-type-badge--${typeName.toLowerCase()}`}
      style={{ backgroundColor }}
      {...props}
    >
      { icon }
      {typeName}
    </div>
  );
};
