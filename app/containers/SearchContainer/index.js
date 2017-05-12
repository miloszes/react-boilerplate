/*
 *
 * SearchContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectSearchContainer from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import SearchComponent from '../../components/SearchComponent';

export class SearchContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {/* <FormattedMessage {...messages.header} />*/}

        {/* SearchContainer*/}

        <SearchComponent />
      </div>
    );
  }
}

const mapStateToProps = selectSearchContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
