import { mockAxiosResponses } from '../../testHelpers/mocksForAxios';
import { finalState, initialState, loadAction, store } from '../../testHelpers/mocksForRedux';
import reducer, { loadPokemonList, selectAllPokemons } from '../pokemon-list/PokemonListSlice';

describe('PokemonListSlice', () => {
  test('reducer', () => expect(reducer(initialState.pokemonsList, loadAction)).toStrictEqual(finalState.pokemonsList));

  test('selectAllPokemons selector', () => {
    const pokemonList = selectAllPokemons(finalState);
    expect(pokemonList).toStrictEqual(finalState.pokemonsList.list);
  });

  test('correct actions are dispatched when loading pokemons from API', () => {
    store.dispatch(loadPokemonList()).then(() => {
      mockAxiosResponses();
      expect(store.getActions()[0].type).toEqual('pokemonsList/load/pending');
      expect(store.getActions()[1].type).toEqual(loadAction.type);
      expect(store.getActions()[1].payload).toEqual(loadAction.payload);
      expect(store.getActions()[2].type).toEqual('pokemonsList/load/fulfilled');
    });
  });
});
