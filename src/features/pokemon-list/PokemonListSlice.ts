import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { get, getPokemonList, PokemonResponse } from '../../app/api';
import { RootState } from '../../app/store';

type PokemonListState = {
  list: PokemonResponse[];
};

const initialState: PokemonListState = {
  list: []
};

export const counterSlice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {
    load: (state, action: PayloadAction<PokemonResponse[]>) => {
      state.list = action.payload;
    },
  },
});

export const { load } = counterSlice.actions;

export const loadPokemonList = createAsyncThunk('pokemons/load', async (_, thunkApi) => {
  const response = (await getPokemonList()).results;
  const pokemons = Promise.all(response.map(pokemon => get<PokemonResponse>(pokemon.url)));
  thunkApi.dispatch(load(await pokemons));
});

export const selectAllPokemons = (state: RootState) => state.pokemonsList.list;

export default counterSlice.reducer;
