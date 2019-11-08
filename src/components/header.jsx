import React from 'react';

import Location from './location';
import CurrentDate from './current-date';

const Header = ({ city, country }) => {
  return (
    <header className="header">
      <Location city={city} country={country} />
      <CurrentDate />
    </header>
  );
};

export default Header;
