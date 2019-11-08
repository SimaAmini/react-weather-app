import React from 'react';

const Location = ({ city, country }) => {
  return (
    <div className="header__location">
      {city ? city : ''}
      {country ? `, ${country}` : ''}
    </div>
  );
};

export default Location;
