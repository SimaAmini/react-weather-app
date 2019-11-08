import React from 'react';

const Today = ({ weather }) => {
  return (
    <div className="today-container">
      <div className="today">
        <span className="today__title">Today</span>
        <div className="today__tempicon">
          <span className="today__icon">
            <i className={`wi wi-darksky-${weather.icon}`}></i>
          </span>
          <span className="today__temperature">
            {weather.temperature} &#8451;
          </span>
        </div>
        <span className="today__status">{weather.summary}</span>
      </div>
    </div>
  );
};

export default Today;
