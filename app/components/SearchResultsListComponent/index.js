/**
*
* SearchResultsListComponent
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

const muicss = require('muicss/react');
const Button = muicss.Button;

import RaisedButton from 'material-ui/RaisedButton';

function SearchResultsListComponent() {
  return (
    <div className={styles.searchResultsListComponent}>
      {/* <FormattedMessage {...messages.header} />*/}

      <Button color="primary">A to jest super zajebisty button</Button>

      <div />
      Oki tutaj powinna być lista :)

      {/* <RaisedButton label="Default" />*/}

    </div>
  );
}

export default SearchResultsListComponent;
