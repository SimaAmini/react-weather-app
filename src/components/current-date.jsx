import React from 'react';

const CurrentDate = () => {
  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full'
  }).format(now);

  return <div className="header__date">{formattedDate}</div>;
};

export default CurrentDate;
