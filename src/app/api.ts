import axios from 'axios';

type PokemonListResponse = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
}

const get = async <T>(url: string) => (await axios.get<T>(`https://pokeapi.co/api/v2/${url}`)).data;

export const getPokemonList = () => get<PokemonListResponse>('pokemon');
