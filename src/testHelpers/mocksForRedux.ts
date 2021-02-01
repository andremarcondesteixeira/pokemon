import { PayloadAction } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { PokemonResponse } from '../app/api';
import { RootState, store as _store } from '../app/store';

const bulbasaur = {
  id: 1, name: 'bulbasaur', types: [
    { slot: 1, type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' } },
    { slot: 2, type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' } }
  ]
};

export const
  loadAction: PayloadAction<PokemonResponse[]> = { type: 'pokemonsList/load', payload: [bulbasaur, { ...bulbasaur, id: 2, name: 'ivysaur' }] },
  initialState = _store.getState(),
  finalState: RootState = { ...initialState, pokemonsList: { list: loadAction.payload } },
  store = createMockStore<any, ThunkDispatch<any, any, AnyAction>>([thunk])(initialState);