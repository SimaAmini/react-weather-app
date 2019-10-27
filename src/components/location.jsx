import React from 'react';

const Location = props => {
  return (
    <div className="header__location">
      {props.location ? props.location.city : ''}
      {props.location ? `, ${props.location.country}` : ''}
    </div>
  );
};

export default Location;
