import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AnyAction } from 'redux';
import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { mocked } from 'ts-jest/utils';
import { PokemonListResponse, PokemonResponse } from '../../app/api';
import { RootState, store as _store } from '../../app/store';
import reducer, { loadPokemonList, selectAllPokemons } from '../pokemon-list/PokemonListSlice';

jest.mock('axios');
const mockedAxios = mocked(axios, true),
      mockResponseOnce = (obj: PokemonResponse | PokemonListResponse) => mockedAxios.get.mockResolvedValueOnce({ data: obj });

const bulbasaur = { id: 1, name: 'bulbasaur', types: [
        { slot: 1, type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' } },
        { slot: 2, type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' } }
      ]},
      loadAction: PayloadAction<PokemonResponse[]> = { type: 'pokemonList/load', payload: [bulbasaur, { ...bulbasaur, id: 2, name: 'ivysaur' }] },
      initialState = _store.getState(),
      finalState: RootState = { ...initialState, pokemonsList: { list: loadAction.payload } },
      store = createMockStore<any, ThunkDispatch<any, any, AnyAction>>([thunk])(initialState);

test('reducer', () => expect(reducer(initialState.pokemonsList, loadAction)).toStrictEqual(finalState.pokemonsList));

test('selectAllPokemons selector', () => {
  const pokemonList = selectAllPokemons(finalState);
  expect(pokemonList).toStrictEqual(finalState.pokemonsList.list);
});

test('correct actions are dispatched when loading pokemons from API', () => {
  mockResponseOnce({
    count: 2, next: '', previous: '', results: [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' }
    ]
  });
  mockResponseOnce(loadAction.payload[0]);
  mockResponseOnce(loadAction.payload[1]);

  store.dispatch(loadPokemonList()).then(() => {
    expect(store.getActions()[0].type).toEqual('pokemons/load/pending');
    expect(store.getActions()[1].type).toEqual(loadAction.type);
    expect(store.getActions()[1].payload).toEqual(loadAction.payload);
    expect(store.getActions()[2].type).toEqual('pokemons/load/fulfilled');
  });
});
