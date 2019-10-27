import React from 'react';

import Location from './location';
import CurrentDate from './current-date';

const Header = props => {
  return (
    <header className="header">
      <Location city={props.location} />
      <CurrentDate />
    </header>
  );
};

export default Header;