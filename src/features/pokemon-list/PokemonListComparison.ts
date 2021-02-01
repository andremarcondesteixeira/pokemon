import { PokemonResponse, PokemonType } from '../../app/api';

export default function comparisonFunction(left: PokemonResponse[], right: PokemonResponse[]) {
  return left.length === right.length && arraysHaveSameContent(left, right);
}

function arraysHaveSameContent(left: PokemonResponse[], right: PokemonResponse[]) {
  const comparisons = left.map((pokemon, index) => pokemonsAreEqual(pokemon, right[index]));
  const result = trueForAll(comparisons);
  if (!result) console.log('were not equal: ', left, right);
  return result;
}

function trueForAll(arr: boolean[]) {
  return arr.reduce((previous, current) => previous && current, true);
}

function pokemonsAreEqual(pokemon: PokemonResponse, other: PokemonResponse) {
  return (
    pokemon.id === other.id &&
    pokemon.name === other.name &&
    allTypesAreEqual(pokemon, other)
  );
}

function allTypesAreEqual(pokemon: PokemonResponse, other: PokemonResponse) {
  const comparisons = pokemon.types.map((type, index) => typesAreEqual(type, other.types[index]));
  return trueForAll(comparisons);
}

function typesAreEqual(type: PokemonType, other: PokemonType): boolean {
  return (
    type.slot === other.slot &&
    type.type.name === other.type.name &&
    type.type.url === other.type.url
  );
}
