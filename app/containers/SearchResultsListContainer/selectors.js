import { createSelector } from 'reselect';

/**
 * Direct selector to the searchResultsListContainer state domain
 */
const selectSearchResultsListContainerDomain = () => state =>
  state.get('searchResultsListContainer');

/**
 * Other specific selectors
 */

/**
 * Default selector used by SearchResultsListContainer
 */

const selectSearchResultsListContainer = () =>
  createSelector(
    selectSearchResultsListContainerDomain(),
    substate => (substate ? substate.toJS() : {})
  );

export default selectSearchResultsListContainer;
export { selectSearchResultsListContainerDomain };
