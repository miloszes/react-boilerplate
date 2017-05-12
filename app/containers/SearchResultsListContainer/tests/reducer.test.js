import expect from 'expect';
import searchResultsListContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('searchResultsListContainerReducer', () => {
  it('returns the initial state', () => {
    expect(searchResultsListContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
