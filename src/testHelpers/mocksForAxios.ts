import axios from 'axios';
import { mocked } from 'ts-jest/utils';
import { PokemonListResponse, PokemonResponse } from '../app/api';
import { loadAction } from './mocksForRedux';

jest.mock('axios');
const
  mockedAxios = mocked(axios, true),
  mockResponseOnce = (obj: PokemonResponse | PokemonListResponse) => mockedAxios.get.mockResolvedValueOnce({ data: obj });

export function mockAxiosResponses() {
  mockResponseOnce({
    count: 2, next: '', previous: '', results: [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' }
    ]
  });
  mockResponseOnce(loadAction.payload[0]);
  mockResponseOnce(loadAction.payload[1]);
}