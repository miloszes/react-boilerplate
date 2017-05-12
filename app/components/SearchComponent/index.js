/**
*
* SearchComponent
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

import { Input } from 'muicss/react';

class SearchComponent extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.searchComponent}>

        {/* <span>
          <FormattedMessage {...messages.search} />
        </span>

        <input placeholder="search" />*/}

        <Input label="Search" hint="Type to search..." />

      </div>
    );
  }
}

export default SearchComponent;
