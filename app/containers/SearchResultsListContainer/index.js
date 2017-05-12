/*
 *
 * SearchResultsListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectSearchResultsListContainer from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SearchResultsListComponent
  from '../../components/SearchResultsListComponent';

export class SearchResultsListContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {/* <FormattedMessage {...messages.header} />*/}
        <SearchResultsListComponent />
      </div>
    );
  }
}

const mapStateToProps = selectSearchResultsListContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  SearchResultsListContainer
);
