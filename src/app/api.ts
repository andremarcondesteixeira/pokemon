import axios from 'axios';
import { Pokemon } from '../features/pokemon-list/Pokemon';

type PokemonListResponse = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

const get = async <T>(url: string) => (await axios.get<T>(`https://pokeapi.co/api/v2/${url}`)).data;

export const getPokemonList = () => get<PokemonListResponse>('pokemon');
