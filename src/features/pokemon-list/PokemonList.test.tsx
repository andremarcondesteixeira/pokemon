import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { store } from '../../app/store';
import { mockAxiosResponses } from '../../testHelpers/mocksForAxios';
import { PokemonList } from './PokemonList';

describe('PokemonList', () => {
  it('renders correctly', () => {
    mockAxiosResponses();
    const tree = renderer.create(
      <Provider store={store}>
        <PokemonList />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
