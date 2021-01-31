import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import pokemonListReducer from '../features/pokemon-list/PokemonListSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemonsList: pokemonListReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
