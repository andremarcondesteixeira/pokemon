import axios from 'axios';

export type PokemonListResponse = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
}

export type PokemonResponse = {
  id: number;
  name: string;
  types: PokemonType[]
}

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

const baseUrl = 'https://pokeapi.co/api/v2';
export const get = async <T>(url: string) => (await axios.get<T>(url)).data;
export const getPokemonList = () => get<PokemonListResponse>(`${baseUrl}/pokemon`);
